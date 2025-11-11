// routes/journalRoutes.js
import express from "express";
import Journal from "../models/journalModel.js";

const router = express.Router();

// GET all journals for a user
router.get("/:userId", async (req, res) => {
    try {
      const journals = await Journal.find({ userId: req.params.userId }).sort({ date: -1 });
      res.json({ journals });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
});
  

// POST a new journal entry
router.post("/", async (req, res) => {
    try {
      const { userId, mood, emoji, questions, answers } = req.body;
      if (!userId || !mood || !answers || !questions) {
        return res.status(400).json({ message: "Missing required fields" });
      }
  
      const newJournal = new Journal({ userId, mood, emoji, questions, answers });
      await newJournal.save();
  
      res.status(201).json({ message: "Journal saved", journal: newJournal });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
});
  

// Optional: DELETE a journal entry
router.delete("/:id", async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Journal deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting journal" });
  }
});

export default router;
