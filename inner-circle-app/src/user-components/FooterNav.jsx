import React from 'react';
import { Home, Zap, BarChart, Video, Book } from 'lucide-react';

const FooterNav = () => {
  const navItems = [
    { name: 'Home', icon: Home},
    { name: 'Track Mood', icon: BarChart},
    { name: 'Explore', icon: Book},
    { name: 'Therapy', icon: Video},
    { name: 'Circle', icon: Zap },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white text-teal-900 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] pt-2 pb-safe md:hidden">
      <div className="flex justify-around items-center h-16 max-w-xl mx-auto">
        {navItems.map((item) => {

          return (
            <button
              key={item.name}
              className="flex flex-col items-center p-2 rounded-lg transition duration-300 hover:bg-gray-100 active:bg-gray-200"
            >
              <item.icon size={24}  />
              <span className={`text-xs mt-1 `}>{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNav;
