import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Card from '../components/Card';
import Button from '../components/Button';

const EmergencyAlert = () => {
  const [alertSent, setAlertSent] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [isAlertDetailsOpen, setIsAlertDetailsOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [emergencyDetails, setEmergencyDetails] = useState({
    type: '',
    severity: 'high',
    location: '',
    description: '',
    requiredSkills: [],
    volunteersNeeded: 10,
  });
  const [volunteerResponseData, setVolunteerResponseData] = useState({
    availability: '',
    transportation: '',
    skills: [],
    notes: ''
  });

  const emergencyTypes = [
    { id: 'flood', name: 'Flood', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707', color: 'blue' },
    { id: 'fire', name: 'Fire', icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z', color: 'red' },
    { id: 'earthquake', name: 'Earthquake', icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9', color: 'orange' },
    { id: 'medical', name: 'Medical Emergency', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'red' },
    { id: 'storm', name: 'Storm/Hurricane', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z', color: 'purple' },
    { id: 'other', name: 'Other Crisis', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', color: 'yellow' },
  ];

  const skillOptions = [
    'Medical Assistance', 'First Aid', 'Search & Rescue', 'Communication',
    'Transportation', 'Food Distribution', 'Shelter Setup', 'Logistics',
    'Translation', 'IT Support', 'Construction', 'Counseling'
  ];

  const handleSendAlert = () => {
    // Simulate sending alert
    setAlertSent(true);
    setTimeout(() => setAlertSent(false), 5000);
  };

  const toggleSkill = (skill) => {
    setEmergencyDetails(prev => ({
      ...prev,
      requiredSkills: prev.requiredSkills.includes(skill)
        ? prev.requiredSkills.filter(s => s !== skill)
        : [...prev.requiredSkills, skill]
    }));
  };

  const handleViewAlertDetails = (alert) => {
    setSelectedAlert(alert);
    setIsAlertDetailsOpen(true);
  };

  const handleVolunteerNow = () => {
    setIsVolunteerModalOpen(true);
  };

  const handleShareAlert = () => {
    setIsShareModalOpen(true);
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer response submitted:', volunteerResponseData);
    setIsVolunteerModalOpen(false);
    setVolunteerResponseData({
      availability: '',
      transportation: '',
      skills: [],
      notes: ''
    });
    alert('Your response has been submitted! The organization will contact you shortly.');
  };

  const addSkillToResponse = (skill) => {
    if (skill && !volunteerResponseData.skills.includes(skill)) {
      setVolunteerResponseData({
        ...volunteerResponseData,
        skills: [...volunteerResponseData.skills, skill]
      });
    }
  };

  const removeSkillFromResponse = (skillToRemove) => {
    setVolunteerResponseData({
      ...volunteerResponseData,
      skills: volunteerResponseData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Alert link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeNavbar />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4 shadow-lg">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Emergency Alert System</h1>
          <p className="text-lg text-gray-600">Quickly mobilize volunteers during crisis situations</p>
        </div>

        {/* Success Message */}
        {alertSent && (
          <Card className="mb-6 bg-green-50 border-2 border-green-200 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-3 rounded-lg flex-shrink-0 shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-green-900 mb-2 text-lg">Emergency Alert Sent Successfully!</h3>
                <p className="text-green-700">
                  Notifications have been sent to {emergencyDetails.volunteersNeeded} nearby volunteers. 
                  You'll be notified when volunteers respond.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Quick Alert Button */}
        <Card className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 shadow-md">
          <div className="text-center py-4">
            <h3 className="font-bold text-gray-900 mb-2 text-xl">Quick Emergency Alert</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Send an immediate alert to all available volunteers in your area
            </p>
            <Button 
              variant="danger" 
              size="lg"
              className="min-w-[240px] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              onClick={handleSendAlert}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Send Immediate Alert
            </Button>
          </div>
        </Card>

        {/* Detailed Alert Form */}
        <Card className="shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Create Detailed Alert</h2>
          
          <div className="space-y-8">
            {/* Emergency Type Selection */}
            <div>
              <label className="block text-base font-bold text-gray-900 mb-4">
                Emergency Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {emergencyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setEmergencyDetails({ ...emergencyDetails, type: type.id })}
                    className={`p-5 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                      emergencyDetails.type === type.id
                        ? `border-${type.color}-600 bg-${type.color}-50 shadow-lg`
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <svg className={`w-10 h-10 mx-auto mb-3 ${
                      emergencyDetails.type === type.id ? `text-${type.color}-600` : 'text-gray-400'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={type.icon} />
                    </svg>
                    <p className={`text-sm font-semibold ${
                      emergencyDetails.type === type.id ? `text-${type.color}-900` : 'text-gray-700'
                    }`}>
                      {type.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Severity Level */}
            <div>
              <label className="block text-base font-bold text-gray-900 mb-4">
                Severity Level <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['high', 'medium', 'low'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setEmergencyDetails({ ...emergencyDetails, severity: level })}
                    className={`p-4 rounded-lg border-2 font-semibold transition-all duration-200 hover:shadow-md ${
                      emergencyDetails.severity === level
                        ? level === 'high'
                          ? 'border-red-600 bg-red-50 text-red-800 shadow-md'
                          : level === 'medium'
                          ? 'border-yellow-600 bg-yellow-50 text-yellow-800 shadow-md'
                          : 'border-blue-600 bg-blue-50 text-blue-800 shadow-md'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300 bg-white'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-base font-bold text-gray-900 mb-3">
                Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={emergencyDetails.location}
                  onChange={(e) => setEmergencyDetails({ ...emergencyDetails, location: e.target.value })}
                  placeholder="e.g., Downtown Houston, TX or provide coordinates"
                  className="w-full px-4 py-3 pl-11 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-base font-bold text-gray-900 mb-3">
                Emergency Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={emergencyDetails.description}
                onChange={(e) => setEmergencyDetails({ ...emergencyDetails, description: e.target.value })}
                rows="5"
                placeholder="Provide detailed information about the emergency situation, what help is needed, and any specific instructions for volunteers..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Required Skills */}
            <div>
              <label className="block text-base font-bold text-gray-900 mb-4">
                Required Skills (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-3">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border-2 ${
                      emergencyDetails.requiredSkills.includes(skill)
                        ? 'bg-blue-600 text-white shadow-md border-blue-600'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Volunteers Needed */}
            <div>
              <label className="block text-base font-bold text-gray-900 mb-3">
                Number of Volunteers Needed
              </label>
              <input
                type="number"
                value={emergencyDetails.volunteersNeeded}
                onChange={(e) => setEmergencyDetails({ ...emergencyDetails, volunteersNeeded: parseInt(e.target.value) || 0 })}
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Alert Preview */}
            <Card className="bg-blue-50 border-2 border-blue-200">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Alert Preview</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><span className="font-semibold">Type:</span> {emergencyDetails.type || 'Not selected'}</p>
                <p className="text-gray-700"><span className="font-semibold">Severity:</span> <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  emergencyDetails.severity === 'high' ? 'bg-red-100 text-red-800' :
                  emergencyDetails.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>{emergencyDetails.severity.toUpperCase()}</span></p>
                <p className="text-gray-700"><span className="font-semibold">Location:</span> {emergencyDetails.location || 'Not specified'}</p>
                <p className="text-gray-700"><span className="font-semibold">Skills Needed:</span> {emergencyDetails.requiredSkills.length > 0 ? emergencyDetails.requiredSkills.join(', ') : 'None selected'}</p>
                <p className="text-gray-700"><span className="font-semibold">Volunteers:</span> {emergencyDetails.volunteersNeeded}</p>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                variant="danger" 
                size="lg" 
                fullWidth
                onClick={handleSendAlert}
                disabled={!emergencyDetails.type || !emergencyDetails.location || !emergencyDetails.description}
                className="shadow-lg hover:shadow-xl transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Send Detailed Alert
              </Button>
              <Button variant="outline" size="lg" className="sm:w-auto hover:shadow-md transition-all">
                Save Draft
              </Button>
            </div>
          </div>
        </Card>

        {/* Recent Alerts */}
        <Card className="mt-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Alerts</h2>
          <div className="space-y-4">
            {[
              { 
                id: 1, 
                type: 'Flood', 
                location: 'Houston, TX', 
                time: '2 hours ago', 
                responded: 23, 
                needed: 30,
                severity: 'high',
                description: 'Emergency flooding in downtown Houston area. Immediate assistance needed for evacuation and emergency shelter setup. Water levels rising rapidly.',
                skills: ['Search & Rescue', 'Medical Assistance', 'Transportation', 'Food Distribution'],
                status: 'Active',
                sentBy: 'Relief Organization',
                volunteers: [
                  { name: 'Sarah Johnson', role: 'Team Leader', status: 'En Route' },
                  { name: 'Mike Chen', role: 'Medical Support', status: 'On Site' },
                  { name: 'Emma Davis', role: 'Logistics', status: 'En Route' },
                ]
              },
              { 
                id: 2, 
                type: 'Medical Emergency', 
                location: 'Miami, FL', 
                time: '5 hours ago', 
                responded: 15, 
                needed: 15,
                severity: 'high',
                description: 'Multiple injuries reported at community center. Medical personnel urgently needed to provide first aid and emergency care.',
                skills: ['Medical Assistance', 'First Aid', 'Counseling'],
                status: 'Resolved',
                sentBy: 'Health Relief Org',
                volunteers: [
                  { name: 'Dr. James Wilson', role: 'Medical Lead', status: 'Completed' },
                  { name: 'Lisa Brown', role: 'Nurse', status: 'Completed' },
                ]
              },
              { 
                id: 3, 
                type: 'Fire', 
                location: 'Los Angeles, CA', 
                time: '1 day ago', 
                responded: 40, 
                needed: 35,
                severity: 'medium',
                description: 'Wildfire containment support needed. Assist with evacuation coordination and emergency supplies distribution to affected families.',
                skills: ['Logistics', 'Transportation', 'Food Distribution', 'Shelter Setup'],
                status: 'In Progress',
                sentBy: 'Fire Response Team',
                volunteers: [
                  { name: 'Tom Anderson', role: 'Coordinator', status: 'On Site' },
                  { name: 'Rachel Green', role: 'Supply Manager', status: 'On Site' },
                ]
              },
            ].map((alert) => (
              <div 
                key={alert.id} 
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all gap-4 bg-white cursor-pointer"
                onClick={() => handleViewAlertDetails(alert)}
              >
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{alert.type}</h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {alert.location}
                    </span>
                    <span className="text-gray-500">• {alert.time}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 mb-2">{alert.responded}/{alert.needed} volunteers</p>
                  <div className="w-32 h-2.5 bg-gray-200 rounded-full">
                    <div 
                      className="h-2.5 bg-green-600 rounded-full transition-all"
                      style={{ width: `${(alert.responded / alert.needed) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alert Details Modal */}
      {isAlertDetailsOpen && selectedAlert && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsAlertDetailsOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4 flex-1">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  selectedAlert.severity === 'high' ? 'bg-red-100' :
                  selectedAlert.severity === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    selectedAlert.severity === 'high' ? 'text-red-600' :
                    selectedAlert.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedAlert.type} Emergency</h2>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedAlert.time}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedAlert.severity === 'high' ? 'bg-red-100 text-red-800' :
                      selectedAlert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedAlert.severity.toUpperCase()} PRIORITY
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedAlert.status === 'Active' ? 'bg-green-100 text-green-800' :
                      selectedAlert.status === 'Resolved' ? 'bg-blue-100 text-blue-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {selectedAlert.status}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsAlertDetailsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Alert Content */}
            <div className="space-y-6">
              {/* Location */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-semibold text-gray-900">Location</span>
                </div>
                <p className="text-gray-700 ml-7">{selectedAlert.location}</p>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedAlert.description}</p>
              </div>

              {/* Required Skills */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAlert.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Volunteer Response Stats */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Volunteer Response</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{selectedAlert.responded}</p>
                    <p className="text-sm text-gray-600">Responded</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{selectedAlert.needed}</p>
                    <p className="text-sm text-gray-600">Needed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{Math.max(0, selectedAlert.needed - selectedAlert.responded)}</p>
                    <p className="text-sm text-gray-600">Still Needed</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all ${
                      (selectedAlert.responded / selectedAlert.needed) >= 1 ? 'bg-green-600' : 'bg-blue-600'
                    }`}
                    style={{ width: `${Math.min((selectedAlert.responded / selectedAlert.needed) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  {Math.round((selectedAlert.responded / selectedAlert.needed) * 100)}% fulfilled
                </p>
              </div>

              {/* Responding Volunteers */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Responding Volunteers</h3>
                <div className="space-y-2">
                  {selectedAlert.volunteers.map((volunteer, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {volunteer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{volunteer.name}</p>
                          <p className="text-sm text-gray-600">{volunteer.role}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        volunteer.status === 'On Site' ? 'bg-green-100 text-green-800' :
                        volunteer.status === 'En Route' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {volunteer.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organization Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-semibold text-gray-900">Alert Sent By</span>
                </div>
                <p className="text-gray-700 ml-7">{selectedAlert.sentBy}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                {selectedAlert.status === 'Active' && (
                  <>
                    <Button variant="primary" fullWidth onClick={handleVolunteerNow}>
                      Volunteer Now
                    </Button>
                    <Button variant="outline" fullWidth onClick={handleShareAlert}>
                      Share Alert
                    </Button>
                  </>
                )}
                {selectedAlert.status === 'In Progress' && (
                  <>
                    <Button variant="primary" fullWidth>
                      Join Response
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => setIsAlertDetailsOpen(false)}>
                      Close
                    </Button>
                  </>
                )}
                {selectedAlert.status === 'Resolved' && (
                  <>
                    <Button variant="outline" fullWidth>
                      View Report
                    </Button>
                    <Button variant="primary" fullWidth onClick={() => setIsAlertDetailsOpen(false)}>
                      Close
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Volunteer Now Modal */}
      {isVolunteerModalOpen && selectedAlert && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsVolunteerModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Respond to Emergency</h2>
                <p className="text-gray-600">Confirm your availability for {selectedAlert.type} in {selectedAlert.location}</p>
              </div>
              <button 
                onClick={() => setIsVolunteerModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              {/* Emergency Summary */}
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-red-900 mb-1">{selectedAlert.severity.toUpperCase()} PRIORITY EMERGENCY</p>
                    <p className="text-sm text-red-800">{selectedAlert.description}</p>
                  </div>
                </div>
              </div>

              {/* Your Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Available Skills</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedAlert.skills.map((skill, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => addSkillToResponse(skill)}
                      disabled={volunteerResponseData.skills.includes(skill)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        volunteerResponseData.skills.includes(skill)
                          ? 'bg-blue-600 text-white cursor-not-allowed'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {skill}
                      {volunteerResponseData.skills.includes(skill) && (
                        <span className="ml-1">✓</span>
                      )}
                    </button>
                  ))}
                </div>
                {volunteerResponseData.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {volunteerResponseData.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2">
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkillFromResponse(skill)}
                          className="hover:bg-blue-700 rounded-full"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">When Can You Respond? *</label>
                <select
                  required
                  value={volunteerResponseData.availability}
                  onChange={(e) => setVolunteerResponseData({...volunteerResponseData, availability: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select your availability</option>
                  <option value="immediately">Immediately (within 30 min)</option>
                  <option value="within-1h">Within 1 hour</option>
                  <option value="within-2h">Within 2 hours</option>
                  <option value="within-4h">Within 4 hours</option>
                  <option value="today">Later today</option>
                </select>
              </div>

              {/* Transportation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transportation *</label>
                <select
                  required
                  value={volunteerResponseData.transportation}
                  onChange={(e) => setVolunteerResponseData({...volunteerResponseData, transportation: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select transportation option</option>
                  <option value="own-vehicle">I have my own vehicle</option>
                  <option value="public-transport">Using public transport</option>
                  <option value="need-transport">Need transportation assistance</option>
                  <option value="carpooling">Open to carpooling</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  value={volunteerResponseData.notes}
                  onChange={(e) => setVolunteerResponseData({...volunteerResponseData, notes: e.target.value})}
                  rows={3}
                  placeholder="Any relevant experience, special equipment you can bring, or questions..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Contact Info Note */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-900 mb-1">Contact Information</p>
                    <p className="text-sm text-blue-800">The organization will contact you via your registered phone number and email with meeting point details and further instructions.</p>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button type="button" variant="outline" fullWidth onClick={() => setIsVolunteerModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="danger" fullWidth>
                  Confirm Response
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Share Alert Modal */}
      {isShareModalOpen && selectedAlert && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsShareModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Share Emergency Alert</h2>
                <p className="text-sm text-gray-600">Help spread the word</p>
              </div>
              <button 
                onClick={() => setIsShareModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* Alert Preview */}
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="font-semibold text-gray-900 mb-1">{selectedAlert.type} Emergency</p>
                <p className="text-sm text-gray-700">{selectedAlert.location}</p>
                <p className="text-xs text-gray-600 mt-2">{selectedAlert.responded}/{selectedAlert.needed} volunteers responded</p>
              </div>

              {/* Share Options */}
              <div className="space-y-2">
                <button className="flex items-center gap-3 p-3 w-full border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Share on Facebook</p>
                    <p className="text-xs text-gray-600">Post to your timeline</p>
                  </div>
                </button>

                <button className="flex items-center gap-3 p-3 w-full border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-left">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Share on Twitter</p>
                    <p className="text-xs text-gray-600">Tweet to followers</p>
                  </div>
                </button>

                <button className="flex items-center gap-3 p-3 w-full border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Share on WhatsApp</p>
                    <p className="text-xs text-gray-600">Send to contacts</p>
                  </div>
                </button>

                <button 
                  onClick={handleCopyLink}
                  className="flex items-center gap-3 p-3 w-full border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all text-left"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Copy Link</p>
                    <p className="text-xs text-gray-600">Copy alert URL</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyAlert;
