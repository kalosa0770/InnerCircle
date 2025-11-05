import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import PopularContent from './PopularContent';
import MoodEntry from './MoodEntry';
import TodaysSelection from './TodaysSelection';
import MoodRecommendations from './MoodRecommendations';
import MoodChart from './MoodChart';
import ProgressBar from './ProgressBar';
import SearchByTopicCards from './SearchByTopicCards';
import FooterNav from './FooterNav';

const UserDashboard = () => {
  // Lifted state for the selected mood
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600 font-nunito">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full max-w-full overflow-hidden">
        {/* Header */}
        <div className="py-5 px-5 w-full">
          <Header />
        </div>

        {/* Main dashboard content */}
        <main className="flex flex-col flex-1 gap-8 px-6 md:px-10 py-8 overflow-y-auto no-scrollbar w-full max-w-7xl mx-auto">
          {/* Mood Entry */}
          <MoodEntry onMoodSelect={setSelectedMood} />

          {/* Popular Content */}
          <div className="w-full overflow-hidden">
            <PopularContent />
          </div>

          {/* Today's Selection */}
          <TodaysSelection mood={selectedMood?.name}/>

          {/* Mood-based Recommendations */}
          {/* {selectedMood && (
            <MoodRecommendations mood={selectedMood.name} />
          )} */}
          <MoodChart />
          <SearchByTopicCards />
          

          <div className="mb-10"></div>
        </main>

        {/* Footer */}
        <FooterNav />
      </div>
    </div>
  );
};

export default UserDashboard;
