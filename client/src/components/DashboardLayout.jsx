import React from 'react';
import VolunteerNavbar from './VolunteerNavbar';
import NGONavbar from './NGONavbar';
import VolunteerSidebar from './VolunteerSidebar';
import NGOSidebar from './NGOSidebar';

const DashboardLayout = ({ children, userType = 'volunteer', userName = 'User' }) => {
  const NavbarComponent = userType === 'volunteer' ? VolunteerNavbar : NGONavbar;
  const SidebarComponent = userType === 'volunteer' ? VolunteerSidebar : NGOSidebar;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarComponent userName={userName} />
      <div className="flex">
        <SidebarComponent />
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
