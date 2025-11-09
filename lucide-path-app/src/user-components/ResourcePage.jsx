import React, { useState } from "react";
import SearchByTopicCards from "./SearchByTopicCards";

const resources = [
  {
    id: 1,
    title: "Coping with Anxiety",
    topic: "Anxiety",
    description: "Practical techniques to reduce anxiety and calm your mind."
  },
  {
    id: 2,
    title: "Building Self-Esteem",
    topic: "Self-Esteem",
    description: "Learn to value yourself and boost your confidence."
  },
  {
    id: 3,
    title: "Daily Mindfulness Practice",
    topic: "Mindfulness",
    description: "Simple exercises to help you stay present and focused."
  },
  {
    id: 4,
    title: "Better Sleep Habits",
    topic: "Sleep",
    description: "Tips to improve your sleep quality and rest better."
  },
  {
    id: 5,
    title: "Managing Stress at Work",
    topic: "Stress",
    description: "Healthy ways to manage and reduce stress in your daily life."
  },
  {
    id: 6,
    title: "Finding Motivation Again",
    topic: "Motivation",
    description: "Reignite your drive and stay motivated through challenges."
  }
];

const ResourcePage = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredResources = selectedTopic
    ? resources.filter((res) => res.topic === selectedTopic)
    : resources;

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Mental Health Resources</h1>

      {/* Topic Selector */}
      <SearchByTopicCards onSelectTopic={handleTopicSelect} />

      {/* Selected Topic */}
      <div className="mt-6 text-center">
        {selectedTopic ? (
          <p className="text-amber-400 text-lg">
            Showing resources for: <span className="font-semibold">{selectedTopic}</span>
          </p>
        ) : (
          <p className="text-gray-400">Select a topic to explore related resources.</p>
        )}
      </div>

      {/* Resource List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white/10 p-5 rounded-xl shadow-md hover:shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-amber-400">{res.title}</h3>
            <p className="mt-2 text-sm text-gray-200">{res.description}</p>
            <p className="mt-3 text-xs text-gray-400 italic">{res.topic}</p>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredResources.length === 0 && (
        <p className="text-gray-500 text-center mt-10">No resources found for "{selectedTopic}".</p>
      )}
    </div>
  );
};

export default ResourcePage;
