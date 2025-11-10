import React, { useContext, useEffect } from "react";
import { AppContent } from "../context/AppContent";
import { LogOut, UserCircle2, Lock } from "lucide-react";
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
    <div className="min-h-screen font-nunito bg-gradient-to-b from-[#0a1f1f] to-[#062b2b] flex flex-col p-6">
      <div className="bg-gray/30 p-5 rounded-4xl backdrop-blur-sm rounded-2xl p-8 max-w-md w-full text-white border border-[#333]">
        <div className="flex flex-col items-center mb-6">
          <UserCircle2 size={80} className="text-gold mb-3" />
          <h2 className="text-3xl font-bold text-gold mb-1">{userData.firstName} {userData.lastName}</h2>
          <p className="text-gray-400 text-sm">{userData.email}</p>
        </div>

        <div className="border-t border-gray-700 pt-4 items-center justify-center mx-auto">
          <button className="text-teal flex gap-4 bg-gray p-4 rounded-full mx-auto"><Lock />change password </button>
        </div>
      </div>
      <button
          onClick={() => {
            logout();
            toast.info("Redirecting to login...");
            setTimeout(() => {
              window.location.href = "/login";
            }, 1500);
          }}
          className="mt-8 w-full bg-gold text-white font-semibold py-2 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all"
        >
          <LogOut size={20} />
          Logout
        </button>
    </div>
  );
};

export default Profile;
