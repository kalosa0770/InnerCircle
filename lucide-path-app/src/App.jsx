import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Register from "./components/Register.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import UserDashboard from "./user-components/UserDashboard.jsx";
import MoodQuestions from "./user-components/MoodQuestions.jsx";
import MoodEntry from "./user-components/MoodEntry.jsx";
import ResourcePage from "./user-components/ResourcePage.jsx";
import TrackMoodPage from "./user-components/TrackMoodPage.jsx";
import SplashScreen from "./components/SplashScreen.jsx";
import EmailVerify from "./components/EmailVerify.jsx";

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Show splash only on first visit to landing page
    if (location.pathname === "/") {
      const hasSeenSplash = localStorage.getItem("hasSeenSplash");

      if (!hasSeenSplash) {
        setShowSplash(true);
        const timer = setTimeout(() => {
          setShowSplash(false);
          localStorage.setItem("hasSeenSplash", "true");
        }, 2600); // splash duration

        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname]);

  // If splash should show, render it directly
  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
