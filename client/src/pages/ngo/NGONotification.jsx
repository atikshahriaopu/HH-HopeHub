import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const NGONotification = () => {
  const [filter, setFilter] = useState('all');
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notifications = [
    {
      id: 1,
      type: 'volunteer',
      title: 'New Volunteer Application',
      message: 'Sarah Johnson applied to join your organization as a medical volunteer',
      time: '5 minutes ago',
      date: '2025-11-22',
      unread: true,
      icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
      color: 'blue'
    },
    {
      id: 2,
      type: 'mission',
      title: 'Mission Completed',
      message: 'Food Distribution - Miami has been successfully completed by your team',
      time: '30 minutes ago',
      date: '2025-11-22',
      unread: true,
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'green'
    },
    {
      id: 3,
      type: 'emergency',
      title: 'Emergency Alert Sent',
      message: 'Your emergency alert was sent to 127 volunteers in the Houston area',
      time: '1 hour ago',
      date: '2025-11-22',
      unread: true,
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      color: 'red'
    },
    {
      id: 4,
      type: 'resource',
      title: 'Low Stock Alert',
      message: 'Medical Kits inventory is running low. Only 95 units remaining',
      time: '2 hours ago',
      date: '2025-11-22',
      unread: false,
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      color: 'orange'
    },
    {
      id: 5,
      type: 'message',
      title: 'New Message',
      message: 'Mike Chen sent you a message about supply delivery schedule',
      time: '3 hours ago',
      date: '2025-11-22',
      unread: false,
      icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
      color: 'green'
    },
    {
      id: 6,
      type: 'volunteer',
      title: 'Volunteer Milestone',
      message: 'Emma Davis has completed 25 missions and earned a new badge',
      time: '5 hours ago',
      date: '2025-11-22',
      unread: false,
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      color: 'yellow'
    },
    {
      id: 7,
      type: 'mission',
      title: 'Mission Update Required',
      message: 'Flood Relief - Houston mission needs progress update and status report',
      time: '1 day ago',
      date: '2025-11-21',
      unread: false,
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      color: 'purple'
    },
    {
      id: 8,
      type: 'system',
      title: 'Monthly Report Ready',
      message: 'Your November activity report is ready for review and download',
      time: '2 days ago',
      date: '2025-11-20',
      unread: false,
      icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      color: 'blue'
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      red: 'bg-red-100 text-red-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      orange: 'bg-orange-100 text-orange-600',
      gray: 'bg-gray-100 text-gray-600'
    };
    return colors[color] || colors.gray;
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return notif.unread;
    return notif.type === filter;
  });

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAllRead = () => {
    console.log('Marking all as read');
  };

  const handleClearAll = () => {
    console.log('Clearing all notifications');
  };

  const handleNotificationClick = (notif) => {
    setSelectedNotification(notif);
    console.log('Notification clicked:', notif);
  };

  return (
    <DashboardLayout userType="ngo" userName="Relief Organization">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
        <p className="text-gray-600">Stay updated with your organization's activities and alerts.</p>
      </div>

      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Notifications</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{notifications.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>
          </Card>

          <Card className="border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Unread</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{unreadCount}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </Card>

          <Card className="border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {notifications.filter(n => new Date(n.date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </Card>
        </div>

        {/* Filter and Actions */}
        <Card>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
              >
                All
              </Button>
              <Button
                variant={filter === 'unread' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter('unread')}
              >
                Unread ({unreadCount})
              </Button>
              <Button
                variant={filter === 'volunteer' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter('volunteer')}
              >
                Volunteers
              </Button>
              <Button
                variant={filter === 'mission' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter('mission')}
              >
                Missions
              </Button>
              <Button
                variant={filter === 'emergency' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter('emergency')}
              >
                Emergencies
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleMarkAllRead}>
                Mark All Read
              </Button>
              <Button variant="outline" size="sm" onClick={handleClearAll}>
                Clear All
              </Button>
            </div>
          </div>
        </Card>

        {/* Notifications List */}
        <Card>
          <div className="divide-y divide-gray-200">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                    notif.unread ? 'bg-green-50' : ''
                  }`}
                  onClick={() => handleNotificationClick(notif)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(notif.color)}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={notif.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-sm font-semibold ${notif.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                          {notif.title}
                        </h3>
                        {notif.unread && (
                          <span className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{notif.message}</p>
                      <p className="text-xs text-gray-500">{notif.time}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <p className="text-gray-500 text-sm">No notifications found</p>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Notification Details Modal */}
      {selectedNotification && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedNotification(null)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4 flex-1">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(selectedNotification.color)}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={selectedNotification.icon} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedNotification.title}</h2>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedNotification.time}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedNotification.type === 'emergency' ? 'bg-red-100 text-red-800' :
                      selectedNotification.type === 'volunteer' ? 'bg-blue-100 text-blue-800' :
                      selectedNotification.type === 'mission' ? 'bg-green-100 text-green-800' :
                      selectedNotification.type === 'resource' ? 'bg-orange-100 text-orange-800' :
                      selectedNotification.type === 'message' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {selectedNotification.type.charAt(0).toUpperCase() + selectedNotification.type.slice(1)}
                    </span>
                    {selectedNotification.unread && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        New
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedNotification(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Notification Content */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800 leading-relaxed">{selectedNotification.message}</p>
              </div>

              {/* Additional Details Based on Type */}
              {selectedNotification.type === 'volunteer' && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Volunteer Details</h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        SJ
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Sarah Johnson</p>
                        <p className="text-sm text-gray-600">Medical Volunteer</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 mb-1">Experience</p>
                        <p className="font-medium text-gray-900">3 years</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Skills</p>
                        <p className="font-medium text-gray-900">First Aid, CPR</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Availability</p>
                        <p className="font-medium text-gray-900">Weekends</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Location</p>
                        <p className="font-medium text-gray-900">Houston, TX</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedNotification.type === 'mission' && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Mission Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Mission Name</span>
                      <span className="font-medium text-gray-900">Food Distribution - Miami</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Volunteers Deployed</span>
                      <span className="font-medium text-gray-900">12 volunteers</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium text-gray-900">6 hours</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-600">Status</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {selectedNotification.type === 'emergency' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-red-900 mb-1">Emergency Alert Broadcast</p>
                      <p className="text-sm text-red-800 mb-3">Your emergency alert has been successfully sent to all available volunteers in the affected area.</p>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div className="bg-white rounded p-2">
                          <p className="text-gray-600 text-xs">Recipients</p>
                          <p className="font-semibold text-gray-900">127</p>
                        </div>
                        <div className="bg-white rounded p-2">
                          <p className="text-gray-600 text-xs">Responses</p>
                          <p className="font-semibold text-gray-900">43</p>
                        </div>
                        <div className="bg-white rounded p-2">
                          <p className="text-gray-600 text-xs">Available</p>
                          <p className="font-semibold text-gray-900">28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedNotification.type === 'resource' && (
                <div className="space-y-4">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div className="flex-1">
                        <p className="font-semibold text-orange-900 mb-1">Inventory Alert</p>
                        <p className="text-sm text-orange-800 mb-3">Consider restocking soon to avoid supply shortages.</p>
                        <div className="bg-white rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">Current Stock</span>
                            <span className="font-semibold text-gray-900">95 units</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{width: '19%'}}></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">19% remaining</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedNotification.type === 'message' && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Message Details</h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        MC
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Mike Chen</p>
                        <p className="text-sm text-gray-600">Volunteer Coordinator</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">I need to discuss the supply delivery schedule for next week's mission. When would be a good time to call?</p>
                  </div>
                </div>
              )}

              {selectedNotification.type === 'system' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="flex-1">
                      <p className="font-semibold text-blue-900 mb-1">Monthly Report Available</p>
                      <p className="text-sm text-blue-800 mb-3">Your comprehensive November activity report is ready for review.</p>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-white rounded p-2">
                          <p className="text-gray-600 text-xs">Total Missions</p>
                          <p className="font-semibold text-gray-900">18</p>
                        </div>
                        <div className="bg-white rounded p-2">
                          <p className="text-gray-600 text-xs">Volunteer Hours</p>
                          <p className="font-semibold text-gray-900">342</p>
                        </div>
                        <div className="bg-white rounded p-2">
                          <p className="text-gray-600 text-xs">Resources Used</p>
                          <p className="font-semibold text-gray-900">1,245</p>
                        </div>
                        <div className="bg-white rounded p-2">
                          <p className="text-gray-600 text-xs">People Helped</p>
                          <p className="font-semibold text-gray-900">2,890</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                {selectedNotification.type === 'volunteer' && (
                  <>
                    <Button variant="primary" fullWidth>
                      View Application
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => setSelectedNotification(null)}>
                      Dismiss
                    </Button>
                  </>
                )}
                {selectedNotification.type === 'mission' && (
                  <>
                    <Button variant="primary" fullWidth>
                      View Mission Report
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => setSelectedNotification(null)}>
                      Close
                    </Button>
                  </>
                )}
                {selectedNotification.type === 'emergency' && (
                  <>
                    <Button variant="primary" fullWidth>
                      View Responses
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => setSelectedNotification(null)}>
                      Close
                    </Button>
                  </>
                )}
                {selectedNotification.type === 'resource' && (
                  <>
                    <Button variant="primary" fullWidth>
                      Reorder Now
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => setSelectedNotification(null)}>
                      Remind Later
                    </Button>
                  </>
                )}
                {selectedNotification.type === 'message' && (
                  <>
                    <Button variant="primary" fullWidth>
                      Reply
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => setSelectedNotification(null)}>
                      Close
                    </Button>
                  </>
                )}
                {selectedNotification.type === 'system' && (
                  <>
                    <Button variant="primary" fullWidth>
                      Download Report
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => setSelectedNotification(null)}>
                      Close
                    </Button>
                  </>
                )}
              </div>

              {/* Mark as Read */}
              {selectedNotification.unread && (
                <button 
                  className="w-full text-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => console.log('Mark as read')}
                >
                  Mark as read
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default NGONotification;
