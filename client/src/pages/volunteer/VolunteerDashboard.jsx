import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const VolunteerDashboard = () => {
  // Mock data
  const stats = [
    { label: 'Hours Contributed', value: '42', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'blue' },
    { label: 'Missions Completed', value: '8', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'green' },
    { label: 'Impact Score', value: '94', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', color: 'yellow' },
    { label: 'Active Missions', value: '2', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: 'purple' },
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Flood Relief Support',
      ngo: 'Red Cross Houston',
      location: 'Houston, TX',
      type: 'Emergency Response',
      urgency: 'high',
      volunteers: '23/50',
      date: 'Nov 24, 2025',
      description: 'Help distribute supplies and provide assistance to flood-affected families.',
      skills: ['Physical Labor', 'First Aid', 'Communication']
    },
    {
      id: 2,
      title: 'Food Distribution Drive',
      ngo: 'Food Bank Network',
      location: 'Miami, FL',
      type: 'Community Service',
      urgency: 'medium',
      volunteers: '15/30',
      date: 'Nov 26, 2025',
      description: 'Assist in organizing and distributing food packages to local communities.',
      skills: ['Logistics', 'Organization', 'Transportation']
    },
    {
      id: 3,
      title: 'Medical Camp Setup',
      ngo: 'Health Relief Org',
      location: 'Boston, MA',
      type: 'Healthcare',
      urgency: 'high',
      volunteers: '18/25',
      date: 'Nov 25, 2025',
      description: 'Set up temporary medical facilities and assist healthcare professionals.',
      skills: ['Medical', 'Setup', 'Patient Care']
    },
    {
      id: 4,
      title: 'Shelter Construction',
      ngo: 'Habitat for Hope',
      location: 'Seattle, WA',
      type: 'Construction',
      urgency: 'low',
      volunteers: '12/40',
      date: 'Nov 28, 2025',
      description: 'Help build temporary shelters for displaced families.',
      skills: ['Construction', 'Engineering', 'Physical Labor']
    },
  ];

  const activeMissions = [
    {
      id: 1,
      title: 'Community Kitchen Support',
      ngo: 'Feed the City',
      shift: 'Morning Shift',
      time: '8:00 AM - 12:00 PM',
      date: 'Today',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Warehouse Organization',
      ngo: 'Relief Supply Co',
      shift: 'Evening Shift',
      time: '4:00 PM - 8:00 PM',
      date: 'Tomorrow',
      status: 'Scheduled'
    },
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-blue-500 bg-blue-50';
      default: return 'border-gray-300 bg-white';
    }
  };

  const getUrgencyBadge = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout userType="volunteer" userName="Sarah Johnson">
      {/* Page Header with Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Sarah! 👋</h1>
        <p className="text-gray-600">Ready to make a difference today? Here are your opportunities.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} hover>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                <svg className={`w-6 h-6 text-${stat.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Active Missions Alert */}
      {activeMissions.length > 0 && (
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Your Active Missions</h3>
              <div className="space-y-2">
                {activeMissions.map((mission) => (
                  <div key={mission.id} className="flex items-center justify-between bg-white rounded-lg p-3">
                    <div>
                      <p className="font-medium text-gray-900">{mission.title}</p>
                      <p className="text-sm text-gray-600">{mission.ngo} • {mission.shift} • {mission.time}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      mission.status === 'In Progress' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {mission.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Opportunities List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Available Opportunities</h2>
            <div className="flex gap-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Types</option>
                <option>Emergency Response</option>
                <option>Healthcare</option>
                <option>Community Service</option>
                <option>Construction</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Locations</option>
                <option>Houston, TX</option>
                <option>Miami, FL</option>
                <option>Boston, MA</option>
                <option>Seattle, WA</option>
              </select>
            </div>
          </div>

          {opportunities.map((opp) => (
            <Card key={opp.id} className={`border-l-4 ${getUrgencyColor(opp.urgency)}`} hover>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{opp.title}</h3>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getUrgencyBadge(opp.urgency)}`}>
                      {opp.urgency} priority
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{opp.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {opp.ngo}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {opp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {opp.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {opp.volunteers} joined
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {opp.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="primary" size="md" className="flex-1">Join Mission</Button>
                <Button variant="outline" size="md">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Completion */}
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
            <h3 className="font-semibold text-gray-900 mb-3">Profile Strength</h3>
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Completion</span>
                <span className="font-bold text-purple-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Complete your profile to unlock more opportunities!
            </p>
            <Button variant="outline" size="sm" fullWidth>Complete Profile</Button>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              <div className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 text-white text-center rounded-lg p-2 min-w-[50px]">
                  <p className="text-xs font-medium">NOV</p>
                  <p className="text-xl font-bold">24</p>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">Volunteer Training</p>
                  <p className="text-xs text-gray-600">3:00 PM - Online</p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-green-50 rounded-lg">
                <div className="bg-green-600 text-white text-center rounded-lg p-2 min-w-[50px]">
                  <p className="text-xs font-medium">NOV</p>
                  <p className="text-xl font-bold">26</p>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">Community Meetup</p>
                  <p className="text-xs text-gray-600">5:00 PM - Miami</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <div className="bg-yellow-500 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">First Responder</p>
                  <p className="text-xs text-gray-600">Completed 5 emergency missions</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">Team Player</p>
                  <p className="text-xs text-gray-600">40+ hours contributed</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Emergency Contact */}
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <div className="flex items-start gap-3">
              <div className="bg-red-600 p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Emergency Hotline</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">1-800-RELIEF</p>
                <p className="text-xs text-gray-600">Available 24/7 for urgent situations</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerDashboard;
