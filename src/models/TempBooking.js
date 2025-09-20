// models/TempBooking.js
import mongoose from "mongoose";

const TempBookingSchema = new mongoose.Schema({
  irctcId: String,
  train: {
    name: String,
    number: String,
    class: String,
    price: Number, // store numeric rupees
    srcCode: String,
    destCode: String,
    srcName: String,
    destName: String,
    date: String, // store date string or ISO
    quota: String,
    distance: Number, // in km
    duration: String, // e.g., "5h 30m"
    departureTime: String, // e.g., "14:30"
    departureDate: String,
    arrivalTime: String, // e.g., "19:00"
    arrivalDate: String,
  },
  passengers: [{
    fullName: String,
    age: Number,
    gender: String,
    berthPreference: String,
    nationality: String,
    // you can support multiple passengers as array if needed
  }],
  status: {
    type: String,
    enum: ["pending", "paid", "cancelled", "expired"],
    default: "pending",
  },
  contact: {
    mobile: String,
    email: String,
  },
  boardingDetails: String,
  availability: String, // e.g., "AVAILABLE-180"
  freeCancellation: { type: Boolean, default: false },
  additionalPreferences: {
    insurance: { type: Boolean, default: false },
    autoUpgradation: { type: Boolean, default: false },
    confirmedBerth: { type: Boolean, default: false },
  },
  GST: { type: Boolean, default: false },
  address: String,
  amount: Number, // store final amount (in rupees)
  createdAt: {
    type: Date,
    default: Date.now,
    // TTL: expire temp booking after 30 minutes
    // Note: Mongoose will create TTL index when model compiled
    expires: 60 * 30, // 30 minutes
  },
});

export default mongoose.models.TempBooking || mongoose.model("TempBooking", TempBookingSchema);

