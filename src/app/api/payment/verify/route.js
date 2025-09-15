// app/api/payment/verify/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import TempBooking from "@/models/TempBooking";
import Ticket from "@/models/Ticket";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  // data should include: razorpay_order_id, razorpay_payment_id, razorpay_signature
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = data;

  const cookieStore = await cookies();
  const bookingId = cookieStore.get("bookingId")?.value;
  if (!bookingId) return NextResponse.json({ error: "no booking cookie" }, { status: 400 });

  const temp = await TempBooking.findById(bookingId);
  if (!temp) return NextResponse.json({ error: "temp booking not found" }, { status: 404 });

  // Verify signature
  const generated_signature = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  if (generated_signature !== razorpay_signature) {
    return NextResponse.json({ error: "invalid signature" }, { status: 400 });
  }

  const pnr = "PNR" + Math.floor(10000000000 + Math.random() * 90000000000).toString().padStart(10, "0");
  const generateRandomStatus = (berthPreference) => {
    const coaches = ["B1", "B2", "B3", "B4", "B5", "B6"];
    const coach = coaches[Math.floor(Math.random() * coaches.length)];
    const seat = Math.floor(Math.random() * 72) + 1; // seat numbers 1–72
    const berth = berthPreference && berthPreference !== "No preference"
      ? berthPreference.toUpperCase()
      : ["LOWER", "MIDDLE", "UPPER", "SIDE LOWER", "SIDE UPPER"][Math.floor(Math.random() * 5)];

    return `CNF/${coach}/${seat}/${berth}`;
  };

  const passengersWithStatus = temp.passengers.map(p => (
    {
    ...p._doc,
    status: generateRandomStatus(p.berthPreference)
  }));


  const irctConvience = Math.round(temp.amount * 0.05); // 5% convenience fee
  const insurance = temp.additionalPreferences.insurance ? 20 * temp.passengers.length : 0;
  const gst = Math.round((temp.amount + irctConvience + insurance) * 0.18); // 18% GST
  const totalFare = temp.amount + irctConvience + insurance + gst;

  // Create final ticket
  const ticket = await Ticket.create({
    train: temp.train,
    PRN: pnr, // will be auto-generated
    passengers: passengersWithStatus,
    boardingInfo: {
      boardingPoint: temp.bordingPoint || "KANPUR CENTRAL - CNB",
      boardingTime: temp.departureTime || "14:30",
      boardingDate: temp.departureDate || "2023-09-28",
    },
    fare: {
      TicketFare: temp.amount,
      IRCTconvience: irctConvience,
      insurance: insurance,
      GST: gst,
      totalFare: totalFare,
    },
    payment: {
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
      method: "razorpay",
    },
  });

  await temp.save();

  // clear the cookie (optional)
  const res = NextResponse.json({ ok: true, ticketId: ticket._id });
  res.cookies.set({
    name: "bookingId",
    value: "",
    path: "/",
    maxAge: 0,
  });

  return res;
}


