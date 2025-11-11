import React from "react";
import { Smile, BookOpenText, FileText, ArrowRight, User, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import FeatureTimeline from "./FeatureTimeline";

const MobileLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-nunito bg-gradient-to-b from-[#0a1f1f] to-[#062b2b] text-white flex flex-col items-center">
      
      {/* Logo */}
      <div className="mt-10 mb-6 flex flex-col items-center">
        <div className="w-full mx-auto items-center justify-center">
          <img src={logo} size={20} className="w-50 h-50 p-4 rounded-4xl mb-2 mx-auto items-center justify-center" />
        </div>
        <h1 className="text-3xl font-extrabold text-gold">Lucid Path</h1>
        <p className="text-gray-300 text-center text-sm mt-1">Your personal companion for mental wellness</p>
      </div>

      <FeatureTimeline />

      {/* Call to Action */}
      <section className="mt-8 px-6 w-full max-w-md flex flex-col gap-4">
        <button
          onClick={() => navigate("/register")}
          className="bg-gold hover:bg-yellow-400 transition-all text-white font-extrabold py-3 px-6 rounded-full flex items-center justify-center gap-2"
        >
          <User size={18} /> I don't have an account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-white/10 hover:bg-white/20 transition-all text-white font-extrabold py-3 px-6 rounded-full flex items-center justify-center gap-2"
        >
          <LogIn size={18} /> I already have an account
        </button>
      </section>

      {/* Privacy Policy Reminder */}
      <section className="mt-6 px-6 text-center text-gray-400 text-xs max-w-xs">
        By continuing, you agree to our <span className="text-gold underline cursor-pointer">Privacy Policy</span>.
      </section>

      <div className="mb-12"></div>
    </div>
  );
};

export default MobileLandingPage;
