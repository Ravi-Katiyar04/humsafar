// import crypto from "crypto";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();
//     const sign = razorpay_order_id + "|" + razorpay_payment_id;
//     const expectedSign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_SECRET)
//       .update(sign)
//       .digest("hex");

//     if (razorpay_signature === expectedSign) {
//       return NextResponse.json({ success: true });
//     } else {
//       return NextResponse.json({ success: false }, { status: 400 });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Verification failed" }, { status: 500 });
//   }
// }

import crypto from "crypto";
import connectDB from '@/lib/db';
import Ticket from "@/models/Ticket";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    // const secret = process.env.RAZORPAY_SECRET;
    // if (!secret) {
    //   return new Response(JSON.stringify({ success: false, error: "Missing Razorpay secret" }), {
    //     status: 500,
    //   });
    // }

    // Verify signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return new Response(JSON.stringify({ success: false, error: "Invalid Signature" }), {
        status: 400,
      });
    }

    // Save Ticket in MongoDB (replace dummy data with real booking data)
    const ticket = await Ticket.create({
      pnr: `PNR${Math.floor(100000 + Math.random() * 900000)}`,
      passengerName: "Ravi Katiyar",
      trainNo: "22538",
      trainName: "Gorakhdham Express",
      fromStation: "CNB",
      toStation: "ASH",
      travelDate: "2025-09-09",
      seat: "S3-45",
      classType: "SL",
      quota: "GN",
      amount: 500,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });

    return new Response(
      JSON.stringify({ success: true, ticketId: ticket._id }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}


