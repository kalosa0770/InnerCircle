import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import PopularContent from './PopularContent';
import MoodEntry from './MoodEntry';
import TodaysSelection from './TodaysSelection';
import MoodChart from './MoodChart';
import SearchByTopicCards from './SearchByTopicCards';
import { Outlet } from 'react-router-dom';
import FooterNav from './FooterNav';
import { AppContent } from "../context/AppContent";
import { toast } from 'react-toastify';

const UserDashboard = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const { userData } = useContext(AppContent);
  // const location = useLocation();

  // useEffect(() => {
  //   // Check if the user came from login
  //   if (location.state?.fromLogin && userData?.firstName) {
  //     toast.success(`Welcome back, ${userData.firstName}! You have successfully logged in.`);
  //     // Clear the state so toast doesn't show on refresh
  //     window.history.replaceState({}, document.title);
  //   }
  // }, [location.state, userData?.firstName]);

  return (
    <div className="flex min-h-screen font-nunito bg-gradient-to-b from-[#0a1f1f] to-[#062b2b]">
      <Sidebar firstName={userData?.firstName || "Guest"} />
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <div className="py-5 px-6 w-full">
          <Header firstName={userData?.firstName || "Guest"} />
        </div>
        <main className="flex flex-col flex-1 gap-8 px-6 md:px-10 py-8 overflow-y-auto no-scrollbar w-full max-w-7xl mx-auto">
          <MoodEntry onMoodSelect={setSelectedMood} />
          <PopularContent />
          <TodaysSelection mood={selectedMood?.name} />
          <MoodChart />
          <SearchByTopicCards />
          <Outlet />
          <div className="mb-10"></div>
        </main>
        <FooterNav />
      </div>
    </div>
  );
};

export default UserDashboard;
