import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isPWA } from "./utils/isPWA";
import { usePWAInstallPrompt } from "./utils/usePWAInstallPrompt"; // ✅ new hook

// components
import HomePage from "./components/HomePage.jsx";
import Register from "./components/Register.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import UserDashboard from "./user-components/UserDashboard.jsx";
import MoodQuestions from "./user-components/MoodQuestions.jsx";
import MoodEntry from "./user-components/MoodEntry.jsx";
import ResourcePage from "./user-components/ResourcePage.jsx";
import TrackMoodPage from "./user-components/TrackMoodPage.jsx";
import Profile from "./user-components/Profile.jsx";
import SplashScreen from "./components/SplashScreen.jsx";
import EmailVerify from "./components/EmailVerify.jsx";

function App() {
  const runningAsPWA = isPWA();
  const { isInstallable, promptInstall } = usePWAInstallPrompt();
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);

  // Splash logic
  useEffect(() => {
    if (location.pathname === "/") {
      const hasSeenSplash = localStorage.getItem("hasSeenSplash");
      if (!hasSeenSplash) {
        setShowSplash(true);
        const timer = setTimeout(() => {
          setShowSplash(false);
          localStorage.setItem("hasSeenSplash", "true");
        }, 2600);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname]);

  // ✅ Show toast only on web if installable
  useEffect(() => {
    if (!runningAsPWA && isInstallable) {
      toast.info(
        <div className="flex flex-col items-start gap-2">
          <span className="font-bold text-gold">Install Lucid Path</span>
          <span className="text-sm text-gray-200">
            Add Lucid Path to your home screen for a better experience.
          </span>
          <button
            onClick={async () => {
              const accepted = await promptInstall();
              if (accepted) toast.success("Lucid Path installed successfully 🎉");
            }}
            className="mt-1 bg-gold text-teal-900 px-3 py-1 rounded-full text-sm font-semibold hover:bg-dark-gold transition-all"
          >
            Install Now
          </button>
        </div>,
        { autoClose: false, position: "bottom-center" }
      );
    }
  }, [isInstallable, runningAsPWA, promptInstall]);

  // Splash
  if (showSplash) return <SplashScreen />;

  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        {runningAsPWA ? (
          <>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/verify-email" element={<EmailVerify />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/mood-entry" element={<MoodEntry />} />
            <Route path="/mood-questions/:mood" element={<MoodQuestions />} />
            <Route path="/explore" element={<ResourcePage />} />
            <Route path="/track" element={<TrackMoodPage />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/verify-email" element={<EmailVerify />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/mood-entry" element={<MoodEntry />} />
            <Route path="/mood-questions/:mood" element={<MoodQuestions />} />
            <Route path="/explore" element={<ResourcePage />} />
            <Route path="/track" element={<TrackMoodPage />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
