
// app/api/booking/create/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import TempBooking from "@/models/TempBooking";

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  // expect body.train {name, number, price, class, src, dest, date}
  const { train, ticketPrice, selectedClass, quota,bookingDate, duration, formattedDate, formattedArrivalDate,availability } = body;
  if (!train || !train.train_number) {
    return NextResponse.json({ error: "train required" }, { status: 400 });
  }


  // create temp booking with amount = train.price (server-side authoritative)
  const temp = await TempBooking.create({
    train: {
      name: train.train_name || "",
      number: train.train_number || "",
      class: selectedClass || "",
      price: Number(ticketPrice) || 0,
      srcCode: train.from || "",
      destCode: train.to || "",
      srcName: train.from_station_name || "",
      destName: train.to_station_name || "",
      date: bookingDate || "",
      quota: quota || "",
      distance: train.distance || 0,
      duration: duration || "",
      departureTime: train.from_std || "",
      departureDate: formattedDate || "",
      arrivalTime: train.to_std || "",
      arrivalDate: formattedArrivalDate || "",
    },
    amount: Number(ticketPrice) || 0,
    availability:availability || "",
  });

  // set httpOnly cookie bookingId
  const res = NextResponse.json({ ok: true, bookingId: temp._id });
  res.cookies.set({
    name: "bookingId",
    value: temp._id.toString(),
    httpOnly: true,
    path: "/",
    maxAge: 60 * 30, // 30 minutes
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return res;
}
