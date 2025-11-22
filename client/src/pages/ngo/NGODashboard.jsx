import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const NGODashboard = () => {
  // Mock data
  const stats = [
    { label: 'Active Volunteers', value: '127', change: '+12%', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', color: 'blue' },
    { label: 'Active Missions', value: '15', change: '+3', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', color: 'green' },
    { label: 'Hours This Month', value: '1,248', change: '+18%', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'purple' },
    { label: 'Relief Packages', value: '542', change: '+24', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', color: 'orange' },
  ];

  const recentVolunteers = [
    { id: 1, name: 'Sarah Johnson', skills: 'Medical, First Aid', location: 'New York', status: 'Available', hours: 42, avatar: 'SJ' },
    { id: 2, name: 'Mike Chen', skills: 'Logistics, Transportation', location: 'California', status: 'On Mission', hours: 38, avatar: 'MC' },
    { id: 3, name: 'Emma Davis', skills: 'Communication, Translation', location: 'Texas', status: 'Available', hours: 35, avatar: 'ED' },
    { id: 4, name: 'James Wilson', skills: 'Construction, Engineering', location: 'Florida', status: 'Available', hours: 51, avatar: 'JW' },
  ];

  const activeMissions = [
    { id: 1, title: 'Flood Relief - Houston', volunteers: 23, priority: 'high', status: 'Active', progress: 65 },
    { id: 2, title: 'Food Distribution - Miami', volunteers: 15, priority: 'medium', status: 'Active', progress: 42 },
    { id: 3, title: 'Medical Camp - Boston', volunteers: 18, priority: 'high', status: 'Active', progress: 78 },
    { id: 4, title: 'Shelter Setup - Seattle', volunteers: 12, priority: 'low', status: 'Planning', progress: 25 },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout userType="ngo" userName="Relief Organization">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">NGO Dashboard</h1>
        <p className="text-gray-600">Monitor your relief operations and volunteer network</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Active Missions */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Active Missions</h2>
            <Button size="sm" variant="primary">Create New</Button>
          </div>
          <div className="space-y-4">
            {activeMissions.map((mission) => (
              <div key={mission.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{mission.title}</h3>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getPriorityColor(mission.priority)}`}>
                        {mission.priority}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        {mission.volunteers} volunteers
                      </span>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        mission.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {mission.status}
                      </span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">{mission.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${mission.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg hover:from-red-100 hover:to-red-200 transition-all duration-200 group">
              <div className="bg-red-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Send Alert</p>
                <p className="text-xs text-gray-600">Notify volunteers</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-200 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">New Mission</p>
                <p className="text-xs text-gray-600">Create relief task</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg hover:from-green-100 hover:to-green-200 transition-all duration-200 group">
              <div className="bg-green-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">View Reports</p>
                <p className="text-xs text-gray-600">Analytics & stats</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-all duration-200 group">
              <div className="bg-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Manage Resources</p>
                <p className="text-xs text-gray-600">Track inventory</p>
              </div>
            </button>
          </div>
        </Card>
      </div>

      {/* Available Volunteers Table */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Available Volunteers</h2>
          <Button size="sm" variant="ghost">View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Volunteer</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Skills</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Location</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Hours</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentVolunteers.map((volunteer) => (
                <tr key={volunteer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {volunteer.avatar}
                      </div>
                      <span className="font-medium text-gray-900">{volunteer.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{volunteer.skills}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{volunteer.location}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{volunteer.hours}h</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      volunteer.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {volunteer.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button size="sm" variant="outline">Assign</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default NGODashboard;
