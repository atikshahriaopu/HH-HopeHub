import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('volunteer');
  const [formData, setFormData] = useState({
    // Common fields
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    // Volunteer fields
    fullName: '',
    skills: '',
    availability: '',
    // NGO fields
    organizationName: '',
    registrationNumber: '',
    address: '',
    website: '',
    description: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (userType === 'volunteer') {
      if (!formData.fullName) newErrors.fullName = 'Full name is required';
      if (!formData.skills) newErrors.skills = 'Please list your skills';
    } else {
      if (!formData.organizationName) newErrors.organizationName = 'Organization name is required';
      if (!formData.registrationNumber) newErrors.registrationNumber = 'Registration number is required';
      if (!formData.address) newErrors.address = 'Address is required';
    }
    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validateStep1();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateStep2();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log('Registration submitted:', { ...formData, userType });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-full p-4 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Join <span className="text-blue-600">HopeHub</span>
          </h2>
          <p className="text-gray-600">
            Be part of the change, make a difference today
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'} font-semibold transition-all duration-300`}>
                {step > 1 ? '✓' : '1'}
              </div>
              <div className={`w-24 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'} transition-all duration-300`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'} font-semibold transition-all duration-300`}>
                2
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <div className="flex items-center space-x-24 text-sm font-medium text-gray-600">
              <span className={step >= 1 ? 'text-blue-600' : ''}>Account Info</span>
              <span className={step >= 2 ? 'text-blue-600' : ''}>Profile Details</span>
            </div>
          </div>
        </div>

        {/* Registration Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 1 ? (
            <div className="space-y-6">
              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  I want to register as <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setUserType('volunteer')}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                      userType === 'volunteer'
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <svg className={`w-12 h-12 mb-3 ${userType === 'volunteer' ? 'text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className={`font-semibold ${userType === 'volunteer' ? 'text-blue-600' : 'text-gray-700'}`}>
                        Volunteer
                      </span>
                      <span className="text-xs text-gray-500 mt-1 text-center">
                        Help during disasters
                      </span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType('ngo')}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                      userType === 'ngo'
                        ? 'border-green-600 bg-green-50 shadow-md'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <svg className={`w-12 h-12 mb-3 ${userType === 'ngo' ? 'text-green-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className={`font-semibold ${userType === 'ngo' ? 'text-green-600' : 'text-gray-700'}`}>
                        NGO / Organization
                      </span>
                      <span className="text-xs text-gray-500 mt-1 text-center">
                        Coordinate relief efforts
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 1 Form */}
              <div className="space-y-4">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  error={errors.email}
                  required
                  icon={(props) => (
                    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  error={errors.phone}
                  required
                  icon={(props) => (
                    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )}
                />

                <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  error={errors.password}
                  required
                  icon={(props) => (
                    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                />

                <Input
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  error={errors.confirmPassword}
                  required
                  icon={(props) => (
                    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                />
              </div>

              <Button
                type="button"
                variant={userType === 'volunteer' ? 'primary' : 'secondary'}
                fullWidth
                size="lg"
                onClick={handleNext}
              >
                Continue
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {userType === 'volunteer' ? (
                  <>
                    <Input
                      label="Full Name"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      error={errors.fullName}
                      required
                      icon={(props) => (
                        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Skills & Expertise <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        rows="3"
                        placeholder="e.g., Medical, First Aid, Communication, Logistics, IT Support..."
                        className={`block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${errors.skills ? 'border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.skills && <p className="mt-1.5 text-sm text-red-600">{errors.skills}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Availability
                      </label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select availability</option>
                        <option value="immediate">Immediate</option>
                        <option value="weekends">Weekends Only</option>
                        <option value="evenings">Evenings</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <Input
                      label="Organization Name"
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      placeholder="Relief Organization Inc."
                      error={errors.organizationName}
                      required
                      icon={(props) => (
                        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                    />

                    <Input
                      label="Registration Number"
                      type="text"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      placeholder="NGO-2024-12345"
                      error={errors.registrationNumber}
                      required
                      icon={(props) => (
                        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                    />

                    <Input
                      label="Website"
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://www.organization.org"
                      icon={(props) => (
                        <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      )}
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Street address, City, State, ZIP"
                        className={`block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${errors.address ? 'border-red-500 focus:ring-red-500' : ''}`}
                      />
                      {errors.address && <p className="mt-1.5 text-sm text-red-600">{errors.address}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Organization Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Brief description of your organization's mission and activities..."
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  required
                />
                <label className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="ghost"
                  fullWidth
                  size="lg"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant={userType === 'volunteer' ? 'primary' : 'secondary'}
                  fullWidth
                  size="lg"
                >
                  Create Account
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-700">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
