import mongoose from 'mongoose';

const trainSchema = new mongoose.Schema(
  {
    trainNo: {
      type: String,
      required: [true, 'Train number is required'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Train name is required'],
    },
    source: {
      type: String,
      required: [true, 'Source station is required'],
    },
    destination: {
      type: String,
      required: [true, 'Destination station is required'],
    },
    classes: {
      type: [String], // e.g., ['Sleeper', 'AC', 'First Class']
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Train || mongoose.model('Train', trainSchema);
