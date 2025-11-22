import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const NGOMissions = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  const missions = [
    { id: 1, title: 'Flood Relief - Houston', description: 'Emergency response to flooding in downtown Houston area', volunteers: 23, requiredVolunteers: 30, priority: 'high', status: 'Active', progress: 65, startDate: '2025-11-20', location: 'Houston, TX' },
    { id: 2, title: 'Food Distribution - Miami', description: 'Weekly food distribution at community center', volunteers: 15, requiredVolunteers: 20, priority: 'medium', status: 'Active', progress: 42, startDate: '2025-11-18', location: 'Miami, FL' },
    { id: 3, title: 'Medical Camp - Boston', description: 'Free medical checkup and consultation camp', volunteers: 18, requiredVolunteers: 20, priority: 'high', status: 'Active', progress: 78, startDate: '2025-11-15', location: 'Boston, MA' },
    { id: 4, title: 'Shelter Setup - Seattle', description: 'Setting up temporary shelters for homeless', volunteers: 12, requiredVolunteers: 25, priority: 'low', status: 'Planning', progress: 25, startDate: '2025-11-25', location: 'Seattle, WA' },
    { id: 5, title: 'Water Supply - Phoenix', description: 'Emergency water distribution in drought-affected areas', volunteers: 8, requiredVolunteers: 15, priority: 'high', status: 'Planning', progress: 10, startDate: '2025-11-28', location: 'Phoenix, AZ' },
    { id: 6, title: 'Education Support - Chicago', description: 'After-school tutoring program for underprivileged children', volunteers: 20, requiredVolunteers: 20, priority: 'medium', status: 'Completed', progress: 100, startDate: '2025-10-15', location: 'Chicago, IL' },
  ];

  const stats = [
    { label: 'Total Missions', value: missions.length, icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: 'blue' },
    { label: 'Active Missions', value: missions.filter(m => m.status === 'Active').length, icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'green' },
    { label: 'Planning', value: missions.filter(m => m.status === 'Planning').length, icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', color: 'orange' },
    { label: 'Total Volunteers', value: missions.reduce((sum, m) => sum + m.volunteers, 0), icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', color: 'purple' },
  ];

  const filteredMissions = missions.filter(mission => {
    const matchesStatus = filterStatus === 'all' || mission.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || mission.priority === filterPriority;
    return matchesStatus && matchesPriority;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Planning': return 'bg-orange-100 text-orange-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout userType="ngo" userName="Relief Organization">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mission Management</h1>
        <p className="text-gray-600">Create, manage, and monitor your relief missions</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} hover>
            <div className="flex items-start justify-between">
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

      {/* Filters */}
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Planning">Planning</option>
              <option value="Completed">Completed</option>
            </select>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <Button variant="primary">+ Create Mission</Button>
        </div>
      </Card>

      {/* Missions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMissions.map((mission) => (
          <Card key={mission.id} hover className="border-l-4" style={{ borderLeftColor: mission.priority === 'high' ? '#EF4444' : mission.priority === 'medium' ? '#F59E0B' : '#3B82F6' }}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{mission.title}</h3>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${getPriorityColor(mission.priority)}`}>
                    {mission.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{mission.description}</p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {mission.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {mission.startDate}
                  </span>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(mission.status)}`}>
                {mission.status}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Volunteers</span>
                <span className="font-medium text-gray-900">{mission.volunteers} / {mission.requiredVolunteers}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div
                  className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(mission.volunteers / mission.requiredVolunteers) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-gray-900">{mission.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${mission.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline" fullWidth>View Details</Button>
              <Button size="sm" variant="primary" fullWidth>Manage</Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default NGOMissions;
