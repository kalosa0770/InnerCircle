import React, { useContext, useEffect, useState } from "react";
import { AppContent } from "../context/AppContent";
import axios from "axios";

const WeeklyMoodTracker = () => {
  const { userData, backendUrl } = useContext(AppContent);
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Helper to get start of current week (Sunday)
  const getStartOfWeek = (date) => {
    const day = date.getDay(); // 0 = Sunday
    const diff = date.getDate() - day;
    return new Date(date.getFullYear(), date.getMonth(), diff);
  };

  const today = new Date();
  const startOfWeek = getStartOfWeek(new Date());
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 6); // Saturday

  // Fetch moods when userData is available
  useEffect(() => {
    const fetchMoods = async () => {
      if (!userData) return;
      try {
        setLoading(true);
        const res = await axios.get(`${backendUrl}/api/moods/${userData._id}`, {
          withCredentials: true,
        });
        setMoods(res.data.moods || []);
      } catch (err) {
        console.error("Failed to fetch moods:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMoods();
  }, [userData, backendUrl]);

  if (loading) return <p className="text-white">Loading moods...</p>;
  if (!userData) return <p className="text-white">Please log in to view moods.</p>;

  // Group moods by day (0=Sun ... 6=Sat) for current week
  const moodsByDay = weekdays.map((_, index) => {
    const dayMoods = moods
      .filter((m) => {
        const moodDate = new Date(m.date);
        return (
          moodDate >= startOfWeek &&
          moodDate <= endOfWeek &&
          moodDate.getDay() === index
        );
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Most recent first
    return dayMoods;
  });

  // Most recent mood overall
  const recentMood =
    moods.length > 0
      ? moods.reduce((a, b) => (new Date(a.date) > new Date(b.date) ? a : b))
      : null;

  return (
    <div className="w-full bg-white/10 rounded-2xl backdrop-blur-md shadow-lg font-nunito text-white p-6">
      <h2 className="text-lg font-semibold mb-6 text-center text-amber-400">
        Weekly Mood Overview
      </h2>

      {/* Calendar with stacked emojis */}
      <div className="grid grid-cols-7 gap-2 px-2 relative w-full">
        {weekdays.map((day, index) => {
          const dayMoods = moodsByDay[index] || [];
          const displayMoods = dayMoods.slice(0, 3); // Show only 3 moods per day
          const extraCount = dayMoods.length - displayMoods.length;

          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              <div className="flex flex-col gap-1 p-2 rounded-lg bg-white/5 border border-[#1f3d3d] w-full min-h-[80px] items-center justify-center">
                {displayMoods.length > 0 ? (
                  displayMoods.map((m, idx) => (
                    <span key={idx} className="text-2xl text-center">
                      {m.emoji}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400 text-xl text-center">⚪</span>
                )}
                {extraCount > 0 && (
                  <span className="text-xs text-gray-400 text-center">
                    +{extraCount} more
                  </span>
                )}
              </div>
              <span className="text-xs mt-1 text-gray-300">{day}</span>
            </div>
          );
        })}
      </div>

      {/* Most recent mood */}
      {recentMood && (
        <div className="text-center mt-6">
          <h3 className="text-lg text-amber-400 font-semibold mb-2">
            Most Recent Mood
          </h3>
          <div className="inline-flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center text-3xl rounded-full shadow-md bg-white/20">
              {recentMood.emoji}
            </div>
            <span className="mt-2 text-white font-bold">{recentMood.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeeklyMoodTracker;
