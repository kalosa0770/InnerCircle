import React, { useState } from "react";
import { Lightbulb, Reply } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MoodEntry = ({ onMoodSelect }) => {
  const [selectMood, setSelectMood] = useState(null);
  const navigate = useNavigate();

  const moods = [
    { name: "Happy", emoji: "😀" },
    { name: "Sad", emoji: "😥" },
    { name: "Stressed", emoji: "😖" },
    { name: "Depressed", emoji: "😭" },
    { name: "Anxious", emoji: "😬" },
    { name: "Heartbroken", emoji: "💔" },
    { name: "Tired", emoji: "😴" },
    { name: "Motivated", emoji: "🏃‍♂️" },
    { name: "Calm", emoji: "😎" },
    { name: "Focused", emoji: "🎯" },
    { name: "Confused", emoji: "😕" },
    { name: "Excited", emoji: "🤩" },
    { name: "Grateful", emoji: "🙏" },
    { name: "Bored", emoji: "🥱" },
    { name: "Lonely", emoji: "😔" },
  ];

  const handleSelectMood = (mood) => {
    setSelectMood(mood);
    onMoodSelect(mood);
  };

  const handleMoreClick = () => {
    if (!selectMood) return;
    navigate(`/mood-questions/${selectMood.name}`, { state: { mood: selectMood } });
  };

  return (
    <div className="flex flex-col py-6 px-5 md:py-8 md:px-8 rounded-2xl bg-teal-900/30 backdrop-blur-md border border-gold/20 shadow-[0_0_25px_rgba(255,215,0,0.08)] w-full">
      {/* Title */}
      <h2 className="text-lg md:text-xl font-extrabold mb-3 text-gold flex items-center gap-2">
        <span className="bg-gold/20 p-2 rounded-full">
          <Lightbulb className="w-5 h-5 text-gold" />
        </span>
        Track Your Mood
      </h2>

      {/* Prompt */}
      <p className="text-teal-100 mb-5 text-start text-base md:text-lg">
        Tap an emoji that best describes how you feel today:
      </p>

      {/* Mood Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => handleSelectMood(mood)}
            className={`text-4xl md:text-5xl rounded-full p-3 transition-all duration-200 shadow-md 
              ${
                selectMood?.name === mood.name
                  ? "bg-gold text-teal-950 scale-110 shadow-[0_0_15px_rgba(255,215,0,0.5)]"
                  : "hover:bg-teal-800/40 hover:scale-105"
              }`}
            title={mood.name}
          >
            {mood.emoji}
          </button>
        ))}
      </div>

      {/* Selection Feedback */}
      {selectMood && (
        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl font-medium text-white">
            You’re feeling{" "}
            <span className="text-gold font-bold">
              {selectMood.name}
            </span>{" "}
            today {selectMood.emoji}
          </p>

          <button
            onClick={handleMoreClick}
            className="mt-5 px-6 py-2 bg-gold text-teal-950 font-semibold rounded-full hover:bg-yellow-400 transition-all duration-200 flex items-center gap-2 mx-auto shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]"
          >
            Share more about this mood
            <Reply className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MoodEntry;
