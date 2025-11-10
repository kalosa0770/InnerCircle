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
      <div className="flex gap-4 overflow-x-auto">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => handleClick(topic)}
            className={`px-4 py-3 rounded-xl text-white font-medium text-center transition-all duration-200 hover:scale-105 shadow-lg
              ${activeTopic === topic
                ? "rounded-2xl bg-teal/60 backdrop-blur-sm"
                : "rounded-2xl bg-teal/30 backdrop-blur-sm hover:bg-teal/20"}`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchByTopicCards;
