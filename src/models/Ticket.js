
// models/Ticket.js
import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  train: Object,
  PRN: { type: String, unique: true , required: true, default: () => 'PRN' + Math.random().toString(36).substr(2, 9).toUpperCase()},
  passengers: [],  
  boardingInfo: {
    boardingPoint: String,
    boardingTime: String,
    boardingDate: String,
  },
  fare: {
    TicketFare: Number,
    IRCTconvience: Number,
    insurance: Number,
    GST: Number,
    totalFare: Number,
  },
  payment: {
    orderId: String,
    paymentId: String,
    signature: String,
    method: String,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema);

