import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import PopularContent from './PopularContent';
import FooterNav from './FooterNav';

const UserDashboard = () => {
    return (
        <div className='flex min-h-screen bg-gradient-to-br from-teal-300 via-teal-600 to-teal-900 font-nunito'>
            <Sidebar />
            <div className="flex flex-col flex-1 w-full max-w-full overflow-hidden">
                <div className="py-5 px-5 w-full">
                    <Header />
                </div>
                <main className="flex flex-col flex-1 gap-8 px-6 md:px-10 py-8 overflow-y-auto no-scrollbar w-full">
                    {/* PopularContent with proper width constraints */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 w-full max-w-full overflow-hidden">
                        <PopularContent />
                    </div>
                </main>
                <FooterNav />
            </div>
        </div>
    )
}

export default UserDashboard;