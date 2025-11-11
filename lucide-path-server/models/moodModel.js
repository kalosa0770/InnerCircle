import mongoose from "mongoose";

const moodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  emoji: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: () => new Date().setHours(0, 0, 0, 0), // store by day only
  },
});

export default mongoose.model("Mood", moodSchema);
