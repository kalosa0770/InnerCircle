// routes/moodRoutes.js
import express from "express";
import Mood from "../models/moodModel.js";

const router = express.Router();

// POST /api/moods
router.post("/", async (req, res) => {
    try {
      const { userId, emoji, name } = req.body;
  
      // Keep full timestamp if you want multiple moods per day
      const newMood = await Mood.create({ userId, emoji, name, date: new Date() });
  
      res.json({ success: true, message: "Mood saved", mood: newMood });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Error saving mood" });
    }
});
  


router.get("/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Fetch all moods for this user, sorted by date
      const moods = await Mood.find({ userId }).sort({ date: 1 });
  
      res.json({ success: true, moods });
    } catch (error) {
      console.error("Error fetching moods:", error);
      res.status(500).json({ success: false, message: "Error fetching moods", error });
    }
  });

export default router;
