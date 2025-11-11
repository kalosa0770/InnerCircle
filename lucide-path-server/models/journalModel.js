import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    mood: { type: String, required: true },
    emoji: { type: String },
    questions: [{ type: String }], // store questions for reference
    answers: [{ type: String }],   // user answers
    date: { type: Date, default: Date.now },
}, { timestamps: true });
  

export default mongoose.model("Journal", journalSchema);
