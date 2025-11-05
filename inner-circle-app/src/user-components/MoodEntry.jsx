import React, { useState } from "react";
import { ArrowRight, Lightbulb, Reply } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const MoodEntry = ({ onMoodSelect }) => {
    const [ selectMood, setSelectMood] = useState(null);

    const navigate = useNavigate();

    const moods = [
        { name: "Happy", emoji: "😀" },
        { name: "Sad", emoji: "😥"},
        { name: "Stressed", emoji: "😖"},
        { name: "Depressed", emoji: "😭"},
        { name: "Anxious", emoji: "😬"},
        { name: "Heartbroken", emoji: "💔"},
        { name: "Tired", emoji: "😴"},
        { name: "Motivated", emoji: "🏃‍♂️"},
        { name: "Calm", emoji: "😎"},
        { name: "Focused", emoji: "🎯"},
        { name: "Confused", emoji: "😕"},
        { name: "Excited", emoji: "🤩"},
        { name: "Grateful", emoji: "🙏"},
        { name: "Bored", emoji: "🥱"},
        { name: "Lonely", emoji: "😔"}
    ];

    const handleSelectMood = (mood) => {
        setSelectMood(mood);
        onMoodSelect(mood); // notify parent
      };

    const handleMoreClick = () => {
        if (!selectMood) return; // exit if no mood is selected
        
      
        navigate(`/mood-questions/${selectMood.name}`, { state: { mood: selectMood } });
    };


  return (
    <div className="flex flex-col py-5 px-4 md:py-6 md:px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl w-full">
      <h2 className="text-lg font-semibold mb-2 text-teal-900 bg-white p-2 rounded-full w-max flex gap-1">
        <div className="bg-teal-600 p-1 rounded-full">
            <Lightbulb className="w-5 h-5 text-white"/>
        </div>
        Track Your Mood
      </h2>
      <p className="text-white mb-4 text-start pt-4 px-4">
        Tap an emoji that best describes how you feel today:
      </p>
      <div className="justify-center gap-4 grid grid-cols-3 md:grid-cols-5 p-4">
        {moods.map((mood) => (
            <button
                key={mood.name}
                onClick={() =>  handleSelectMood(mood)}
                className={`text-4xl rounded-full p-3 w-max 
                            ${selectMood?.name === mood.name 
                                ? " bg-yellow-200" 
                                : "cursor-pointer hover:bg-white/10"
                            }`}      
                title={mood.name}
            >
                {mood.emoji}
            </button>
        ))}
      </div>

      {selectMood && (
        <div className="mt-6 mx-auto">
            <p className="mt-6 text-lg font-medium text-white text-center">
                You’re feeling <span className="text-amber-400 font-bold ">{selectMood.name}</span> today {selectMood.emoji}
            </p>

            <button
                onClick={handleMoreClick}
                className="mt-4 px-5 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all duration-200 flex gap-2 items-center"
                >
                Share more about this mood <Reply className="w-5 h-5" />
            </button>
        </div>
        
      )}
      
    </div>
  );
}


export default MoodEntry;