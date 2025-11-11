import React, { useState, useContext } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import questionsMood from "./questionsMood";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { AppContent } from "../context/AppContent";
import axios from "axios";
import { toast } from "react-toastify";

const moodEmojis = {
  Happy: "😀",
  Sad: "😥",
  Stressed: "😖",
  Depressed: "😭",
  Anxious: "😬",
  Heartbroken: "💔",
  Tired: "😴",
  Motivated: "🏃‍♂️",
  Calm: "😎",
  Focused: "🎯",
  Confused: "😕",
  Excited: "🤩",
  Grateful: "🙏",
  Bored: "🥱",
  Lonely: "😔",
};

const MoodQuestions = () => {
  const { backendUrl, userData } = useContext(AppContent);
  const { mood: moodParam } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const mood = location.state?.mood || { name: moodParam, emoji: moodEmojis[moodParam] };
  const questions = questionsMood[mood.name] || [];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSubmit = async () => {
    if (!userData) return;

    setSubmitting(true);
    try {
      await axios.post(`${backendUrl}/api/journals`, {
        userId: userData._id,
        mood: mood.name,
        emoji: mood.emoji,
        questions,                     // array of strings, same length as answers
        answers,  
        date: new Date(),
      });

      toast.success("Your thoughts have been recorded");

      navigate("/track"); // redirect to track mood page
    } catch (err) {
      toast.error("Failed to save journal:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1f1f] via-[#062b2b] to-[#021515] font-nunito px-4">
      <div className="bg-[#111f1f]/70 backdrop-blur-md border border-[#FFD700]/30 rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-lg flex flex-col items-center">
        
        {/* Top Back Button */}
        <div className="flex justify-between items-center w-full mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#FFD700]/90 text-[#062b2b] font-semibold px-4 py-2 rounded-full shadow hover:bg-[#FFD700] transition flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          <div className="bg-[#FFD700]/80 p-3 rounded-full shadow-md text-xl flex items-center justify-center">
            {mood.emoji}
          </div>
        </div>

        {/* Progress Bars */}
        <div className="w-full mb-6 flex gap-2">
          {questions.map((q, index) => (
            <div key={index} className="flex-1 bg-gray-600/30 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-300 ${
                  answers[index] ? "bg-[#FFD700]" : "bg-gray-400/50"
                }`}
                style={{ width: answers[index] ? "100%" : "0%" }}
              />
            </div>
          ))}
        </div>

        {/* Question */}
        <p className="text-white/90 text-center mb-6 text-sm md:text-lg">{questions[currentIndex]}</p>

        {/* Answer Textarea */}
        <textarea
          placeholder="Type your response here..."
          value={answers[currentIndex]}
          onChange={handleChange}
          className="w-full border border-[#FFD700]/40 rounded-xl p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-white bg-[#062b2b]/60"
          rows="4"
          required
        />

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 justify-between w-full">
          {currentIndex > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 bg-[#FFD700]/90 text-[#062b2b] font-semibold px-4 py-2 rounded-full shadow hover:bg-[#FFD700] transition flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          )}

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={!answers[currentIndex].trim()}
              className={`flex-1 px-4 py-2 rounded-full flex gap-2 transition items-center justify-center
                ${answers[currentIndex].trim() ? "bg-[#FFD700] text-[#062b2b] hover:bg-yellow-400" : "bg-gray-500/60 text-white cursor-not-allowed"}`}
            >
              Next <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!answers[currentIndex].trim() || submitting}
              className={`flex-1 px-4 py-2 rounded-xl flex gap-2 transition items-center justify-center
                ${answers[currentIndex].trim() ? "bg-[#FFD700] text-[#062b2b] hover:bg-yellow-400" : "bg-gray-500/60 text-white cursor-not-allowed"}`}
            >
              Submit <Save className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodQuestions;
