import React from 'react';
import { Home, BarChart, Book, Video, Zap } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: Home, label: 'Dashboard' },
        { icon: BarChart, label: 'Track Mood' },
        { icon: Book, label: 'Explore' },
        { icon: Video, label: 'Therapy' },
        { icon: Zap, label: 'Circle' }
    ];

    return (
        <div className="hidden md:flex flex-col w-[250px] bg-gradient-to-b from-teal-700 to-teal-900 py-6 px-5 items-start sticky top-0 h-screen">
            {/* Logo Section */}
            <div className="mb-12 pt-4 pb-6 border-b border-amber-400/50 w-full">
                <h1 className="text-2xl font-black tracking-wider text-white">
                    Inner Circle
                </h1>
                <p className="text-sm text-teal-100 mt-2 font-light">Always there. Always for you</p>
            </div>

            {/* Navigation Menu */}
            <nav className="flex flex-col gap-6 w-full">
                {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <button
                            key={index}
                            className="flex items-center gap-4 text-teal-100 hover:text-white 
                                     hover:bg-white/10 transition-all duration-200 rounded-xl 
                                     py-3 px-4 w-full group"
                        >
                            <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                            <span className="text-lg font-medium group-hover:translate-x-1 transition-transform duration-200">
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>

            {/* User Profile Section - Optional */}
            <div className="mt-auto pt-6 border-t border-teal-600 w-full">
                <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-teal-600/50">
                    <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                        <span className="text-teal-900 font-bold text-sm">U</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-medium text-sm">Welcome back!</span>
                        <span className="text-teal-200 text-xs">User</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;