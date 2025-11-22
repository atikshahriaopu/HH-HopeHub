import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const VolunteerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Mock profile data
  const profile = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    joinDate: 'January 2024',
    bio: 'Passionate about helping communities during crisis situations. Experienced in medical assistance and emergency response coordination.',
    skills: ['First Aid', 'Medical Assistance', 'Communication', 'Team Leadership', 'Crisis Management'],
    availability: 'Weekends & Evenings',
    languages: ['English', 'Spanish'],
    certifications: ['CPR Certified', 'First Aid', 'Emergency Response Training'],
  };

  const stats = [
    { label: 'Total Hours', value: '142', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Missions', value: '24', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Impact Score', value: '94', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { label: 'Badges', value: '8', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
  ];

  const missionHistory = [
    { id: 1, title: 'Flood Relief - Houston', date: 'Nov 15, 2025', hours: 8, status: 'Completed', rating: 5 },
    { id: 2, title: 'Community Kitchen', date: 'Nov 10, 2025', hours: 4, status: 'Completed', rating: 5 },
    { id: 3, title: 'Medical Camp Setup', date: 'Nov 5, 2025', hours: 6, status: 'Completed', rating: 4 },
    { id: 4, title: 'Food Distribution', date: 'Oct 28, 2025', hours: 5, status: 'Completed', rating: 5 },
    { id: 5, title: 'Shelter Construction', date: 'Oct 20, 2025', hours: 10, status: 'Completed', rating: 5 },
  ];

  const badges = [
    { name: 'First Responder', description: '5+ emergency missions', color: 'yellow', earned: 'Nov 2025' },
    { name: 'Team Player', description: '40+ hours contributed', color: 'blue', earned: 'Oct 2025' },
    { name: 'Medical Hero', description: 'Healthcare missions', color: 'red', earned: 'Oct 2025' },
    { name: 'Community Builder', description: '10+ missions completed', color: 'green', earned: 'Sep 2025' },
  ];

  return (
    <DashboardLayout userType="volunteer" userName={profile.name}>
      {/* Profile Header */}
      <div className="mb-8">
        <Card className="relative overflow-hidden">
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-r from-blue-600 via-blue-500 to-green-600"></div>
          
          {/* Profile Content */}
          <div className="relative px-6 pb-6">
            {/* Avatar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 mb-4">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-xl">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">{profile.name}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {profile.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Joined {profile.joinDate}
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant={isEditing ? "outline" : "primary"}
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center" hover>
            <svg className="w-8 h-8 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
            </svg>
            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
          </Card>

          {/* Skills */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Mission History */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Mission History</h2>
            <div className="space-y-3">
              {missionHistory.map((mission) => (
                <div key={mission.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{mission.title}</h3>
                      <p className="text-sm text-gray-600">{mission.date}</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {mission.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {mission.hours} hours
                      </span>
                      <span className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < mission.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" fullWidth className="mt-4">View All Missions</Button>
          </Card>

          {/* Badges & Achievements */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Badges & Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {badges.map((badge, index) => (
                <div key={index} className={`bg-${badge.color}-50 border-2 border-${badge.color}-200 rounded-lg p-4 flex items-start gap-3`}>
                  <div className={`bg-${badge.color}-500 p-3 rounded-lg flex-shrink-0`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{badge.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{badge.description}</p>
                    <p className="text-xs text-gray-500">Earned {badge.earned}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Info</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900">{profile.phone}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Availability */}
          <Card className="bg-gradient-to-br from-green-50 to-blue-50">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Availability</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-gray-900">{profile.availability}</span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Status</p>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                  Available Now
                </span>
              </div>
            </div>
          </Card>

          {/* Languages */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Languages</h2>
            <div className="space-y-2">
              {profile.languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span className="text-gray-900">{lang}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="space-y-2">
              {profile.certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" fullWidth className="mt-4">Add Certificate</Button>
          </Card>

          {/* Share Profile */}
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Share Profile</h2>
            <p className="text-sm text-gray-600 mb-4">Share your volunteer profile with organizations</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerProfile;
