import React, { useState, useContext } from 'react';
import SearchByTopicCards from "./SearchByTopicCards";
import Sidebar from "./Sidebar";
import FooterNav from "./FooterNav";
import { AppContent } from "../context/AppContent";
import { BookOpenCheck } from 'lucide-react';
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
  const { userData} = useContext(AppContent);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredResources = selectedTopic
    ? resources.filter((res) => res.topic === selectedTopic)
    : resources;

  return (
    <div className="flex min-h-screen font-nunito bg-gradient-to-b from-[#0a1f1f] to-[#062b2b] text-white">
      <Sidebar firstName={userData?.firstName || "Guest"} />
      <main className="flex flex-col flex-1 gap-8 px-6 md:px-10 py-10 overflow-y-auto no-scrollbar w-full max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="flex  font-dancing-script items-center gap-3">
          <div className="bg-gold p-2 rounded-full w-max">
            <BookOpenCheck className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold text-gold">Explore</h2>
        </div>

        {/* Topic Selector Section */}
        <section className="bg-white/10 border border-[#1a3a3a] rounded-2xl p-6 backdrop-blur-sm shadow-md">
          <h2 className="text-xl font-semibold text-gold mb-4 text-center">
            Search by Topic
          </h2>
          <SearchByTopicCards onSelectTopic={handleTopicSelect} />
        </section>

        {/* Selected Topic Info */}
        <div className="mt-6 text-center">
          {selectedTopic ? (
            <p className="text-amber-400 text-lg">
              Showing resources for: <span className="font-semibold">{selectedTopic}</span>
            </p>
          ) : (
            <p className="text-gray-400">
              Select a topic above to explore related resources.
            </p>
          )}
        </div>

        {/* Resource List */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white/10 p-6 rounded-2xl border border-[#1a3a3a] shadow-md hover:bg-white/20 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gold mb-2">{res.title}</h3>
              <p className="text-sm text-gray-200 mb-3">{res.description}</p>
              <p className="text-xs text-gray-400 italic mb-4">{res.topic}</p>
              <button
                className="bg-gold hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all"
              >
                View More
              </button>
            </div>
          ))}
        </section>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <p className="text-gray-500 text-center mt-10">
            No resources found for "{selectedTopic}".
          </p>
        )}

        <div className="mb-10"></div>
        </main>
        <FooterNav/>
    </div>
  );
};

export default ResourcePage;
