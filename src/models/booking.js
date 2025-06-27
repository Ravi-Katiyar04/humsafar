import mongoose from 'mongoose';

const passengerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Passenger name is required'],
    },
    age: {
      type: Number,
      required: [true, 'Passenger age is required'],
    },
  },
  { _id: false }
);

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    train: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Train',
      required: true,
    },
    date: {
      type: Date,
      required: [true, 'Travel date is required'],
    },
    travelClass: {
      type: String,
      required: [true, 'Travel class is required'],
    },
    passengers: [passengerSchema],
    status: {
      type: String,
      enum: ['Booked', 'Cancelled'],
      default: 'Booked',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
