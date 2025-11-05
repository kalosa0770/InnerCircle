import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import questionsMood from "./questionsMood";
import { ArrowLeft, ArrowBigRight, ArrowRight, Save } from "lucide-react";

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
  const { mood: moodParam } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const mood = location.state?.mood || { name: moodParam, emoji: moodEmojis[moodParam] };
  const questions = questionsMood[mood.name] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

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

  const handleSubmit = () => {
    console.log("User answers:", answers);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600 font-nunito px-4">
      
      {/* Card container */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-6 md:p-8 w-full max-w-lg flex flex-col items-center">
        
        {/* Top back button */}
        <div className="flex justify-between items-center w-full mb-6">
          {/* Back button on the left */}
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white/90 text-teal-800 font-semibold px-4 py-2 rounded-full shadow hover:bg-white transition flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          {/* Emoji pinned to the right */}
          <div className="bg-white/80 p-3 rounded-full shadow-md text-xl flex items-center justify-center">
            {mood.emoji}
          </div>
        </div>
        {/* Two separate progress bars */}
        <div className="w-full mb-6 flex gap-2">
          {questions.map((q, index) => (
            <div key={index} className="flex-1 bg-gray-300/40 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-300 ${
                  answers[index] ? "bg-yellow-500" : "bg-gray-400/50"
                }`}
                style={{ width: answers[index] ? "100%" : "0%" }}
              />
            </div>
          ))}
        </div>

        {/* <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-white">
          Let's talk about your <span className="text-amber-400">{mood.name}</span> mood 
        </h2> */}

        <p className="text-white/90 text-center mb-6 text-sm md:text-lg">{questions[currentIndex]}</p>

        <textarea
          placeholder="Type your response here..."
          value={answers[currentIndex]}
          onChange={handleChange}
          className="w-full border border-white/30 rounded-xl p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"
          rows="4"
          required
        />

        {/* Navigation buttons */}
        <div className="flex items-center gap-4 justify-between">
          {currentIndex > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 bg-white/90 text-teal-800 font-semibold px-4 py-2 rounded-full shadow hover:bg-white transition flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5"/>
              Back
            </button>
          )}

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={!answers[currentIndex].trim()} // disable if textarea is empty
              className={`flex-1 px-4 py-2 rounded-full flex gap-2 transition items-center justify-center
                ${answers[currentIndex].trim() ? "bg-teal-900 text-white hover:bg-teal-800" : "bg-teal-500 blur-[0.5px] text-white cursor-not-allowed"}`}
            >
              Next <ArrowRight className="w-5 h-5"/>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!answers[currentIndex].trim()} // disable if textarea is empty
              className={`flex-1 px-4 py-2 rounded-xl flex gap-2 transition items-center justify-center
                ${answers[currentIndex].trim() ? "bg-teal-900 text-white hover:bg-teal-800" : "bg-teal-500 blur-[0.5px] text-white cursor-not-allowed"}`}
            >
              Submit <Save className="w-5 h-5"/>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodQuestions;
