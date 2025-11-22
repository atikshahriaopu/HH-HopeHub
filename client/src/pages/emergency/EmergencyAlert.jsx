import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const EmergencyAlert = () => {
  const [alertSent, setAlertSent] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [emergencyDetails, setEmergencyDetails] = useState({
    type: '',
    severity: 'high',
    location: '',
    description: '',
    requiredSkills: [],
    volunteersNeeded: 10,
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

  return (
    <DashboardLayout userType="ngo" userName="Relief Organization">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency Alert System</h1>
          <p className="text-gray-600">Quickly mobilize volunteers during crisis situations</p>
        </div>

        {/* Success Message */}
        {alertSent && (
          <Card className="mb-6 bg-green-50 border-green-200">
            <div className="flex items-start gap-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-green-900 mb-1">Emergency Alert Sent Successfully!</h3>
                <p className="text-sm text-green-700">
                  Notifications have been sent to {emergencyDetails.volunteersNeeded} nearby volunteers. 
                  You'll be notified when volunteers respond.
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Quick Alert Button */}
        <Card className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <div className="text-center">
            <h3 className="font-bold text-gray-900 mb-2">Quick Emergency Alert</h3>
            <p className="text-sm text-gray-600 mb-4">
              Send an immediate alert to all available volunteers in your area
            </p>
            <Button 
              variant="danger" 
              size="lg"
              className="min-w-[200px] shadow-lg hover:shadow-xl transform hover:scale-105"
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
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Detailed Alert</h2>
          
          <div className="space-y-6">
            {/* Emergency Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Emergency Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {emergencyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setEmergencyDetails({ ...emergencyDetails, type: type.id })}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      emergencyDetails.type === type.id
                        ? `border-${type.color}-600 bg-${type.color}-50 shadow-md`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <svg className={`w-8 h-8 mx-auto mb-2 ${
                      emergencyDetails.type === type.id ? `text-${type.color}-600` : 'text-gray-400'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={type.icon} />
                    </svg>
                    <p className={`text-sm font-medium ${
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
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Severity Level <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['high', 'medium', 'low'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setEmergencyDetails({ ...emergencyDetails, severity: level })}
                    className={`p-3 rounded-lg border-2 font-medium transition-all duration-200 ${
                      emergencyDetails.severity === level
                        ? level === 'high'
                          ? 'border-red-600 bg-red-50 text-red-800'
                          : level === 'medium'
                          ? 'border-yellow-600 bg-yellow-50 text-yellow-800'
                          : 'border-blue-600 bg-blue-50 text-blue-800'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={emergencyDetails.location}
                  onChange={(e) => setEmergencyDetails({ ...emergencyDetails, location: e.target.value })}
                  placeholder="e.g., Downtown Houston, TX or provide coordinates"
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Emergency Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={emergencyDetails.description}
                onChange={(e) => setEmergencyDetails({ ...emergencyDetails, description: e.target.value })}
                rows="4"
                placeholder="Provide detailed information about the emergency situation, what help is needed, and any specific instructions for volunteers..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Required Skills */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Required Skills (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      emergencyDetails.requiredSkills.includes(skill)
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Volunteers Needed */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Number of Volunteers Needed
              </label>
              <input
                type="number"
                value={emergencyDetails.volunteersNeeded}
                onChange={(e) => setEmergencyDetails({ ...emergencyDetails, volunteersNeeded: parseInt(e.target.value) || 0 })}
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Alert Preview */}
            <Card className="bg-gray-50 border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Alert Preview</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Type:</span> {emergencyDetails.type || 'Not selected'}</p>
                <p><span className="font-medium">Severity:</span> <span className={`px-2 py-0.5 rounded-full text-xs ${
                  emergencyDetails.severity === 'high' ? 'bg-red-100 text-red-800' :
                  emergencyDetails.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>{emergencyDetails.severity}</span></p>
                <p><span className="font-medium">Location:</span> {emergencyDetails.location || 'Not specified'}</p>
                <p><span className="font-medium">Skills Needed:</span> {emergencyDetails.requiredSkills.length > 0 ? emergencyDetails.requiredSkills.join(', ') : 'None selected'}</p>
                <p><span className="font-medium">Volunteers:</span> {emergencyDetails.volunteersNeeded}</p>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button 
                variant="danger" 
                size="lg" 
                fullWidth
                onClick={handleSendAlert}
                disabled={!emergencyDetails.type || !emergencyDetails.location || !emergencyDetails.description}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Send Detailed Alert
              </Button>
              <Button variant="outline" size="lg">
                Save Draft
              </Button>
            </div>
          </div>
        </Card>

        {/* Recent Alerts */}
        <Card className="mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Alerts</h2>
          <div className="space-y-3">
            {[
              { id: 1, type: 'Flood', location: 'Houston, TX', time: '2 hours ago', responded: 23, needed: 30 },
              { id: 2, type: 'Medical Emergency', location: 'Miami, FL', time: '5 hours ago', responded: 15, needed: 15 },
              { id: 3, type: 'Fire', location: 'Los Angeles, CA', time: '1 day ago', responded: 40, needed: 35 },
            ].map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{alert.type}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {alert.location}
                    </span>
                    <span>{alert.time}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{alert.responded}/{alert.needed} volunteers</p>
                  <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                    <div 
                      className="h-2 bg-green-600 rounded-full"
                      style={{ width: `${(alert.responded / alert.needed) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default EmergencyAlert;
