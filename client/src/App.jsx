import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Home Page
import HomePage from './pages/HomePage';

// Auth Pages
import Login from './pages/Login';
import Registration from './pages/Registration';

// Volunteer Pages
import VolunteerDashboard from './pages/volunteer/VolunteerDashboard';
import VolunteerProfile from './pages/volunteer/VolunteerProfile';
import Opportunities from './pages/volunteer/Opportunities';
import MyMissions from './pages/volunteer/MyMissions';
import VolunteerMessage from './pages/volunteer/VolunteerMessage';
import VolunteerNotification from './pages/volunteer/VolunteerNotification';

// NGO Pages
import NGODashboard from './pages/ngo/NGODashboard';
import NGOVolunteers from './pages/ngo/NGOVolunteers';
import NGOMissions from './pages/ngo/NGOMissions';
import NGOResources from './pages/ngo/NGOResources';
import NGOMessage from './pages/ngo/NGOMessage';
import NGOProfile from './pages/ngo/NGOProfile';
import NGONotification from './pages/ngo/NGONotification';

// Shared Pages
import EmergencyAlert from './pages/EmergencyAlert';
import MapView from './pages/MapView';

// Showcase
import ComponentShowcase from './pages/ComponentShowcase';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Component Showcase */}
        <Route path="/showcase" element={<ComponentShowcase />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Volunteer Routes */}
        <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
        <Route path="/volunteer/profile" element={<VolunteerProfile />} />
        <Route path="/volunteer/opportunities" element={<Opportunities />} />
        <Route path="/volunteer/missions" element={<MyMissions />} />
        <Route path="/volunteer/messages" element={<VolunteerMessage />} />
        <Route path="/volunteer/notifications" element={<VolunteerNotification />} />
        <Route path="/volunteer/map" element={<MapView />} />

        {/* NGO Routes */}
        <Route path="/ngo/dashboard" element={<NGODashboard />} />
        <Route path="/ngo/volunteers" element={<NGOVolunteers />} />
        <Route path="/ngo/missions" element={<NGOMissions />} />
        <Route path="/ngo/resources" element={<NGOResources />} />
        <Route path="/ngo/messages" element={<NGOMessage />} />
        <Route path="/ngo/profile" element={<NGOProfile />} />
        <Route path="/ngo/notifications" element={<NGONotification />} />

        {/* Shared Routes */}
        <Route path="/alert" element={<EmergencyAlert />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/profile" element={<VolunteerProfile />} />
        <Route path="/settings" element={<VolunteerDashboard />} />

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
