import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Opportunities = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [joinData, setJoinData] = useState({
    availability: '',
    experience: '',
    notes: '',
  });

  const opportunities = [
    {
      id: 1,
      title: 'Flood Relief Support',
      ngo: 'Red Cross Houston',
      location: 'Houston, TX',
      type: 'Emergency Response',
      urgency: 'high',
      volunteers: '23/50',
      date: 'Nov 24, 2025',
      description: 'Help distribute supplies and provide assistance to flood-affected families.',
      skills: ['Physical Labor', 'First Aid', 'Communication'],
      duration: '4-6 hours',
      commitment: 'One-time'
    },
    {
      id: 2,
      title: 'Food Distribution Drive',
      ngo: 'Food Bank Network',
      location: 'Miami, FL',
      type: 'Community Service',
      urgency: 'medium',
      volunteers: '15/30',
      date: 'Nov 26, 2025',
      description: 'Assist in organizing and distributing food packages to local communities.',
      skills: ['Logistics', 'Organization', 'Transportation'],
      duration: '3-4 hours',
      commitment: 'Weekly'
    },
    {
      id: 3,
      title: 'Medical Camp Setup',
      ngo: 'Health Relief Org',
      location: 'Boston, MA',
      type: 'Healthcare',
      urgency: 'high',
      volunteers: '18/25',
      date: 'Nov 25, 2025',
      description: 'Set up temporary medical facilities and assist healthcare professionals.',
      skills: ['Medical', 'Setup', 'Patient Care'],
      duration: '6-8 hours',
      commitment: 'One-time'
    },
    {
      id: 4,
      title: 'Shelter Construction',
      ngo: 'Habitat for Hope',
      location: 'Seattle, WA',
      type: 'Construction',
      urgency: 'low',
      volunteers: '12/40',
      date: 'Nov 28, 2025',
      description: 'Help build temporary shelters for displaced families.',
      skills: ['Construction', 'Engineering', 'Physical Labor'],
      duration: '8-10 hours',
      commitment: 'Multi-day'
    },
    {
      id: 5,
      title: 'Education Support Program',
      ngo: 'Learn Together Foundation',
      location: 'Chicago, IL',
      type: 'Education',
      urgency: 'medium',
      volunteers: '8/20',
      date: 'Nov 27, 2025',
      description: 'Tutor children from underprivileged communities in basic subjects.',
      skills: ['Teaching', 'Communication', 'Patience'],
      duration: '2-3 hours',
      commitment: 'Weekly'
    },
    {
      id: 6,
      title: 'Disaster Cleanup Crew',
      ngo: 'Community Restore',
      location: 'New Orleans, LA',
      type: 'Emergency Response',
      urgency: 'high',
      volunteers: '30/60',
      date: 'Nov 23, 2025',
      description: 'Help clean up and restore areas affected by recent storms.',
      skills: ['Physical Labor', 'Team Work', 'Equipment Operation'],
      duration: '6-8 hours',
      commitment: 'Multi-day'
    },
  ];

  const handleJoinMission = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setJoinData({
      availability: '',
      experience: '',
      notes: '',
    });
    setIsJoinModalOpen(true);
  };

  const handleLearnMore = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsLearnMoreOpen(true);
  };

  const handleBookmark = (id) => {
    setBookmarkedIds(prev => 
      prev.includes(id) 
        ? prev.filter(bookmarkId => bookmarkId !== id)
        : [...prev, id]
    );
  };

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    console.log('Joining mission:', selectedOpportunity.id, joinData);
    setIsJoinModalOpen(false);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-blue-500 bg-blue-50';
      default: return 'border-gray-300 bg-white';
    }
  };

  const getUrgencyBadge = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOpportunities = opportunities.filter(opp => {
    if (selectedType !== 'all' && opp.type !== selectedType) return false;
    if (selectedLocation !== 'all' && opp.location !== selectedLocation) return false;
    if (selectedUrgency !== 'all' && opp.urgency !== selectedUrgency) return false;
    return true;
  });

  return (
    <DashboardLayout userType="volunteer" userName="Sarah Johnson">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Volunteer Opportunities</h1>
        <p className="text-gray-600">Find meaningful ways to make a difference in your community.</p>
      </div>

      {/* Filters Section */}
      <Card className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="Emergency Response">Emergency Response</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Community Service">Community Service</option>
              <option value="Construction">Construction</option>
              <option value="Education">Education</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Locations</option>
              <option value="Houston, TX">Houston, TX</option>
              <option value="Miami, FL">Miami, FL</option>
              <option value="Boston, MA">Boston, MA</option>
              <option value="Seattle, WA">Seattle, WA</option>
              <option value="Chicago, IL">Chicago, IL</option>
              <option value="New Orleans, LA">New Orleans, LA</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
            <select 
              value={selectedUrgency}
              onChange={(e) => setSelectedUrgency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedType('all');
                setSelectedLocation('all');
                setSelectedUrgency('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-gray-900">{filteredOpportunities.length}</span> opportunities
        </p>
      </div>

      {/* Opportunities List */}
      <div className="space-y-6">
        {filteredOpportunities.map((opp) => (
          <Card key={opp.id} className={`border-l-4 ${getUrgencyColor(opp.urgency)}`} hover>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{opp.title}</h3>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getUrgencyBadge(opp.urgency)}`}>
                    {opp.urgency} priority
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{opp.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{opp.ngo}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{opp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{opp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>{opp.volunteers} joined</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Duration: {opp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Commitment: {opp.commitment}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {opp.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="primary" size="md" className="flex-1" onClick={() => handleJoinMission(opp)}>Join Mission</Button>
              <Button variant="outline" size="md" onClick={() => handleLearnMore(opp)}>Learn More</Button>
              <Button variant="ghost" size="md" onClick={() => handleBookmark(opp.id)}>
                <svg className="w-5 h-5" fill={bookmarkedIds.includes(opp.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <Card className="text-center py-12">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No opportunities found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
          <Button 
            variant="primary" 
            onClick={() => {
              setSelectedType('all');
              setSelectedLocation('all');
              setSelectedUrgency('all');
            }}
          >
            Clear All Filters
          </Button>
        </Card>
      )}

      {/* Join Mission Modal */}
      {isJoinModalOpen && selectedOpportunity && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsJoinModalOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Join Mission</h2>
                <button
                  onClick={() => setIsJoinModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className={`border-l-4 ${getUrgencyColor(selectedOpportunity.urgency)} p-4 rounded-lg mb-6`}>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{selectedOpportunity.title}</h3>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getUrgencyBadge(selectedOpportunity.urgency)}`}>
                    {selectedOpportunity.urgency} priority
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {selectedOpportunity.ngo}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {selectedOpportunity.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {selectedOpportunity.date}
                  </span>
                </div>
              </div>

              <form onSubmit={handleJoinSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Availability *
                    </label>
                    <select
                      value={joinData.availability}
                      onChange={(e) => setJoinData(prev => ({ ...prev, availability: e.target.value }))}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select your availability...</option>
                      <option value="Full Day">Full Day</option>
                      <option value="Morning Only">Morning Only</option>
                      <option value="Afternoon Only">Afternoon Only</option>
                      <option value="Evening Only">Evening Only</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Relevant Experience
                    </label>
                    <select
                      value={joinData.experience}
                      onChange={(e) => setJoinData(prev => ({ ...prev, experience: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select experience level...</option>
                      <option value="First Time">First Time Volunteer</option>
                      <option value="Some Experience">Some Experience</option>
                      <option value="Experienced">Experienced Volunteer</option>
                      <option value="Professional">Professional Background</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      value={joinData.notes}
                      onChange={(e) => setJoinData(prev => ({ ...prev, notes: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Tell us about any relevant skills, certifications, or questions you have..."
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedOpportunity.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Time Commitment</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOpportunity.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Frequency</span>
                      <span className="text-sm font-medium text-gray-900">{selectedOpportunity.commitment}</span>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-green-900">Application Confirmation</p>
                        <p className="text-xs text-green-700 mt-1">You'll receive a confirmation email with mission details and next steps after submitting.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    fullWidth
                    onClick={() => setIsJoinModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" fullWidth>
                    Confirm & Join
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {isLearnMoreOpen && selectedOpportunity && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsLearnMoreOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Mission Details</h2>
                <button
                  onClick={() => setIsLearnMoreOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedOpportunity.title}</h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getUrgencyBadge(selectedOpportunity.urgency)}`}>
                      {selectedOpportunity.urgency} priority
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg">{selectedOpportunity.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="font-medium">Organization</span>
                    </div>
                    <p className="text-gray-900">{selectedOpportunity.ngo}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <span className="font-medium">Type</span>
                    </div>
                    <p className="text-gray-900">{selectedOpportunity.type}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">Location</span>
                    </div>
                    <p className="text-gray-900">{selectedOpportunity.location}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Date</span>
                    </div>
                    <p className="text-gray-900">{selectedOpportunity.date}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Duration</span>
                    </div>
                    <p className="text-gray-900">{selectedOpportunity.duration}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Commitment</span>
                    </div>
                    <p className="text-gray-900">{selectedOpportunity.commitment}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedOpportunity.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="font-medium text-gray-900">Volunteers</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">{selectedOpportunity.volunteers}</span>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-yellow-900">What to Expect</p>
                      <p className="text-xs text-yellow-700 mt-1">This is a {selectedOpportunity.commitment.toLowerCase()} opportunity requiring {selectedOpportunity.duration} of your time. You'll work alongside experienced volunteers and NGO staff.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  fullWidth
                  onClick={() => setIsLearnMoreOpen(false)}
                >
                  Close
                </Button>
                <Button
                  type="button"
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    setIsLearnMoreOpen(false);
                    handleJoinMission(selectedOpportunity);
                  }}
                >
                  Join This Mission
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Opportunities;
