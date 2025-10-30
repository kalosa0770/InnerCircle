import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import FooterNav from './FooterNav';
const UserDashboard = () => {
    return (
        <div className='flex min-h-screen bg-teal-900 font-nunito'>
            <Sidebar />
            <div className="flex flex-col flex-1">
                <div className="py-5 px-5">
                    <Header />
                </div>
                <main className="flex flex-col flex-1 gap-8 px-6 md:px-10 py-8 overflow-y-auto no-scrollbar"></main>
                <FooterNav />
            </div>
            
           
        </div>
    )
}

export default UserDashboard;