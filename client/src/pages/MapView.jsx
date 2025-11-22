import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Card from '../components/Card';
import Button from '../components/Button';

const MapView = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMarker, setSelectedMarker] = useState(null);

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
      coordinates: { x: 35, y: 45 }
    },
    {
      id: 2,
      type: 'distribution',
      name: 'Food Distribution Center',
      location: 'Miami, FL',
      status: 'active',
      volunteers: 15,
      urgency: 'medium',
      coordinates: { x: 65, y: 70 }
    },
    {
      id: 3,
      type: 'shelter',
      name: 'Emergency Shelter',
      location: 'Boston, MA',
      status: 'active',
      volunteers: 18,
      urgency: 'high',
      coordinates: { x: 75, y: 25 }
    },
    {
      id: 4,
      type: 'medical',
      name: 'Medical Camp',
      location: 'Seattle, WA',
      status: 'planned',
      volunteers: 8,
      urgency: 'medium',
      coordinates: { x: 20, y: 30 }
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
            <Card className="relative h-[500px] lg:h-[600px]" padding={false}>
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 overflow-hidden">
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
                <div className="absolute inset-0">
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
                    className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer transition-transform hover:scale-110"
                    style={{ 
                      left: `${location.coordinates.x}%`, 
                      top: `${location.coordinates.y}%` 
                    }}
                    onClick={() => setSelectedMarker(location.id)}
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
                    {selectedMarker === location.id && (
                      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 w-72 bg-white rounded-xl shadow-2xl p-5 z-10 border border-gray-100">
                        <button 
                          onClick={(e) => { e.stopPropagation(); setSelectedMarker(null); }}
                          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
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
                          <Button size="sm" variant="primary" fullWidth className="mt-2">
                            View Details
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
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
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
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
                    onClick={() => setSelectedMarker(location.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                      selectedMarker === location.id
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
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
    </div>
  );
};

export default MapView;
