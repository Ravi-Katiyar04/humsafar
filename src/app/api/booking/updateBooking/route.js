// app/api/booking/update/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import TempBooking from "@/models/TempBooking";
import { cookies } from "next/headers";

export async function POST(req) {
  await connectDB();
  const body = await req.json(); // passenger: {...}

  // expect body.train {name, number, price, class, src, dest, date}
  const { mobile, email, address, insurance, irctcId, additionalPreferences,freeCancellation,GST,boardingDetails } = body;

  const cookieStore =await cookies();
  const bookingCookie = cookieStore.get("bookingId")?.value;

  if (!bookingCookie) {
    return NextResponse.json({ error: "bookingId cookie missing" }, { status: 400 });
  }

  const temp = await TempBooking.findById(bookingCookie);
  if (!temp) return NextResponse.json({ error: "Temp booking not found" }, { status: 404 });
  if (temp.status !== "pending") return NextResponse.json({ error: "Booking not pending" }, { status: 400 });

  temp.passengers = body.passengers;
  temp.additionalPreferences = additionalPreferences;
  temp.freeCancellation=freeCancellation;
  temp.GST=GST;
  temp.boardingDetails=boardingDetails;
  temp.contact = { mobile, email };
  temp.address = address;
  temp.insurance = insurance;
  temp.irctcId = irctcId;

  await temp.save();

  return NextResponse.json({ ok: true });
}
