import React from 'react';
import { Home, BarChart, Book, Video, Zap } from 'lucide-react';

const Sidebar = () => {
    return (
        
        <div className="hidden md:flex flex-col w-[250px] flex-col bg-white py-3 px-4 items-start justify-center sticky top-0 h-screen">
            <div className="mb-10 pt-4 pb-6 border-b border-amber-400">
                <h1 className="text-2xl font-black tracking-wider text-white">
                Inner Circle
                </h1>
                <p className="text-xs text-white mt-1">Always there. Always for you</p>
            </div>
            <div className="flex gap-4 text-teal-900 text-xl">
                <Home /> 
                <button className='hover:text-teal-600'>Dashboard</button>
            </div>
            <div className="flex gap-4 text-teal-900 text-xl">
                <BarChart /> 
                <button className='hover:text-teal-600'>Track Mood</button>
            </div>
            <div className="flex gap-4 text-teal-900 text-xl">
                <Book /> 
                <button className='hover:text-teal-600'>Explore</button>
            </div>
            <div className="flex gap-4 text-teal-900 text-xl">
                <Video /> 
                <button className='hover:text-teal-600'>Therapy</button>
            </div>
            <div className="flex gap-4 text-teal-900 text-xl">
                <Zap /> 
                <button className='hover:text-teal-600'>Circle</button>
            </div>
        </div>
    )
}

export default Sidebar;