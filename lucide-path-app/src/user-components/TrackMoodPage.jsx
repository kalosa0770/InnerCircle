import React, { useState, useContext } from 'react';
import { LineSquiggle, Calendar, BarChart3, BookOpenText, PenSquare, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import FooterNav from './FooterNav';
import { AppContent } from "../context/AppContent";

const TrackMoodPage = () => {
  const { userData } = useContext(AppContent);
  const navigate = useNavigate();

  // Sample placeholder data (can later be fetched from DB)
  const journalEntries = [
    { date: "Nov 5, 2025", mood: "🙂 Happy", excerpt: "Had a productive day and felt really good about it!" },
    { date: "Nov 3, 2025", mood: "😔 Lonely", excerpt: "Felt a bit down today, but tried to stay positive." },
  ];

  const handleLogMood = () => {
    navigate("/mood-selection"); // You can change to your mood logging route
  };

  const handleWriteJournal = () => {
    navigate("/write-journal"); // Navigate to journaling page
  };

  return (
    <div className="flex min-h-screen font-nunito bg-gradient-to-b from-[#0a1f1f] to-[#062b2b] text-white">
      <Sidebar firstName={userData?.firstName || "Guest"} />

      <main className="flex flex-col flex-1 gap-10 px-6 md:px-10 py-8 overflow-y-auto no-scrollbar w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="bg-gold p-2 rounded-full w-max">
            <LineSquiggle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold text-gold">Mood Insights</h2>
        </div>

        {/* Journaling Calendar */}
        <section className="bg-white/10 border border-[#1a3a3a] rounded-2xl p-6 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gold flex items-center gap-2">
              <Calendar size={20} /> Journaling Calendar
            </h3>
            <button className="text-sm text-teal hover:underline">See all months</button>
          </div>

          <p className="text-sm text-gray-300 mb-2">
            You have achieved <span className="text-gold font-bold">0%</span> of your journaling goal this month.
          </p>
          <p className="text-sm text-gray-400 mb-4">Total entries: {journalEntries.length}</p>

          {/* Calendar Placeholder */}
          <div className="grid grid-cols-7 gap-3 text-center text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
              <div className="flex flex-col">
                <div key={index} className="p-3 bg-white/5 rounded-lg border border-[#1f3d3d] text-gray-400"></div>
                {day}
            </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-500">My journaling goal</p>

          {/* Log Mood Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleLogMood}
              className="bg-gold hover:bg-yellow-400 transition-all text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 mx-auto"
            >
              Log My Mood <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* Mood Trends */}
        <section className="bg-white/10 border border-[#1a3a3a] rounded-2xl p-6 shadow-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gold flex items-center gap-2 mb-3">
            <BarChart3 size={20} /> Your Mood Trends
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Track how your mood changes weekly.
          </p>

          <div className="flex justify-around text-2xl">
            <span>😀</span>
            <span>😥</span>
            <span>😎</span>
            <span>🤩</span>
            <span>😬</span>
          </div>
          <p className="text-xs text-center text-gray-500 mt-3">Weekly trend preview</p>
        </section>

        {/* Journal Entries */}
        <section className="bg-white/10 border border-[#1a3a3a] rounded-2xl p-6 shadow-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-gold flex items-center gap-2 mb-5">
            <BookOpenText size={20} /> Your Journal Entries
          </h3>

          {journalEntries.length === 0 ? (
            <p className="text-gray-400 text-sm text-center">You have no journal entries yet.</p>
          ) : (
            <div className="space-y-4">
              {journalEntries.map((entry, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-[#1f3d3d] hover:bg-gold/10 transition"
                >
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm text-gray-400">{entry.date}</p>
                    <p className="text-sm">{entry.mood}</p>
                  </div>
                  <p className="text-sm text-gray-200">{entry.excerpt}</p>
                </div>
              ))}
            </div>
          )}

          {/* Write Journal Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleWriteJournal}
              className="bg-gold hover:bg-yellow-400 transition-all text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 mx-auto"
            >
              <PenSquare size={18} />
              Write Journal Entry
            </button>
          </div>
        </section>

        <div className="mb-16"></div>
      </main>

      <FooterNav />
    </div>
  );
};

export default TrackMoodPage;
