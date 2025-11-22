import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const MyMissions = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [isUpdateProgressOpen, setIsUpdateProgressOpen] = useState(false);
  const [isViewDetailsOpen, setIsViewDetailsOpen] = useState(false);
  const [isContactNGOOpen, setIsContactNGOOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState(null);
  const [progressData, setProgressData] = useState({
    completedTasks: [],
    notes: '',
  });
  const [contactData, setContactData] = useState({
    subject: '',
    message: '',
  });

  const handleUpdateProgress = (mission) => {
    setSelectedMission(mission);
    setProgressData({
      completedTasks: [...mission.completedTasks],
      notes: '',
    });
    setIsUpdateProgressOpen(true);
  };

  const handleViewDetails = (mission) => {
    setSelectedMission(mission);
    setIsViewDetailsOpen(true);
  };

  const handleContactNGO = (mission) => {
    setSelectedMission(mission);
    setContactData({
      subject: `Regarding: ${mission.title}`,
      message: '',
    });
    setIsContactNGOOpen(true);
  };

  const handleTaskToggle = (task) => {
    setProgressData(prev => ({
      ...prev,
      completedTasks: prev.completedTasks.includes(task)
        ? prev.completedTasks.filter(t => t !== task)
        : [...prev.completedTasks, task]
    }));
  };

  const handleProgressSubmit = (e) => {
    e.preventDefault();
    console.log('Updating progress:', selectedMission.id, progressData);
    setIsUpdateProgressOpen(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Sending message:', selectedMission.id, contactData);
    setIsContactNGOOpen(false);
  };

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
            <Button variant="primary" size="md" onClick={() => handleUpdateProgress(mission)}>Update Progress</Button>
            <Button variant="outline" size="md" onClick={() => handleViewDetails(mission)}>View Details</Button>
            <Button variant="ghost" size="md" onClick={() => handleContactNGO(mission)}>Contact NGO</Button>
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

      {/* Update Progress Modal */}
      {isUpdateProgressOpen && selectedMission && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsUpdateProgressOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Update Mission Progress</h2>
                <button
                  onClick={() => setIsUpdateProgressOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold text-gray-900 text-lg">{selectedMission.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {selectedMission.ngo}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {selectedMission.time}
                  </span>
                </div>
              </div>

              <form onSubmit={handleProgressSubmit}>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Task Checklist</h4>
                    <div className="space-y-3">
                      {selectedMission.tasks.map((task, idx) => (
                        <label key={idx} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                          <input
                            type="checkbox"
                            checked={progressData.completedTasks.includes(task)}
                            onChange={() => handleTaskToggle(task)}
                            className="w-5 h-5 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-0.5"
                          />
                          <div className="flex-1">
                            <span className={`text-sm font-medium ${progressData.completedTasks.includes(task) ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                              {task}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Overall Progress</span>
                        <span className="font-semibold text-gray-900">
                          {Math.round((progressData.completedTasks.length / selectedMission.tasks.length) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-300" 
                          style={{ width: `${(progressData.completedTasks.length / selectedMission.tasks.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Progress Notes (Optional)
                    </label>
                    <textarea
                      value={progressData.notes}
                      onChange={(e) => setProgressData(prev => ({ ...prev, notes: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Add any updates, challenges, or observations..."
                    />
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-green-900">Progress Update</p>
                        <p className="text-xs text-green-700 mt-1">Your progress will be shared with the NGO coordinator.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    fullWidth
                    onClick={() => setIsUpdateProgressOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" fullWidth>
                    Update Progress
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {isViewDetailsOpen && selectedMission && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsViewDetailsOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Mission Details</h2>
                <button
                  onClick={() => setIsViewDetailsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedMission.title}</h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      selectedMission.status === 'In Progress' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedMission.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="font-medium">Organization</span>
                    </div>
                    <p className="text-gray-900">{selectedMission.ngo}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">Location</span>
                    </div>
                    <p className="text-gray-900">{selectedMission.location}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Date</span>
                    </div>
                    <p className="text-gray-900">{selectedMission.date}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Time</span>
                    </div>
                    <p className="text-gray-900">{selectedMission.time}</p>
                  </div>
                </div>

                {selectedMission.shift && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Shift Assignment</h4>
                    <p className="text-gray-700">{selectedMission.shift}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Mission Tasks</h4>
                  <div className="space-y-2">
                    {selectedMission.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-2 h-2 rounded-full ${
                          selectedMission.completedTasks.includes(task) 
                            ? 'bg-green-500' 
                            : 'bg-gray-300'
                        }`}></div>
                        <span className={`text-sm ${
                          selectedMission.completedTasks.includes(task) 
                            ? 'line-through text-gray-500' 
                            : 'text-gray-900'
                        }`}>
                          {task}
                        </span>
                        {selectedMission.completedTasks.includes(task) && (
                          <svg className="w-5 h-5 text-green-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="font-semibold text-gray-900">{selectedMission.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-300" 
                      style={{ width: `${selectedMission.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  fullWidth
                  onClick={() => setIsViewDetailsOpen(false)}
                >
                  Close
                </Button>
                <Button
                  type="button"
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    setIsViewDetailsOpen(false);
                    handleContactNGO(selectedMission);
                  }}
                >
                  Contact NGO
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact NGO Modal */}
      {isContactNGOOpen && selectedMission && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsContactNGOOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact NGO</h2>
                <button
                  onClick={() => setIsContactNGOOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{selectedMission.ngo}</h3>
                    <p className="text-sm text-gray-600 mt-1">Mission: {selectedMission.title}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleContactSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={contactData.subject}
                      onChange={(e) => setContactData(prev => ({ ...prev, subject: e.target.value }))}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={contactData.message}
                      onChange={(e) => setContactData(prev => ({ ...prev, message: e.target.value }))}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Type your message here..."
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Contact Options</h4>
                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={() => setContactData(prev => ({ ...prev, subject: 'Question about mission tasks' }))}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-white rounded border border-gray-200 transition-colors"
                      >
                        Question about mission tasks
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactData(prev => ({ ...prev, subject: 'Request for additional information' }))}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-white rounded border border-gray-200 transition-colors"
                      >
                        Request for additional information
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactData(prev => ({ ...prev, subject: 'Report an issue' }))}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-white rounded border border-gray-200 transition-colors"
                      >
                        Report an issue
                      </button>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-blue-900">Message Delivery</p>
                        <p className="text-xs text-blue-700 mt-1">Your message will be sent to the NGO coordinator. They typically respond within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    fullWidth
                    onClick={() => setIsContactNGOOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" fullWidth>
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default MyMissions;
