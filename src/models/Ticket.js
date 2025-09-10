import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    pnr: { type: String, required: true },
    passengerName: { type: String, required: true },
    trainNo: { type: String, required: true },
    trainName: { type: String, required: true },
    fromStation: { type: String, required: true },
    toStation: { type: String, required: true },
    travelDate: { type: String, required: true },
    seat: { type: String, required: true },
    classType: { type: String, required: true },
    quota: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentId: { type: String, required: true },
    orderId: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema);
