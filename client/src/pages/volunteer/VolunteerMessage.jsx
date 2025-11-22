import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const VolunteerMessage = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Red Cross Houston',
      avatar: 'RC',
      lastMessage: 'Thank you for your assistance today!',
      time: '10 min ago',
      unread: 2,
      type: 'ngo',
      online: true
    },
    {
      id: 2,
      name: 'Feed the City',
      avatar: 'FC',
      lastMessage: 'Your shift starts at 8 AM tomorrow',
      time: '1 hour ago',
      unread: 0,
      type: 'ngo',
      online: false
    },
    {
      id: 3,
      name: 'Health Relief Org',
      avatar: 'HR',
      lastMessage: 'We need volunteers for the medical camp',
      time: '3 hours ago',
      unread: 1,
      type: 'ngo',
      online: true
    },
    {
      id: 4,
      name: 'Relief Supply Co',
      avatar: 'RS',
      lastMessage: 'Great job organizing the warehouse!',
      time: '1 day ago',
      unread: 0,
      type: 'ngo',
      online: false
    },
    {
      id: 5,
      name: 'HopeHub Support',
      avatar: 'HS',
      lastMessage: 'How can we help you today?',
      time: '2 days ago',
      unread: 0,
      type: 'support',
      online: true
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'Red Cross Houston',
      text: 'Hi Sarah! We wanted to reach out about the flood relief mission.',
      time: '2:30 PM',
      isSender: false
    },
    {
      id: 2,
      sender: 'You',
      text: 'Hello! Yes, I\'m interested. What do you need?',
      time: '2:32 PM',
      isSender: true
    },
    {
      id: 3,
      sender: 'Red Cross Houston',
      text: 'We need volunteers for supply distribution tomorrow from 9 AM to 5 PM. Are you available?',
      time: '2:33 PM',
      isSender: false
    },
    {
      id: 4,
      sender: 'You',
      text: 'Yes, I can make it! What should I bring?',
      time: '2:35 PM',
      isSender: true
    },
    {
      id: 5,
      sender: 'Red Cross Houston',
      text: 'Just bring your volunteer ID and wear comfortable clothes. We\'ll provide everything else.',
      time: '2:37 PM',
      isSender: false
    },
    {
      id: 6,
      sender: 'Red Cross Houston',
      text: 'Thank you for your assistance today!',
      time: '3:45 PM',
      isSender: false
    },
  ];

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      // Handle message sending logic here
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  return (
    <DashboardLayout userType="volunteer" userName="Sarah Johnson">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
        <p className="text-gray-600">Stay connected with NGOs and support teams.</p>
      </div>

      <Card className="h-[calc(100vh-250px)] overflow-hidden">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-80 border-r border-gray-200 flex flex-col">
            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv.id)}
                  className={`p-4 border-b border-gray-200 cursor-pointer transition-colors ${
                    selectedConversation === conv.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {conv.avatar}
                      </div>
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">{conv.name}</h3>
                        <span className="text-xs text-gray-500">{conv.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {currentConversation?.avatar}
                    </div>
                    {currentConversation?.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{currentConversation?.name}</h3>
                    <p className="text-xs text-gray-500">
                      {currentConversation?.online ? 'Active now' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isSender ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-md ${msg.isSender ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`rounded-lg px-4 py-2 ${
                          msg.isSender
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-900 border border-gray-200'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                      <p className={`text-xs text-gray-500 mt-1 ${msg.isSender ? 'text-right' : 'text-left'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <Button type="submit" variant="primary" size="md" disabled={!messageText.trim()}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default VolunteerMessage;
