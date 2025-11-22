import React, { useState } from 'react';
import VolunteerNavbar from './VolunteerNavbar';
import NGONavbar from './NGONavbar';
import VolunteerSidebar from './VolunteerSidebar';
import NGOSidebar from './NGOSidebar';

const DashboardLayout = ({ children, userType = 'volunteer', userName = 'User' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const NavbarComponent = userType === 'volunteer' ? VolunteerNavbar : NGONavbar;
  const SidebarComponent = userType === 'volunteer' ? VolunteerSidebar : NGOSidebar;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarComponent userName={userName} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex h-[calc(100vh-64px)]">
        <SidebarComponent isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
