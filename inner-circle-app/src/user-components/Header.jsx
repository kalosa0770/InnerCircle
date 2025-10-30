import React, {useEffect, useState} from "react";
import { Bell, UserCircle, Zap} from 'lucide-react'

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 18) return "Good afternoon";
    return "Good evening";
};

const Header = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        setGreeting(getGreeting());
    }, []);

    return (
        <header className="flex flex-col text-white font-nunito">
            <div className="flex justify-between">
                <div className="flex bg-white rounded-full text-teal-900 p-1 font-extra-bold">
                    <UserCircle className="w-5 h-5 md:w-7 md:h-7 " />
                </div>
                <div className="flex bg-white rounded-full text-teal-900 p-1 font-extra-bold">
                    <Bell className="w-5 h-5 md:w-7 md:h-7" />
                </div>
            </div>
            <h1 className="text-center italic text-lato text-2xl font-bold">Inner Circle</h1>
            <div className="flex flex-col py-4 px-3 mt-10 rounded-2xl bg-white">
                <h1 className="font-nunito font-extrabold text-lg md:text-2xl tracking-tight leading-snug text-teal-900">
                    {greeting},{" "}
                    <span className="text-yellow-400 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]">
                        User
                    </span>
                </h1>
                <div className="flex flex-col text-teal-900 py-3 px-4 font-nunito">
                    <div className="flex gap-2 italic">
                        <Zap className="w-5 h-5 md:w-7 md:h-7"/>
                        <h1 className="underline">Tip of the day</h1>
                    </div>
                    <p className="py-2 px-3">Your greatest weapon is your mindset. Take care of it</p>
                </div>
            </div>
        </header>
    );
}

export default Header;