import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Button from '../../components/Button';

const VolunteerMessage = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageText, setMessageText] = useState('');
  const [showConversations, setShowConversations] = useState(true);

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

  const messages = {
    1: [
      { id: 1, sender: 'Red Cross Houston', content: 'Hi Sarah! We wanted to reach out about the flood relief mission.', time: '2:30 PM', isOwn: false },
      { id: 2, sender: 'You', content: 'Hello! Yes, I\'m interested. What do you need?', time: '2:32 PM', isOwn: true },
      { id: 3, sender: 'Red Cross Houston', content: 'We need volunteers for supply distribution tomorrow from 9 AM to 5 PM. Are you available?', time: '2:33 PM', isOwn: false },
      { id: 4, sender: 'You', content: 'Yes, I can make it! What should I bring?', time: '2:35 PM', isOwn: true },
      { id: 5, sender: 'Red Cross Houston', content: 'Just bring your volunteer ID and wear comfortable clothes. We\'ll provide everything else.', time: '2:37 PM', isOwn: false },
      { id: 6, sender: 'Red Cross Houston', content: 'Thank you for your assistance today!', time: '3:45 PM', isOwn: false },
    ],
    2: [
      { id: 1, sender: 'Feed the City', content: 'Your shift starts at 8 AM tomorrow', time: '7:45 AM', isOwn: false },
      { id: 2, sender: 'You', content: 'Got it, I\'ll be there on time!', time: '7:50 AM', isOwn: true },
    ],
    3: [
      { id: 1, sender: 'Health Relief Org', content: 'We need volunteers for the medical camp', time: '9:15 AM', isOwn: false },
    ],
  };

  const currentMessages = messages[selectedConversation] || [];
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
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Stay connected with NGOs and support teams.</p>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 min-h-0 overflow-hidden">
          <div className="flex h-full relative">
          {/* Conversations List */}
          <div className={`w-full md:w-80 border-r border-gray-200 flex flex-col ${showConversations ? 'block' : 'hidden md:block'}`}>
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
                  onClick={() => {
                    setSelectedConversation(conv.id);
                    setShowConversations(false);
                  }}
                  className={`p-4 cursor-pointer transition-colors border-b border-gray-100 ${
                    selectedConversation === conv.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0">
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
                        <span className="text-xs text-gray-500 flex-shrink-0">{conv.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <span className="ml-2 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
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
          <div className={`flex-1 flex flex-col ${showConversations ? 'hidden md:flex' : 'flex'}`}>
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Back button for mobile */}
                  <button
                    onClick={() => setShowConversations(true)}
                    className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="relative">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {currentConversation?.avatar}
                    </div>
                    {currentConversation?.online && (
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">{currentConversation?.name}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {currentConversation?.online ? '🟢 Active now' : '⚫ Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Call">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                  <button className="p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Video Call">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="More Options">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
              {currentMessages.map((message) => (
                <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md ${message.isOwn ? 'order-2' : 'order-1'}`}>
                    {!message.isOwn && (
                      <p className="text-xs text-gray-500 mb-1 px-1">{message.sender}</p>
                    )}
                    <div className={`rounded-lg p-3 ${
                      message.isOwn 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="px-6 py-4 border-t border-gray-200 bg-white">
              <div className="flex items-end gap-3">
                <button className="p-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0" title="Attach File">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                  placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
                  rows="1"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none max-h-32"
                />
                <Button variant="primary" onClick={handleSendMessage} className="flex-shrink-0" disabled={!messageText.trim()}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerMessage;
