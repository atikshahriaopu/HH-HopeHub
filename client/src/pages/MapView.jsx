import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Card from '../components/Card';
import Button from '../components/Button';

const MapView = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isDirectionsModalOpen, setIsDirectionsModalOpen] = useState(false);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [volunteerFormData, setVolunteerFormData] = useState({
    skills: [],
    availability: '',
    transportation: '',
    experience: '',
    notes: ''
  });
  const [interestFormData, setInterestFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: [],
    availability: '',
    notes: ''
  });

  // Mock location data
  const locations = [
    {
      id: 1,
      type: 'emergency',
      name: 'Flood Relief Zone',
      location: 'Houston, TX',
      status: 'active',
      volunteers: 23,
      urgency: 'high',
      coordinates: { x: 35, y: 45 },
      description: 'Emergency flooding in downtown Houston area. Immediate assistance needed for evacuation and emergency shelter setup.',
      skills: ['Search & Rescue', 'Medical Assistance', 'Transportation', 'Food Distribution'],
      contact: 'Relief Organization',
      lastUpdate: '2 hours ago',
      supplies: ['Water', 'Food Packages', 'Medical Kits', 'Blankets'],
      peopleAffected: 1240
    },
    {
      id: 2,
      type: 'distribution',
      name: 'Food Distribution Center',
      location: 'Miami, FL',
      status: 'active',
      volunteers: 15,
      urgency: 'medium',
      coordinates: { x: 65, y: 70 },
      description: 'Community food distribution center providing meals to families affected by recent storms.',
      skills: ['Food Distribution', 'Logistics', 'Communication'],
      contact: 'Community Relief Center',
      lastUpdate: '1 hour ago',
      supplies: ['Food Packages', 'Water', 'Hygiene Kits'],
      peopleAffected: 580
    },
    {
      id: 3,
      type: 'shelter',
      name: 'Emergency Shelter',
      location: 'Boston, MA',
      status: 'active',
      volunteers: 18,
      urgency: 'high',
      coordinates: { x: 75, y: 25 },
      description: 'Temporary emergency shelter providing accommodation and basic necessities for displaced families.',
      skills: ['Shelter Setup', 'Medical Assistance', 'Counseling', 'Food Distribution'],
      contact: 'Boston Emergency Services',
      lastUpdate: '3 hours ago',
      supplies: ['Blankets', 'Pillows', 'Food', 'Clothing', 'Medical Supplies'],
      peopleAffected: 320
    },
    {
      id: 4,
      type: 'medical',
      name: 'Medical Camp',
      location: 'Seattle, WA',
      status: 'planned',
      volunteers: 8,
      urgency: 'medium',
      coordinates: { x: 20, y: 30 },
      description: 'Free medical checkup and consultation camp for affected community members.',
      skills: ['Medical Assistance', 'First Aid', 'Counseling'],
      contact: 'Health Response Team',
      lastUpdate: '5 hours ago',
      supplies: ['Medical Equipment', 'Medicines', 'First Aid Kits'],
      peopleAffected: 150
    },
    {
      id: 5,
      type: 'volunteer',
      name: 'Your Location',
      location: 'New York, NY',
      status: 'current',
      coordinates: { x: 70, y: 35 }
    },
  ];

  const filters = [
    { id: 'all', name: 'All Locations', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { id: 'emergency', name: 'Emergencies', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
    { id: 'shelter', name: 'Shelters', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'medical', name: 'Medical', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { id: 'distribution', name: 'Distribution', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  ];

  const getMarkerColor = (type, status) => {
    if (type === 'volunteer') return 'bg-blue-600';
    if (status === 'planned') return 'bg-gray-400';
    switch (type) {
      case 'emergency': return 'bg-red-600';
      case 'medical': return 'bg-red-500';
      case 'shelter': return 'bg-green-600';
      case 'distribution': return 'bg-yellow-600';
      default: return 'bg-blue-600';
    }
  };

  const filteredLocations = activeFilter === 'all' 
    ? locations 
    : locations.filter(loc => loc.type === activeFilter || loc.type === 'volunteer');

  const handleViewDetails = (location) => {
    setSelectedLocation(location);
    setIsDetailsModalOpen(true);
    setSelectedMarker(null);
  };

  const handleVolunteerHere = () => {
    setIsVolunteerModalOpen(true);
  };

  const handleGetDirections = () => {
    setIsDirectionsModalOpen(true);
  };

  const handleRegisterInterest = () => {
    setIsInterestModalOpen(true);
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', volunteerFormData);
    setIsVolunteerModalOpen(false);
    setVolunteerFormData({
      skills: [],
      availability: '',
      transportation: '',
      experience: '',
      notes: ''
    });
    alert('Your volunteer application has been submitted successfully!');
  };

  const handleInterestSubmit = (e) => {
    e.preventDefault();
    console.log('Interest registered:', interestFormData);
    setIsInterestModalOpen(false);
    setInterestFormData({
      name: '',
      email: '',
      phone: '',
      skills: [],
      availability: '',
      notes: ''
    });
    alert('Your interest has been registered successfully!');
  };

  const addSkillToVolunteerForm = (skill) => {
    if (skill && !volunteerFormData.skills.includes(skill)) {
      setVolunteerFormData({
        ...volunteerFormData,
        skills: [...volunteerFormData.skills, skill]
      });
    }
  };

  const removeSkillFromVolunteerForm = (skillToRemove) => {
    setVolunteerFormData({
      ...volunteerFormData,
      skills: volunteerFormData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const addSkillToInterestForm = (skill) => {
    if (skill && !interestFormData.skills.includes(skill)) {
      setInterestFormData({
        ...interestFormData,
        skills: [...interestFormData.skills, skill]
      });
    }
  };

  const removeSkillFromInterestForm = (skillToRemove) => {
    setInterestFormData({
      ...interestFormData,
      skills: interestFormData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeNavbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Relief Map</h1>
          <p className="text-gray-600">View active missions and emergency locations near you</p>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={filter.icon} />
                </svg>
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Map Container - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Card className="relative h-[500px] lg:h-[600px] overflow-hidden" padding={false}>
              {/* Map Placeholder */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 z-0"
                onClick={() => setSelectedMarker(null)}
              >
                <div className="absolute inset-0 overflow-hidden z-0">
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Map Decorative Elements */}
                <div className="absolute inset-0 z-0">
                  {/* Roads */}
                  <div className="absolute top-1/4 left-0 right-0 h-2 bg-gray-300 opacity-30 transform -rotate-12"></div>
                  <div className="absolute top-2/3 left-0 right-0 h-2 bg-gray-300 opacity-30 transform rotate-6"></div>
                  <div className="absolute left-1/3 top-0 bottom-0 w-2 bg-gray-300 opacity-30 transform rotate-3"></div>
                  
                  {/* Areas */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-200 opacity-20 rounded-full"></div>
                  <div className="absolute top-2/3 right-1/4 w-40 h-40 bg-blue-200 opacity-20 rounded-full"></div>
                </div>

                {/* Location Markers */}
                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-full cursor-pointer transition-transform hover:scale-110 ${
                      selectedMarker === location.id ? 'z-[100]' : 'z-10'
                    }`}
                    style={{ 
                      left: `${location.coordinates.x}%`, 
                      top: `${location.coordinates.y}%` 
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMarker(location.id);
                    }}
                  >
                    {/* Marker Pin */}
                    <div className="relative">
                      {/* Pulse animation for active emergencies */}
                      {location.type === 'emergency' && location.status === 'active' && (
                        <div className="absolute inset-0 animate-ping">
                          <div className={`w-8 h-8 ${getMarkerColor(location.type, location.status)} rounded-full opacity-75`}></div>
                        </div>
                      )}
                      
                      <div className={`relative ${getMarkerColor(location.type, location.status)} text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white`}>
                        {location.type === 'volunteer' ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        ) : location.type === 'emergency' ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        )}
                      </div>
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent ${getMarkerColor(location.type, location.status).replace('bg-', 'border-t-')}`}></div>
                    </div>

                    {/* Tooltip on hover */}
                    {selectedMarker === location.id && location.type !== 'volunteer' && (
                      <>
                        {/* Backdrop */}
                        <div 
                          className="fixed inset-0 bg-black/20 z-[200] backdrop-blur-[2px]"
                          onClick={(e) => { e.stopPropagation(); setSelectedMarker(null); }}
                        />
                        {/* Popup */}
                        <div 
                          className="fixed w-80 sm:w-96 bg-white rounded-xl shadow-2xl p-5 z-[300] border border-gray-200"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                        <button 
                          onClick={(e) => { e.stopPropagation(); setSelectedMarker(null); }}
                          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        
                        <h3 className="font-bold text-gray-900 mb-2 pr-6 text-lg">{location.name}</h3>
                        
                        <div className="space-y-2 mb-4">
                          <p className="text-sm text-gray-600 flex items-center gap-2">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {location.location}
                          </p>
                          {location.volunteers && (
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                              </svg>
                              {location.volunteers} volunteers active
                            </p>
                          )}
                        </div>
                        
                        {location.urgency && (
                          <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full mb-4 ${
                            location.urgency === 'high' ? 'bg-red-100 text-red-800' :
                            location.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {location.urgency.toUpperCase()} PRIORITY
                          </span>
                        )}
                        
                        {location.type !== 'volunteer' && (
                          <Button 
                            size="sm" 
                            variant="primary" 
                            fullWidth 
                            className="mt-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewDetails(location);
                            }}
                          >
                            View Details
                          </Button>
                        )}
                      </div>
                      </>
                    )}
                  </div>
                ))}

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                  <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <button className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>

                {/* Map Integration Note */}
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs z-20">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">Map Integration Ready</h4>
                      <p className="text-xs text-gray-600">
                        Ready for Google Maps, Mapbox, or OpenStreetMap
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Locations List */}
          <div className="lg:col-span-1">
            <Card className="h-[500px] lg:h-[600px] flex flex-col" padding={false}>
              <div className="p-4 border-b border-gray-200 bg-white flex-shrink-0">
                <h2 className="font-bold text-gray-900 text-lg">Nearby Locations</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {filteredLocations.length - 1} active locations
                </p>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {filteredLocations
                  .filter(loc => loc.type !== 'volunteer')
                  .map((location) => (
                  <div
                    key={location.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                      selectedMarker === location.id
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 bg-white'
                    }`}
                  >
                    <div 
                      className="flex items-start gap-3"
                      onClick={() => setSelectedMarker(location.id)}
                    >
                      <div className={`${getMarkerColor(location.type, location.status)} text-white rounded-lg p-2.5 flex-shrink-0`}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          {location.type === 'emergency' ? (
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          ) : (
                            <circle cx="10" cy="10" r="8" />
                          )}
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1.5 truncate">
                          {location.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {location.location}
                        </p>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm text-gray-700 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            {location.volunteers}
                          </span>
                          <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                            location.status === 'active' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {location.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      fullWidth 
                      className="mt-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewDetails(location);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Legend */}
        <Card>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="font-semibold text-gray-900 text-lg">Map Legend</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-red-600 rounded-full shadow-sm"></div>
                <span className="text-sm text-gray-700 font-medium">Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-600 rounded-full shadow-sm"></div>
                <span className="text-sm text-gray-700 font-medium">Shelter</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-yellow-600 rounded-full shadow-sm"></div>
                <span className="text-sm text-gray-700 font-medium">Distribution</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-red-500 rounded-full shadow-sm"></div>
                <span className="text-sm text-gray-700 font-medium">Medical</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full shadow-sm"></div>
                <span className="text-sm text-gray-700 font-medium">Your Location</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Location Details Modal */}
      {isDetailsModalOpen && selectedLocation && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsDetailsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-4 sm:p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4 flex-1">
                <div className={`${getMarkerColor(selectedLocation.type, selectedLocation.status)} text-white rounded-lg p-3 flex-shrink-0`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    {selectedLocation.type === 'emergency' ? (
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    ) : (
                      <circle cx="10" cy="10" r="8" />
                    )}
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedLocation.name}</h2>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {selectedLocation.location}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedLocation.urgency === 'high' ? 'bg-red-100 text-red-800' :
                      selectedLocation.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedLocation.urgency.toUpperCase()} PRIORITY
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      selectedLocation.status === 'active' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {selectedLocation.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsDetailsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Location Content */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedLocation.description}</p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <svg className="w-6 h-6 text-blue-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <p className="text-2xl font-bold text-gray-900">{selectedLocation.volunteers}</p>
                  <p className="text-xs text-gray-600">Active Volunteers</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <svg className="w-6 h-6 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-2xl font-bold text-gray-900">{selectedLocation.peopleAffected}</p>
                  <p className="text-xs text-gray-600">People Affected</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <svg className="w-6 h-6 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <p className="text-2xl font-bold text-gray-900">{selectedLocation.supplies.length}</p>
                  <p className="text-xs text-gray-600">Supply Types</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <svg className="w-6 h-6 text-orange-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-bold text-gray-900">{selectedLocation.lastUpdate}</p>
                  <p className="text-xs text-gray-600">Last Update</p>
                </div>
              </div>

              {/* Required Skills */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedLocation.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Available Supplies */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Available Supplies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedLocation.supplies.map((supply, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-700">{supply}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Organization:</span>
                    <span>{selectedLocation.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">Address:</span>
                    <span>{selectedLocation.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                {selectedLocation.status === 'active' && (
                  <>
                    <Button variant="primary" fullWidth onClick={handleVolunteerHere}>
                      Volunteer Here
                    </Button>
                    <Button variant="outline" fullWidth onClick={handleGetDirections}>
                      Get Directions
                    </Button>
                  </>
                )}
                {selectedLocation.status === 'planned' && (
                  <>
                    <Button variant="outline" fullWidth onClick={handleRegisterInterest}>
                      Register Interest
                    </Button>
                    <Button variant="primary" fullWidth onClick={() => setIsDetailsModalOpen(false)}>
                      Close
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Volunteer Here Modal */}
      {isVolunteerModalOpen && selectedLocation && (
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
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Volunteer Application</h2>
                <p className="text-gray-600">Apply to volunteer at {selectedLocation.name}</p>
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
              {/* Required Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Skills</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedLocation.skills.map((skill, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => addSkillToVolunteerForm(skill)}
                      disabled={volunteerFormData.skills.includes(skill)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        volunteerFormData.skills.includes(skill)
                          ? 'bg-blue-600 text-white cursor-not-allowed'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {skill}
                      {volunteerFormData.skills.includes(skill) && (
                        <span className="ml-1">✓</span>
                      )}
                    </button>
                  ))}
                </div>
                {volunteerFormData.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {volunteerFormData.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2">
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkillFromVolunteerForm(skill)}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
                <select
                  required
                  value={volunteerFormData.availability}
                  onChange={(e) => setVolunteerFormData({...volunteerFormData, availability: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your availability</option>
                  <option value="immediate">Immediately</option>
                  <option value="within-24h">Within 24 hours</option>
                  <option value="within-week">Within a week</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Transportation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transportation *</label>
                <select
                  required
                  value={volunteerFormData.transportation}
                  onChange={(e) => setVolunteerFormData({...volunteerFormData, transportation: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select transportation option</option>
                  <option value="own-vehicle">I have my own vehicle</option>
                  <option value="public-transport">Using public transport</option>
                  <option value="need-transport">Need transportation assistance</option>
                  <option value="carpooling">Open to carpooling</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Experience</label>
                <select
                  value={volunteerFormData.experience}
                  onChange={(e) => setVolunteerFormData({...volunteerFormData, experience: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your experience level</option>
                  <option value="none">First time volunteer</option>
                  <option value="beginner">Some experience (1-2 missions)</option>
                  <option value="intermediate">Moderate experience (3-5 missions)</option>
                  <option value="experienced">Experienced (6+ missions)</option>
                  <option value="professional">Professional background</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  value={volunteerFormData.notes}
                  onChange={(e) => setVolunteerFormData({...volunteerFormData, notes: e.target.value})}
                  rows={4}
                  placeholder="Any additional information, special requirements, or questions..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button type="button" variant="outline" fullWidth onClick={() => setIsVolunteerModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" fullWidth>
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Get Directions Modal */}
      {isDirectionsModalOpen && selectedLocation && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsDirectionsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Get Directions</h2>
                <p className="text-sm text-gray-600">{selectedLocation.location}</p>
              </div>
              <button 
                onClick={() => setIsDirectionsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* Navigation Options */}
              <div className="space-y-2">
                <button className="flex items-center gap-3 p-3 w-full border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Google Maps</p>
                    <p className="text-xs text-gray-600">Open in Google Maps</p>
                  </div>
                </button>

                <button className="flex items-center gap-3 p-3 w-full border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Apple Maps</p>
                    <p className="text-xs text-gray-600">Open in Apple Maps</p>
                  </div>
                </button>

                <button className="flex items-center gap-3 p-3 w-full border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-left">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Waze</p>
                    <p className="text-xs text-gray-600">Open in Waze</p>
                  </div>
                </button>

                <button className="flex items-center gap-3 p-3 w-full border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all text-left">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Copy Address</p>
                    <p className="text-xs text-gray-600">Copy to clipboard</p>
                  </div>
                </button>
              </div>

              {/* Estimated Info */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-around text-center">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Distance</p>
                    <p className="text-sm font-bold text-gray-900">12.5 mi</p>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Drive Time</p>
                    <p className="text-sm font-bold text-gray-900">25 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Register Interest Modal */}
      {isInterestModalOpen && selectedLocation && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setIsInterestModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Register Your Interest</h2>
                <p className="text-gray-600">Get notified when {selectedLocation.name} becomes active</p>
              </div>
              <button 
                onClick={() => setIsInterestModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleInterestSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={interestFormData.name}
                  onChange={(e) => setInterestFormData({...interestFormData, name: e.target.value})}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={interestFormData.email}
                  onChange={(e) => setInterestFormData({...interestFormData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={interestFormData.phone}
                  onChange={(e) => setInterestFormData({...interestFormData, phone: e.target.value})}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Skills</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedLocation.skills.map((skill, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => addSkillToInterestForm(skill)}
                      disabled={interestFormData.skills.includes(skill)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        interestFormData.skills.includes(skill)
                          ? 'bg-blue-600 text-white cursor-not-allowed'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {skill}
                      {interestFormData.skills.includes(skill) && (
                        <span className="ml-1">✓</span>
                      )}
                    </button>
                  ))}
                </div>
                {interestFormData.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {interestFormData.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2">
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkillFromInterestForm(skill)}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Availability</label>
                <select
                  value={interestFormData.availability}
                  onChange={(e) => setInterestFormData({...interestFormData, availability: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                  <option value="specific">Specific dates only</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                <textarea
                  value={interestFormData.notes}
                  onChange={(e) => setInterestFormData({...interestFormData, notes: e.target.value})}
                  rows={4}
                  placeholder="Tell us more about your interest and any questions you have..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Notification Preferences */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 mb-1">Notification Preferences</p>
                    <p className="text-xs text-gray-600">We'll notify you via email and SMS when this location becomes active and ready for volunteers.</p>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button type="button" variant="outline" fullWidth onClick={() => setIsInterestModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" fullWidth>
                  Register Interest
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;