import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const NGOVolunteers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterSkill, setFilterSkill] = useState('all');

  const volunteers = [
    { id: 1, name: 'Sarah Johnson', skills: ['Medical', 'First Aid'], location: 'New York', status: 'Available', hours: 142, missions: 24, avatar: 'SJ', email: 'sarah.j@email.com', phone: '+1 555-0101', rating: 4.9 },
    { id: 2, name: 'Mike Chen', skills: ['Logistics', 'Transportation'], location: 'California', status: 'On Mission', hours: 128, missions: 19, avatar: 'MC', email: 'mike.c@email.com', phone: '+1 555-0102', rating: 4.8 },
    { id: 3, name: 'Emma Davis', skills: ['Communication', 'Translation'], location: 'Texas', status: 'Available', hours: 95, missions: 15, avatar: 'ED', email: 'emma.d@email.com', phone: '+1 555-0103', rating: 5.0 },
    { id: 4, name: 'James Wilson', skills: ['Construction', 'Engineering'], location: 'Florida', status: 'Available', hours: 156, missions: 21, avatar: 'JW', email: 'james.w@email.com', phone: '+1 555-0104', rating: 4.7 },
    { id: 5, name: 'Maria Garcia', skills: ['Medical', 'Nursing'], location: 'Arizona', status: 'On Mission', hours: 187, missions: 28, avatar: 'MG', email: 'maria.g@email.com', phone: '+1 555-0105', rating: 4.9 },
    { id: 6, name: 'David Kim', skills: ['IT', 'Technical Support'], location: 'Washington', status: 'Available', hours: 78, missions: 12, avatar: 'DK', email: 'david.k@email.com', phone: '+1 555-0106', rating: 4.6 },
    { id: 7, name: 'Lisa Brown', skills: ['Logistics', 'Coordination'], location: 'Oregon', status: 'Unavailable', hours: 203, missions: 32, avatar: 'LB', email: 'lisa.b@email.com', phone: '+1 555-0107', rating: 5.0 },
    { id: 8, name: 'Alex Martinez', skills: ['Communication', 'Social Media'], location: 'Nevada', status: 'Available', hours: 89, missions: 14, avatar: 'AM', email: 'alex.m@email.com', phone: '+1 555-0108', rating: 4.8 },
  ];

  const stats = [
    { label: 'Total Volunteers', value: volunteers.length, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', color: 'blue' },
    { label: 'Available Now', value: volunteers.filter(v => v.status === 'Available').length, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'green' },
    { label: 'On Mission', value: volunteers.filter(v => v.status === 'On Mission').length, icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'orange' },
    { label: 'Total Hours', value: volunteers.reduce((sum, v) => sum + v.hours, 0), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'purple' },
  ];

  const allSkills = [...new Set(volunteers.flatMap(v => v.skills))];

  const filteredVolunteers = volunteers.filter(volunteer => {
    const matchesSearch = volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          volunteer.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || volunteer.status === filterStatus;
    const matchesSkill = filterSkill === 'all' || volunteer.skills.includes(filterSkill);
    return matchesSearch && matchesStatus && matchesSkill;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'On Mission': return 'bg-blue-100 text-blue-800';
      case 'Unavailable': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout userType="ngo" userName="Relief Organization">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Volunteer Management</h1>
        <p className="text-gray-600">Manage and coordinate your volunteer network</p>
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

      {/* Filters and Search */}
      <Card className="mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search volunteers by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Status</option>
              <option value="Available">Available</option>
              <option value="On Mission">On Mission</option>
              <option value="Unavailable">Unavailable</option>
            </select>
            <select
              value={filterSkill}
              onChange={(e) => setFilterSkill(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Skills</option>
              {allSkills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
            <Button variant="primary">+ Add Volunteer</Button>
          </div>
        </div>
      </Card>

      {/* Volunteers Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Volunteer</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Skills</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Location</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Hours</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Missions</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Rating</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVolunteers.map((volunteer) => (
                <tr key={volunteer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {volunteer.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{volunteer.name}</p>
                        <p className="text-xs text-gray-500">{volunteer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {volunteer.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{volunteer.location}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{volunteer.hours}h</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{volunteer.missions}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">{volunteer.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(volunteer.status)}`}>
                      {volunteer.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button size="sm" variant="outline">View</Button>
                      <Button size="sm" variant="primary">Assign</Button>
                    </div>
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

export default NGOVolunteers;
