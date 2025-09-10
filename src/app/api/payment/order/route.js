// import Razorpay from "razorpay";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { amount } = await req.json();

//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,
//       key_secret: process.env.RAZORPAY_SECRET,
//     });

//     const options = {
//       amount: amount * 100, // Amount in paise (₹500 => 50000)
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     };

//     const order = await razorpay.orders.create(options);
//     return NextResponse.json({ orderId: order.id, amount: order.amount });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
//   }
// }


import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: amount * 100, // Razorpay works in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json({ orderId: order.id, amount: order.amount });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Order creation failed" });
  }
}

