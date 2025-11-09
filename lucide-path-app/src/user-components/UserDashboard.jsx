import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import PopularContent from './PopularContent';
import MoodEntry from './MoodEntry';
import TodaysSelection from './TodaysSelection';
import MoodChart from './MoodChart';
import SearchByTopicCards from './SearchByTopicCards';
import { Outlet } from 'react-router-dom';
import FooterNav from './FooterNav';

const UserDashboard = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="flex min-h-screen font-nunito white bg-text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Header */}
        <div className="py-5 px-6 w-full bg-teal backdrop-blur-md border-b border-[#FFD700]/30 shadow-lg">
          <Header />
        </div>

        {/* Main Dashboard Content */}
        <main className="flex flex-col flex-1 gap-8 px-6 md:px-10 py-8 overflow-y-auto no-scrollbar w-full max-w-7xl mx-auto">
          {/* Mood Entry Section */}
          <div className="bg-[#004c4c]/30 p-6 rounded-2xl border border-[#FFD700]/25 shadow-[0_0_15px_rgba(255,215,0,0.08)]">
            <MoodEntry onMoodSelect={setSelectedMood} />
          </div>

          {/* Popular Content */}
          <div className="bg-[#004c4c]/30 p-6 rounded-2xl border border-[#FFD700]/25 shadow-[0_0_15px_rgba(255,215,0,0.08)] overflow-hidden">
            <PopularContent />
          </div>

          {/* Today's Selection */}
          <div className="bg-[#004c4c]/30 p-6 rounded-2xl border border-[#FFD700]/25 shadow-[0_0_15px_rgba(255,215,0,0.08)]">
            <TodaysSelection mood={selectedMood?.name} />
          </div>

          {/* Mood Chart */}
          <div className="bg-[#004c4c]/30 p-6 rounded-2xl border border-[#FFD700]/25 shadow-[0_0_15px_rgba(255,215,0,0.08)]">
            <MoodChart />
          </div>

          {/* Search by Topic Cards */}
          <div className="bg-[#004c4c]/30 p-6 rounded-2xl border border-[#FFD700]/25 shadow-[0_0_15px_rgba(255,215,0,0.08)]">
            <SearchByTopicCards />
          </div>

          <Outlet />
          <div className="mb-10"></div>
        </main>

        {/* Footer Navigation */}
        <FooterNav />
      </div>
    </div>
  );
};

export default UserDashboard;
