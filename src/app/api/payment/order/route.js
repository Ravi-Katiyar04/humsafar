// app/api/payment/order/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import TempBooking from "@/models/TempBooking";
import { cookies } from "next/headers";
import Razorpay from "razorpay";

const rz = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export async function POST(req) {
  await connectDB();
  const cookieStore = await cookies();
  const bookingId = cookieStore.get("bookingId")?.value;
  if (!bookingId) return NextResponse.json({ error: "no booking" }, { status: 400 });

  const temp = await TempBooking.findById(bookingId);
  if (!temp) return NextResponse.json({ error: "booking not found" }, { status: 404 });
  if (temp.status !== "pending") return NextResponse.json({ error: "booking not pending" }, { status: 400 });

  // amount validation - use server stored amount and convert to paise
  const amountInPaise = Math.round(Number(temp.amount) * 100);

  const options = {
    amount: amountInPaise,
    currency: "INR",
    receipt: `receipt_${temp._id}`,
  };

  const order = await rz.orders.create(options);


  return NextResponse.json({ ok: true, order });
}

