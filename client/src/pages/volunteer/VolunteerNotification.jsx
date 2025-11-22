import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const VolunteerNotification = () => {
  const [filter, setFilter] = useState('all');
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notifications = [
    {
      id: 1,
      type: 'opportunity',
      title: 'New Volunteer Opportunity',
      message: 'Food Bank Houston needs volunteers for weekend distribution',
      time: '2 minutes ago',
      date: '2025-11-22',
      unread: true,
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      color: 'blue'
    },
    {
      id: 2,
      type: 'emergency',
      title: 'Emergency Alert',
      message: 'Flood emergency declared in downtown area. Immediate assistance needed.',
      time: '15 minutes ago',
      date: '2025-11-22',
      unread: true,
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      color: 'red'
    },
    {
      id: 3,
      type: 'message',
      title: 'New Message',
      message: 'Red Cross Houston sent you a message about tomorrow\'s mission',
      time: '1 hour ago',
      date: '2025-11-22',
      unread: true,
      icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
      color: 'green'
    },
    {
      id: 4,
      type: 'mission',
      title: 'Mission Update',
      message: 'Your mission "Supply Distribution" has been rescheduled to 10 AM',
      time: '2 hours ago',
      date: '2025-11-22',
      unread: false,
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      color: 'purple'
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Achievement Unlocked',
      message: 'You\'ve completed 10 missions! Keep up the great work.',
      time: '3 hours ago',
      date: '2025-11-22',
      unread: false,
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      color: 'yellow'
    },
    {
      id: 6,
      type: 'opportunity',
      title: 'Opportunity Reminder',
      message: 'Medical Relief Camp opportunity closes in 24 hours',
      time: '5 hours ago',
      date: '2025-11-21',
      unread: false,
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      color: 'blue'
    },
    {
      id: 7,
      type: 'message',
      title: 'New Message',
      message: 'Feed the City thanked you for your contribution',
      time: '1 day ago',
      date: '2025-11-21',
      unread: false,
      icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
      color: 'green'
    },
    {
      id: 8,
      type: 'system',
      title: 'Profile View',
      message: 'Health Relief Organization viewed your volunteer profile',
      time: '2 days ago',
      date: '2025-11-20',
      unread: false,
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      color: 'gray'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      red: 'bg-red-100 text-red-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      yellow: 'bg-yellow-100 text-yellow-600',
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
    <DashboardLayout userType="volunteer" userName="Sarah Johnson">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
        <p className="text-gray-600">Stay updated with your volunteer activities and opportunities.</p>
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
                variant={filter === 'opportunity' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter('opportunity')}
              >
                Opportunities
              </Button>
              <Button
                variant={filter === 'emergency' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter('emergency')}
              >
                Emergencies
              </Button>
              <Button
                variant={filter === 'message' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilter('message')}
              >
                Messages
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
                    notif.unread ? 'bg-blue-50' : ''
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
                          <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full"></span>
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
                      selectedNotification.type === 'opportunity' ? 'bg-blue-100 text-blue-800' :
                      selectedNotification.type === 'message' ? 'bg-green-100 text-green-800' :
                      selectedNotification.type === 'mission' ? 'bg-purple-100 text-purple-800' :
                      selectedNotification.type === 'achievement' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {selectedNotification.type.charAt(0).toUpperCase() + selectedNotification.type.slice(1)}
                    </span>
                    {selectedNotification.unread && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
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
              {selectedNotification.type === 'opportunity' && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Opportunity Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">Location</p>
                      <p className="font-medium text-gray-900">Houston, TX</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Duration</p>
                      <p className="font-medium text-gray-900">4-6 hours</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Volunteers Needed</p>
                      <p className="font-medium text-gray-900">15 people</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Skills Required</p>
                      <p className="font-medium text-gray-900">Physical Labor</p>
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
                      <p className="font-semibold text-red-900 mb-1">Emergency Response Required</p>
                      <p className="text-sm text-red-800">This is a high-priority alert. Immediate action may be needed. Please respond as soon as possible if you are available.</p>
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
                        RC
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Red Cross Houston</p>
                        <p className="text-sm text-gray-600">NGO Organization</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">Thank you for your interest in our mission. We're looking forward to having you on board!</p>
                  </div>
                </div>
              )}

              {selectedNotification.type === 'mission' && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Mission Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Mission Name</span>
                      <span className="font-medium text-gray-900">Supply Distribution</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">New Time</span>
                      <span className="font-medium text-gray-900">10:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Date</span>
                      <span className="font-medium text-gray-900">Nov 23, 2025</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-600">Status</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        Rescheduled
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {selectedNotification.type === 'achievement' && (
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Congratulations!</h3>
                  <p className="text-gray-700 mb-4">You've reached a new milestone in your volunteer journey.</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>+50 Impact Points</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                {selectedNotification.type === 'opportunity' && (
                  <>
                    <Button variant="primary" fullWidth>
                      View Opportunity
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => setSelectedNotification(null)}>
                      Dismiss
                    </Button>
                  </>
                )}
                {selectedNotification.type === 'emergency' && (
                  <>
                    <Button variant="primary" fullWidth>
                      Respond Now
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => setSelectedNotification(null)}>
                      Not Available
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
                {selectedNotification.type === 'mission' && (
                  <>
                    <Button variant="primary" fullWidth>
                      View Mission
                    </Button>
                    <Button variant="outline" fullWidth onClick={() => setSelectedNotification(null)}>
                      Acknowledge
                    </Button>
                  </>
                )}
                {selectedNotification.type === 'achievement' && (
                  <Button variant="primary" fullWidth onClick={() => setSelectedNotification(null)}>
                    Continue
                  </Button>
                )}
                {selectedNotification.type === 'system' && (
                  <Button variant="primary" fullWidth onClick={() => setSelectedNotification(null)}>
                    Close
                  </Button>
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

export default VolunteerNotification;
