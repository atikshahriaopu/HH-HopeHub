import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock chat data
  const conversations = [
    {
      id: 1,
      name: 'Red Cross Houston',
      type: 'ngo',
      lastMessage: 'Thank you for your help today!',
      time: '2m ago',
      unread: 2,
      online: true,
      avatar: 'RC'
    },
    {
      id: 2,
      name: 'Food Bank Network',
      type: 'ngo',
      lastMessage: 'Can you join us tomorrow at 9 AM?',
      time: '1h ago',
      unread: 1,
      online: true,
      avatar: 'FB'
    },
    {
      id: 3,
      name: 'Emergency Response Team',
      type: 'group',
      lastMessage: 'Meeting at the community center',
      time: '3h ago',
      unread: 0,
      online: false,
      avatar: 'ER',
      members: 15
    },
    {
      id: 4,
      name: 'Mike Chen',
      type: 'volunteer',
      lastMessage: 'See you at the distribution center',
      time: '5h ago',
      unread: 0,
      online: false,
      avatar: 'MC'
    },
    {
      id: 5,
      name: 'Health Relief Org',
      type: 'ngo',
      lastMessage: 'Your certification has been verified',
      time: '1d ago',
      unread: 0,
      online: false,
      avatar: 'HR'
    },
  ];

  const messages = selectedChat ? [
    { id: 1, sender: 'them', text: 'Hi! We need volunteers for tomorrow\'s food distribution.', time: '10:30 AM', avatar: conversations.find(c => c.id === selectedChat).avatar },
    { id: 2, sender: 'me', text: 'Sure! What time should I be there?', time: '10:32 AM' },
    { id: 3, sender: 'them', text: 'We start at 9:00 AM. The location is at the downtown community center.', time: '10:33 AM', avatar: conversations.find(c => c.id === selectedChat).avatar },
    { id: 4, sender: 'me', text: 'Perfect! I\'ll be there. Do I need to bring anything specific?', time: '10:35 AM' },
    { id: 5, sender: 'them', text: 'Just wear comfortable clothes and bring a water bottle. We\'ll provide everything else.', time: '10:36 AM', avatar: conversations.find(c => c.id === selectedChat).avatar },
    { id: 6, sender: 'me', text: 'Sounds good! Thank you for the information.', time: '10:37 AM' },
    { id: 7, sender: 'them', text: 'Thank you for your help today! We really appreciate volunteers like you. 🙏', time: '2m ago', avatar: conversations.find(c => c.id === selectedChat).avatar },
  ] : [];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Simulate sending message
      console.log('Sending:', messageInput);
      setMessageInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getAvatarColor = (type) => {
    switch (type) {
      case 'ngo': return 'from-green-600 to-green-700';
      case 'volunteer': return 'from-blue-600 to-blue-700';
      case 'group': return 'from-purple-600 to-purple-700';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout userType="volunteer" userName="Sarah Johnson">
      <div className="flex flex-col h-[calc(100vh-180px)]">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Connect with NGOs and fellow volunteers</p>
        </div>

        <div className="flex-1 flex gap-4 overflow-hidden">
          {/* Conversations List */}
          <Card className="w-80 flex flex-col" padding={false}>
            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                    selectedChat === conv.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                  }`}
                >
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getAvatarColor(conv.type)} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                      {conv.avatar}
                    </div>
                    {conv.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div className="flex-1 text-left overflow-hidden">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">{conv.name}</h3>
                      <span className="text-xs text-gray-500 flex-shrink-0">{conv.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <span className="ml-2 bg-blue-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                    {conv.type === 'group' && (
                      <p className="text-xs text-gray-500 mt-1">{conv.members} members</p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* New Chat Button */}
            <div className="p-4 border-t border-gray-200">
              <Button variant="primary" fullWidth size="md">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Conversation
              </Button>
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="flex-1 flex flex-col" padding={false}>
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className={`w-10 h-10 bg-gradient-to-r ${getAvatarColor(conversations.find(c => c.id === selectedChat).type)} rounded-full flex items-center justify-center text-white font-semibold`}>
                        {conversations.find(c => c.id === selectedChat).avatar}
                      </div>
                      {conversations.find(c => c.id === selectedChat).online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                      )}
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900">
                        {conversations.find(c => c.id === selectedChat).name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {conversations.find(c => c.id === selectedChat).online ? 'Active now' : 'Offline'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex gap-2 max-w-[70%] ${msg.sender === 'me' ? 'flex-row-reverse' : ''}`}>
                        {msg.sender === 'them' && (
                          <div className={`w-8 h-8 bg-gradient-to-r ${getAvatarColor(conversations.find(c => c.id === selectedChat).type)} rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0`}>
                            {msg.avatar}
                          </div>
                        )}
                        <div>
                          <div className={`px-4 py-2 rounded-2xl ${
                            msg.sender === 'me'
                              ? 'bg-blue-600 text-white rounded-br-none'
                              : 'bg-white text-gray-900 rounded-bl-none shadow-sm'
                          }`}>
                            <p className="text-sm">{msg.text}</p>
                          </div>
                          <p className={`text-xs text-gray-500 mt-1 ${msg.sender === 'me' ? 'text-right' : ''}`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-end gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                    </button>
                    <textarea
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      rows="1"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <Button
                      variant="primary"
                      onClick={handleSendMessage}
                      disabled={!messageInput.trim()}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              /* No Chat Selected */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <div className="bg-blue-100 p-6 rounded-full mb-4">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Select a conversation</h3>
                <p className="text-gray-600 max-w-sm">
                  Choose from your existing conversations or start a new one to connect with NGOs and fellow volunteers
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
