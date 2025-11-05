import React, { useState } from "react";

const topics = [
  "Anxiety",
  "Depression",
  "Mindfulness",
  "Self-Esteem",
  "Stress",
  "Sleep",
  "Motivation",
  "Relationships",
  "Gratitude",
  "Focus",
  "Productivity",
  "Emotional Health",
  "Meditation",
  "Resilience",
  "Happiness"
];

const SearchByTopicCards = ({ onSelectTopic }) => {
  const [activeTopic, setActiveTopic] = useState(null);

  const handleClick = (topic) => {
    setActiveTopic(topic);
    if (onSelectTopic) onSelectTopic(topic);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-white text-xl font-bold mb-4">Select a Topic</h2>
      <div className="flex overflow-x-auto no-scrollbar space-x-4 md:space-x-6 px-4 md:px-6 w-full">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => handleClick(topic)}
            className={`px-4 py-3 rounded-xl text-white font-medium text-center transition-all duration-200 hover:scale-105 shadow-lg
              ${activeTopic === topic
                ? "bg-amber-400 shadow-amber-400/50"
                : "bg-white/10 hover:bg-white/20"}`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchByTopicCards;
