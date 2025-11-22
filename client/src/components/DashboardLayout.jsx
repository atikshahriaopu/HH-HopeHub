import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, userType = 'volunteer', userName = 'User' }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userType={userType} userName={userName} />
      <div className="flex">
        <Sidebar userType={userType} />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
