import React, { useEffect, useState } from "react";
import { Bell, UserCircle, Zap } from "lucide-react";

// Greeting function
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  return "Good evening";
};

// 50+ mental health quotes
const quotes = [
  "You are enough just as you are. — Inner Circle",
  "Progress, not perfection. — Inner Circle",
  "Every small step counts. Keep moving forward! — Inner Circle",
  "Your mental wellness journey is unique and valuable. — Inner Circle",
  "Breathe deeply and trust the process. — Inner Circle",
  "Focus on progress, not perfection. You're doing great! — Inner Circle",
  "Today is a new opportunity to grow and heal. — Inner Circle",
  "Be gentle with yourself during this journey. — Inner Circle",
  "Small steps every day lead to big changes. — Inner Circle",
  "You have the strength to overcome any challenge. — Inner Circle",
  "Your peace of mind is worth protecting. — Inner Circle",
  "Growth happens one breath at a time. — Inner Circle",
  "It's okay to rest. — Inner Circle",
  "Embrace the process, not just the outcome. — Inner Circle",
  "Self-care is not selfish. — Inner Circle",
  "Your feelings are valid. — Inner Circle",
  "Healing takes time, be patient with yourself. — Inner Circle",
  "Focus on what you can control. — Inner Circle",
  "You deserve happiness and peace. — Inner Circle",
  "Every day is a fresh start. — Inner Circle",
  "Celebrate small victories. — Inner Circle",
  "You are resilient and capable. — Inner Circle",
  "Mental health matters. — Inner Circle",
  "Your emotions are important. — Inner Circle",
  "Take a deep breath and release tension. — Inner Circle",
  "You are not alone in this. — Inner Circle",
  "Believe in your strength. — Inner Circle",
  "Prioritize yourself and your well-being. — Inner Circle",
  "Kindness begins with you. — Inner Circle",
  "Focus on the good things today. — Inner Circle",
  "Your journey is your own, honor it. — Inner Circle",
  "Let go of what you cannot change. — Inner Circle",
  "Keep going, even when it’s tough. — Inner Circle",
  "Your mind deserves peace. — Inner Circle",
  "Self-compassion is powerful. — Inner Circle",
  "You are stronger than you think. — Inner Circle",
  "Take time to listen to your inner self. — Inner Circle",
  "Every emotion has value. — Inner Circle",
  "Happiness is a journey, not a destination. — Inner Circle",
  "Focus on what nurtures you. — Inner Circle",
  "Your mental health is your priority. — Inner Circle",
  "Allow yourself to feel and heal. — Inner Circle",
  "Trust in your ability to cope. — Inner Circle",
  "You are worthy of love and care. — Inner Circle",
  "Take life one day at a time. — Inner Circle",
  "Rest is part of progress. — Inner Circle",
  "Be patient with your growth. — Inner Circle",
  "Mindfulness is a gift to yourself. — Inner Circle",
  "You are doing your best, and that is enough. — Inner Circle",
  "Cherish the little moments of joy. — Inner Circle",
  "Every challenge is an opportunity to grow. — Inner Circle",
];

// Get a deterministic "random" index based on today's date
const getTodaysQuote = () => {
  const today = new Date();
  const dayNumber = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const index = dayNumber % quotes.length; // ensures same quote for same day
  return quotes[index];
};

const Header = ({firstName}) => {
  const [greeting, setGreeting] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setGreeting(getGreeting());
    setQuote(getTodaysQuote());
  }, []);

  return (
    <header className="flex flex-col w-full font-nunito text-teal">
  {/* Top Icons */}
  <div className="flex justify-between items-center mb-6 w-full">
    {/* Profile Icon */}
    <button className="flex items-center justify-center bg-white backdrop-blur-md rounded-full p-2 text-white hover:scale-110 transition-all duration-200 shadow-md hover:shadow-[0_0_10px_rgba(255,215,0,0.6)]">
      <UserCircle className="w-5 h-5 md:w-6 md:h-6 text-teal" />
    </button>

    {/* Notification Icon */}
    <button className="relative flex items-center justify-center bg-white backdrop-blur-md rounded-full p-2 text-white hover:scale-110 transition-all duration-200 shadow-md hover:shadow-[0_0_10px_rgba(255,215,0,0.6)]">
      <Bell className="w-5 h-5 md:w-6 md:h-6 text-teal" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-teal rounded-full border-2 border-teal-900"></span>
    </button>
  </div>

  {/* App Title (Mobile Only) */}
  <h1 className="md:hidden font-dancing-script text-4xl font-extrabold text-dark-gold text-center mb-6">
    Lucid Path
  </h1>

  {/* Welcome Card */}
  <div className="flex flex-col py-5 px-4 md:py-6 md:px-6 rounded-2xl bg-gray/30 p-5 rounded-4xl backdrop-blur-sm   w-full">
    {/* Greeting */}
    <div className="flex flex-col mb-4 w-full">
      <h1 className="font-extrabold text-xl md:text-3xl tracking-tight leading-snug text-gold break-words">
        {greeting},{" "}
        <span className="text-gold font-extrabold">
          {firstName}
        </span>
      </h1>
    </div>

    {/* Daily Affirmation */}
    <div className="flex flex-col p-4 w-full bg-gradient-to-br from-teal-800/30 to-teal-700/20 rounded-xl">
      <div className="flex items-center gap-2 mb-2 w-full">
        <div className="flex items-center gap-2 text-gold">
          <Zap className="w-4 h-4 md:w-5 md:h-5 fill-dark-teal" />
          <h2 className="font-semibold text-lg md:text-base italic text-gold">
            Affirmation of the Day
          </h2>
        </div>
      </div>
      <p className="text-gold text-sm md:text-base leading-relaxed font-light italic">
        {quote}
      </p>
    </div>
  </div>

  {/* Quick Stats Bar */}
  <div className="flex justify-between items-center mt-4 text-sm text-white w-full">
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_6px_rgba(255,215,0,0.8)]"></div>
      <span>Mindful minutes today: 15</span>
    </div>
    <div className="text-white font-medium">
      {new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })}
    </div>
  </div>
</header>

  );
};

export default Header;
