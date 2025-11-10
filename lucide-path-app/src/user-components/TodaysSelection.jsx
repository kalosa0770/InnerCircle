import React, { useState } from "react";
import recommendations from "./recommendations";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TodaysSelection = ({ mood }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  // If no mood is selected, show nothing
  if (!mood) return null;

  // Get today's recommendations for the mood
  const moodRecs = recommendations[mood] || [];

  

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < moodRecs.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const card = moodRecs[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-4 md:p-6 rounded-2xl bg-teal/30 backdrop-blur-sm flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-extrabold text-gold mb-4 text-start">
        Recommended for you today
      </h2>

      {/* Card */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Image */}
        <div className="w-full md:w-1/2 h-48 md:h-60 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-3 gap-3">
              <div className={`w-3 h-3 rounded-full ${card.accentColor}`}></div>
              <h3 className="text-xl md:text-2xl text-white font-bold">{card.title}</h3>
            </div>
            <p className="text-white text-sm md:text-base leading-relaxed">{card.text}</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4 w-full">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                currentIndex === 0
                  ? "bg-gray-500/50 text-white cursor-not-allowed"
                  : "bg-teal-500 text-white hover:bg-teal-600"
              }`}
            >
              <ArrowLeft className="w-4 h-4" /> Prev
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === moodRecs.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                currentIndex === moodRecs.length - 1
                  ? "bg-gray-500/50 text-white cursor-not-allowed"
                  : "bg-teal-500 text-white hover:bg-teal-600"
              }`}
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysSelection;
