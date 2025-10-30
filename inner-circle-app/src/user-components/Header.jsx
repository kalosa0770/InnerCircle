import React, {useEffect, useState} from "react";
import { Bell, UserCircle, Zap} from 'lucide-react'

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    return "Good evening";
};

const Header = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        setGreeting(getGreeting());
    }, []);

    return (
        <header className="flex flex-col text-white font-nunito w-full max-w-full">
            {/* Top Bar with Icons */}
            <div className="flex justify-between items-center mb-6 w-full">
                    {/* User Profile */}
                    <button className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full p-2 
                                    text-white hover:bg-white/30 transition-all duration-200 
                                    hover:scale-110 shadow-lg hover:shadow-white/25">
                        <UserCircle className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    {/* Notification Bell */}
                    <button className="relative flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full p-2 
                                    text-white hover:bg-white/30 transition-all duration-200 
                                    hover:scale-110 shadow-lg hover:shadow-white/25">
                        <Bell className="w-5 h-5 md:w-6 md:h-6" />
                        {/* Notification Indicator */}
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-teal-900"></span>
                    </button>
                
            </div>

            {/* App Title - Mobile Only */}
            <h1 className="md:hidden font-dancing-script text-4xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
                Inner Circle
            </h1>

            {/* Welcome Card */}
            <div className="flex flex-col py-5 px-4 md:py-6 md:px-6 rounded-2xl bg-white/10 backdrop-blur-md 
                         border border-white/20 shadow-2xl w-full">
                {/* Greeting */}
                <div className="flex flex-col mb-4 w-full">
                    <h1 className="font-nunito font-extrabold text-xl md:text-3xl tracking-tight leading-snug text-white break-words">
                        {greeting},{" "}
                        <span className="text-yellow-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] 
                                     bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                            User
                        </span>
                    </h1>
                    <p className="text-teal-100 text-lg md:text-base mt-1">
                        Ready to focus on your mental wellness today?
                    </p>
                </div>

                {/* Tip of the Day */}
                <div className="flex flex-col p-4 w-full">
                    <div className="flex items-center gap-2 mb-2 w-full">
                        <div className="flex items-center gap-2 text-amber-300">
                            <Zap className="w-4 h-4 md:w-5 md:h-5 fill-amber-300" />
                            <h2 className="font-semibold text-lg md:text-base italic text-white">
                                Tip of the day
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-start w-full">
                        
                        <p className="text-white/90 text-sm md:text-base leading-relaxed font-light flex-1">
                            Your greatest weapon is your mindset. Take care of it with daily mindfulness practices.
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Stats Bar - Optional Addition */}
            <div className="flex justify-between items-center mt-4 text-sm text-white/70 w-full">
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Mindful minutes today: 15</span>
                </div>
                <div className="text-white/60">
                    {new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                    })}
                </div>
            </div>
        </header>
    );
}

export default Header;