import React, { useContext, useEffect } from "react";
import { AppContent } from "../context/AppContent";
import { UserCircle2, Lock, LogOut, Settings, Book, CheckCircle, FileText } from "lucide-react";
import { toast } from "react-toastify";


const Profile = () => {
  const { userData, getUserData, logout } = useContext(AppContent);

  useEffect(() => {
    if (!userData) {
      getUserData();
    }
  }, []);

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0a0a0a] text-white font-nunito">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-nunito bg-gradient-to-b from-[#0a1f1f] to-[#062b2b] flex flex-col items-center justify-center p-6 text-white">
      <div className="w-full max-w-lg">

        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <UserCircle2 size={90} className="text-gold mb-3" />
          <h2 className="text-3xl font-bold text-gold mb-1">
            {userData.firstName} {userData.lastName}
          </h2>
          <p className="text-gray-400 text-sm">{userData.email}</p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-white/10 p-4 rounded-xl">
            <Book className="mx-auto mb-2 text-gold" size={26} />
            <p className="text-xl font-bold">0</p>
            <p className="text-xs text-gray-400">Courses</p>
          </div>
          <div className="bg-white/10 p-4 rounded-xl">
            <FileText className="mx-auto mb-2 text-gold" size={26} />
            <p className="text-xl font-bold">0</p>
            <p className="text-xs text-gray-400">Entries</p>
          </div>
          <div className="bg-white/10 p-4 rounded-xl">
            <CheckCircle className="mx-auto mb-2 text-gold" size={26} />
            <p className="text-xl font-bold">0</p>
            <p className="text-xs text-gray-400">Exercises</p>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gold mb-2">Personal Info</h3>
          <div className="bg-white/10 p-4 rounded-xl text-sm space-y-2">
            <p><span className="text-gray-400">Full Name:</span> {userData.firstName} {userData.lastName}</p>
            <p><span className="text-gray-400">Email:</span> {userData.email}</p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gold mb-2">Mood entries</h3>
          <div className="bg-white/10 p-4 rounded-xl text-center text-gray-400">
            🏅 No entries yet. Log your mood to see your progress!
          </div>
        </div>

        {/* Settings and Actions */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-3 text-teal bg-white/10 hover:bg-white/20 transition p-3 rounded-xl">
            <Lock size={20} />
            Change Password
          </button>

          <button className="w-full flex items-center justify-center gap-3 text-teal bg-white/10 hover:bg-white/20 transition p-3 rounded-xl">
            <Settings size={20} />
            Account Settings
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={() => {
            logout();
            toast.info("Redirecting to login...");
            setTimeout(() => {
              window.location.href = "/login";
            }, 1500);
          }}
          className="mt-6 w-full bg-gold text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
