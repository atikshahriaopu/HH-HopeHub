import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const NGODashboard = () => {
  const navigate = useNavigate();
  const [selectedMission, setSelectedMission] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [assignFormData, setAssignFormData] = useState({
    mission: '',
    role: '',
    startDate: '',
    notes: ''
  });

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

  const handleViewMission = (mission) => {
    setSelectedMission(mission);
    setIsViewModalOpen(true);
  };

  const handleAssignVolunteer = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setIsAssignModalOpen(true);
  };

  const handleAssignSubmit = (e) => {
    e.preventDefault();
    console.log('Assigning volunteer:', selectedVolunteer, assignFormData);
    setIsAssignModalOpen(false);
    setAssignFormData({ mission: '', role: '', startDate: '', notes: '' });
  };

  const handleAssignChange = (e) => {
    const { name, value } = e.target;
    setAssignFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateNewMission = () => {
    navigate('/ngo/missions');
  };

  const handleViewAllVolunteers = () => {
    navigate('/ngo/volunteers');
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
            <Button size="sm" variant="primary" onClick={handleCreateNewMission}>Create New</Button>
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
                  <Button size="sm" variant="outline" onClick={() => handleViewMission(mission)}>View</Button>
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
          <Button size="sm" variant="ghost" onClick={handleViewAllVolunteers}>View All</Button>
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
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
                    <Button size="sm" variant="outline" onClick={() => handleAssignVolunteer(volunteer)}>Assign</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {recentVolunteers.map((volunteer) => (
            <div key={volunteer.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  {volunteer.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 mb-1">{volunteer.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{volunteer.skills}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {volunteer.location}
                    </span>
                    <span>•</span>
                    <span>{volunteer.hours}h contributed</span>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                  volunteer.status === 'Available' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {volunteer.status}
                </span>
              </div>
              <Button size="sm" variant="outline" fullWidth onClick={() => handleAssignVolunteer(volunteer)}>Assign to Mission</Button>
            </div>
          ))}
        </div>
      </Card>

      {/* View Mission Modal */}
      {isViewModalOpen && selectedMission && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsViewModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Mission Details</h2>
              <button 
                onClick={() => setIsViewModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Mission Header */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{selectedMission.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(selectedMission.priority)}`}>
                    {selectedMission.priority} priority
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    selectedMission.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedMission.status}
                  </span>
                </div>
                <p className="text-gray-700">Emergency relief operation providing immediate assistance to affected communities.</p>
              </div>

              {/* Mission Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm font-bold text-gray-900">{selectedMission.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${selectedMission.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Mission Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <svg className="w-6 h-6 text-blue-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <p className="text-2xl font-bold text-gray-900">{selectedMission.volunteers}</p>
                  <p className="text-xs text-gray-600">Volunteers</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <svg className="w-6 h-6 text-green-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-2xl font-bold text-gray-900">142</p>
                  <p className="text-xs text-gray-600">Hours Logged</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <svg className="w-6 h-6 text-purple-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <p className="text-2xl font-bold text-gray-900">328</p>
                  <p className="text-xs text-gray-600">Supplies Used</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <svg className="w-6 h-6 text-orange-600 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-2xl font-bold text-gray-900">1,240</p>
                  <p className="text-xs text-gray-600">People Helped</p>
                </div>
              </div>

              {/* Mission Information */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Mission Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium text-gray-900">Houston, Texas</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Start Date</span>
                    <span className="font-medium text-gray-900">Nov 15, 2025</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium text-gray-900">14 days (7 remaining)</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Coordinator</span>
                    <span className="font-medium text-gray-900">Relief Organization</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-600">Emergency Type</span>
                    <span className="font-medium text-gray-900">Flood Relief</span>
                  </div>
                </div>
              </div>

              {/* Tasks Overview */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Tasks</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-900">Emergency shelter setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-900">Food and water distribution</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-900">Medical assistance coordination</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-900">Evacuation support</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button variant="primary" fullWidth>
                  Edit Mission
                </Button>
                <Button variant="outline" fullWidth onClick={() => setIsViewModalOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assign Volunteer Modal */}
      {isAssignModalOpen && selectedVolunteer && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsAssignModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Assign Volunteer</h2>
              <button 
                onClick={() => setIsAssignModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleAssignSubmit} className="space-y-6">
              {/* Volunteer Info */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {selectedVolunteer.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{selectedVolunteer.name}</h3>
                    <p className="text-sm text-gray-600">{selectedVolunteer.skills}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    selectedVolunteer.status === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {selectedVolunteer.status}
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="font-medium text-gray-900">{selectedVolunteer.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Hours</p>
                    <p className="font-medium text-gray-900">{selectedVolunteer.hours}h</p>
                  </div>
                </div>
              </div>

              {/* Assignment Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Mission <span className="text-red-500">*</span>
                </label>
                <select
                  name="mission"
                  value={assignFormData.mission}
                  onChange={handleAssignChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a mission</option>
                  {activeMissions.map((mission) => (
                    <option key={mission.id} value={mission.title}>
                      {mission.title} - {mission.status}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role/Responsibility <span className="text-red-500">*</span>
                </label>
                <select
                  name="role"
                  value={assignFormData.role}
                  onChange={handleAssignChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select role</option>
                  <option value="Team Leader">Team Leader</option>
                  <option value="Medical Support">Medical Support</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Distribution">Distribution</option>
                  <option value="Communication">Communication</option>
                  <option value="General Support">General Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={assignFormData.startDate}
                  onChange={handleAssignChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={assignFormData.notes}
                  onChange={handleAssignChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any special instructions or requirements..."
                />
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Assignment Notification</p>
                    <p>The volunteer will receive a notification about this assignment with all the details.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  fullWidth
                  onClick={() => setIsAssignModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary" fullWidth>
                  Assign to Mission
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default NGODashboard;
