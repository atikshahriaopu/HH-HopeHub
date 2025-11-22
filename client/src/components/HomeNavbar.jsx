import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/hh.png" alt="HopeHub Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold text-gray-900">
              Hope<span className="text-blue-600">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/map" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Map
            </Link>
            <Link to="/alert" className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
              Alert
            </Link>
            <Link to="/volunteer/dashboard" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Volunteer
            </Link>
            <Link to="/ngo/dashboard" className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors">
              NGO Dashboard
            </Link>
            <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Login
            </Link>
            <Link to="/register" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/map" 
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Map
              </Link>
              <Link 
                to="/alert" 
                className="px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-colors rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Alert
              </Link>
              <Link 
                to="/volunteer/dashboard" 
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Volunteer
              </Link>
              <Link 
                to="/ngo/dashboard" 
                className="px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 font-medium transition-colors rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                NGO Dashboard
              </Link>
              <Link 
                to="/login" 
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="mx-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
