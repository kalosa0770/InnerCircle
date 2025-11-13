import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { BellIcon, Calendar } from "lucide-react";

// Notifications Section MockUp
const Notifications = () => {
    return (
        <div className="flex flex-col py-5 md:py-6 px-5 md:px-6 bg-white/10 border border-[#1a3a3a]">
            <div className="flex gap-2 text-gold font-extrabold">
                <BellIcon />
                <h1>Your Notifications</h1>
            </div>
        </div>
    )
}

const Appointments = () => {
    return (
        <div className="flex flex-col py-5 md:py-6 px-5 md:px-6 bg-white/10 border border-[#1a3a3a]">
            <div className="flex gap-2 text-gold font-extrabold">
                <Calendar />
                <h1>Your Notifications</h1>
            </div>
        </div>
    )
}


const AdminDashboard = () => {
    return (
        <div className="flex min-h-screen font-nunito bg-gradient-to-b from-[#0a1f1f] to-[#062b2b]">
            <AdminSidebar />
            <div className="flex flex-col flex-1 w-full overflow-hidden">
                <main className="flex flex-col flex-1 gap-8 px-6 md:px-10 py-8 overflow-y-auto no-scrollbar w-full max-w-7xl mx-auto">
                <div className="flex text-white font-extrabold text-center items-center justify-center mx-auto">
                    {new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                    })}
                </div>
                <Notifications />
                <Appointments />
                <div className="mb-10"></div>
                </main>
                <AdminFooter />
            </div>
        </div>
    )
}

export default AdminDashboard;