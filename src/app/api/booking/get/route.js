// app/api/booking/get/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import TempBooking from "@/models/TempBooking";
import { cookies } from "next/headers";

export async function GET() {
  await connectDB();
  const cookieStore =await cookies();
  const bookingId = cookieStore.get("bookingId")?.value;
  if (!bookingId) return NextResponse.json({ error: "no booking" }, { status: 400 });

  const temp = await TempBooking.findById(bookingId).lean();
  if (!temp) return NextResponse.json({ error: "not found" }, { status: 404 });

  return NextResponse.json({ ok: true, bookingData: temp });
}

