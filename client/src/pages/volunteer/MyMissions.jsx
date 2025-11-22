import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const MyMissions = () => {
  const [activeTab, setActiveTab] = useState('active');

  const activeMissions = [
    {
      id: 1,
      title: 'Community Kitchen Support',
      ngo: 'Feed the City',
      location: 'New York, NY',
      shift: 'Morning Shift',
      time: '8:00 AM - 12:00 PM',
      date: 'Today',
      status: 'In Progress',
      progress: 60,
      tasks: ['Food preparation', 'Serving meals', 'Cleanup'],
      completedTasks: ['Food preparation']
    },
    {
      id: 2,
      title: 'Warehouse Organization',
      ngo: 'Relief Supply Co',
      location: 'Brooklyn, NY',
      shift: 'Evening Shift',
      time: '4:00 PM - 8:00 PM',
      date: 'Tomorrow',
      status: 'Scheduled',
      progress: 0,
      tasks: ['Inventory sorting', 'Labeling', 'Storage organization'],
      completedTasks: []
    },
  ];

  const completedMissions = [
    {
      id: 3,
      title: 'Flood Relief - Houston',
      ngo: 'Red Cross Houston',
      location: 'Houston, TX',
      date: 'Nov 15, 2025',
      hours: 8,
      status: 'Completed',
      rating: 5,
      feedback: 'Excellent work! Very dedicated and helpful.',
      impact: 'Helped 50+ families'
    },
    {
      id: 4,
      title: 'Medical Camp Setup',
      ngo: 'Health Relief Org',
      location: 'Boston, MA',
      date: 'Nov 5, 2025',
      hours: 6,
      status: 'Completed',
      rating: 5,
      feedback: 'Professional and efficient.',
      impact: 'Assisted 100+ patients'
    },
    {
      id: 5,
      title: 'Food Distribution',
      ngo: 'Food Bank Network',
      location: 'Miami, FL',
      date: 'Oct 28, 2025',
      hours: 5,
      status: 'Completed',
      rating: 4,
      feedback: 'Great team player!',
      impact: 'Distributed 500+ meals'
    },
  ];

  const upcomingMissions = [
    {
      id: 6,
      title: 'Community Cleanup Drive',
      ngo: 'Clean Earth Initiative',
      location: 'Central Park, NY',
      date: 'Nov 30, 2025',
      time: '9:00 AM - 1:00 PM',
      volunteers: '15/20',
      status: 'Confirmed'
    },
    {
      id: 7,
      title: 'Winter Clothing Distribution',
      ngo: 'Warmth for All',
      location: 'Queens, NY',
      date: 'Dec 5, 2025',
      time: '10:00 AM - 3:00 PM',
      volunteers: '8/15',
      status: 'Confirmed'
    },
  ];

  const renderActiveMissions = () => (
    <div className="space-y-6">
      {activeMissions.map((mission) => (
        <Card key={mission.id} className={`border-l-4 ${mission.status === 'In Progress' ? 'border-green-500 bg-green-50' : 'border-blue-500 bg-blue-50'}`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900">{mission.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  mission.status === 'In Progress' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {mission.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{mission.ngo}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{mission.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{mission.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{mission.date}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-gray-900">{mission.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${mission.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Tasks */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Tasks:</h4>
                <div className="space-y-2">
                  {mission.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={mission.completedTasks.includes(task)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                      <span className={`text-sm ${mission.completedTasks.includes(task) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="primary" size="md">Update Progress</Button>
            <Button variant="outline" size="md">View Details</Button>
            <Button variant="ghost" size="md">Contact NGO</Button>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderCompletedMissions = () => (
    <div className="space-y-6">
      {completedMissions.map((mission) => (
        <Card key={mission.id} className="border-l-4 border-gray-400">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900">{mission.title}</h3>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                  {mission.status}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{mission.ngo}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{mission.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{mission.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{mission.hours} hours</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700">Your Rating:</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < mission.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Feedback */}
              {mission.feedback && (
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <p className="text-sm font-medium text-gray-900 mb-1">NGO Feedback:</p>
                  <p className="text-sm text-gray-700 italic">"{mission.feedback}"</p>
                </div>
              )}

              {/* Impact */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Impact: {mission.impact}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="md">View Certificate</Button>
            <Button variant="ghost" size="md">Share Achievement</Button>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderUpcomingMissions = () => (
    <div className="space-y-6">
      {upcomingMissions.map((mission) => (
        <Card key={mission.id} className="border-l-4 border-purple-500 bg-purple-50">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900">{mission.title}</h3>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                  {mission.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{mission.ngo}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{mission.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{mission.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{mission.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>{mission.volunteers} volunteers</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="primary" size="md">Add to Calendar</Button>
            <Button variant="outline" size="md">View Details</Button>
            <Button variant="ghost" size="md" className="text-red-600 hover:bg-red-50">Cancel</Button>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <DashboardLayout userType="volunteer" userName="Sarah Johnson">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Missions</h1>
        <p className="text-gray-600">Track and manage all your volunteer missions in one place.</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center bg-gradient-to-br from-green-50 to-green-100">
          <p className="text-sm text-gray-600 mb-1">Active Missions</p>
          <p className="text-3xl font-bold text-green-600">{activeMissions.length}</p>
        </Card>
        <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100">
          <p className="text-sm text-gray-600 mb-1">Upcoming</p>
          <p className="text-3xl font-bold text-purple-600">{upcomingMissions.length}</p>
        </Card>
        <Card className="text-center bg-gradient-to-br from-gray-50 to-gray-100">
          <p className="text-sm text-gray-600 mb-1">Completed</p>
          <p className="text-3xl font-bold text-gray-600">{completedMissions.length}</p>
        </Card>
        <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100">
          <p className="text-sm text-gray-600 mb-1">Total Hours</p>
          <p className="text-3xl font-bold text-blue-600">142</p>
        </Card>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'active'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Active ({activeMissions.length})
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'upcoming'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Upcoming ({upcomingMissions.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'completed'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Completed ({completedMissions.length})
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'active' && renderActiveMissions()}
      {activeTab === 'upcoming' && renderUpcomingMissions()}
      {activeTab === 'completed' && renderCompletedMissions()}
    </DashboardLayout>
  );
};

export default MyMissions;
