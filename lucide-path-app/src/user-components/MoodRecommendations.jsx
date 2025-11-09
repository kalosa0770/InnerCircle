import React from "react";
import recommendations from "./recommendations";

const MoodRecommendations = ({ mood }) => {
  const todaysSelection = recommendations[mood]?.slice(0, 2) || [];

  return (
    <div className="py-6 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Today's Selection for your <span className="text-amber-400">{mood}</span> mood
      </h2>

      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {todaysSelection.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 md:w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105"
          >
            <div className="w-full h-40 md:h-48 overflow-hidden rounded-t-2xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex flex-col py-4 px-5">
              <div className="flex items-center mb-2">
                <div className={`w-3 h-3 rounded-full ${item.accentColor} mr-3`}></div>
                <h3 className="text-lg md:text-xl text-white font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodRecommendations;
