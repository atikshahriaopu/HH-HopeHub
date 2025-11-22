import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const ComponentShowcase = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            HopeHub Component Showcase
          </h1>
          <p className="text-gray-600">
            All reusable components in one place for easy reference
          </p>
        </div>

        {/* Buttons Section */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Buttons</h2>
          
          <div className="space-y-6">
            {/* Button Variants */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="danger">Danger Button</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* Button States */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">States</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Full Width */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Full Width</h3>
              <Button fullWidth>Full Width Button</Button>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">With Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add New
                </Button>
                <Button variant="secondary">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </Button>
                <Button variant="outline">
                  Search
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Inputs Section */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Input Fields</h2>
          
          <div className="space-y-6 max-w-xl">
            {/* Basic Input */}
            <Input
              label="Basic Input"
              type="text"
              name="basic"
              placeholder="Enter text..."
            />

            {/* Input with Icon */}
            <Input
              label="Input with Icon"
              type="email"
              name="email"
              placeholder="your@email.com"
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
            />

            {/* Required Input */}
            <Input
              label="Required Field"
              type="text"
              name="required"
              placeholder="This field is required"
              required
            />

            {/* Input with Error */}
            <Input
              label="Input with Error"
              type="text"
              name="error"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              error="This field contains an error"
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
            />

            {/* Disabled Input */}
            <Input
              label="Disabled Input"
              type="text"
              name="disabled"
              value="Cannot edit this"
              disabled
            />

            {/* Password Input */}
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              icon={(props) => (
                <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              )}
            />

            {/* Textarea */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Textarea Example
              </label>
              <textarea
                rows="4"
                placeholder="Enter your message..."
                className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Select Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Select Dropdown
              </label>
              <select className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                <option>Select an option...</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Cards Section */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Basic Card */}
            <Card hover>
              <h3 className="font-semibold text-gray-900 mb-2">Basic Card</h3>
              <p className="text-sm text-gray-600">
                This is a simple card with hover effect.
              </p>
            </Card>

            {/* Card with Icon */}
            <Card hover className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Card with Icon</h3>
              <p className="text-sm text-gray-600">Centered content with icon.</p>
            </Card>

            {/* Colored Card */}
            <Card hover className="bg-gradient-to-br from-blue-50 to-green-50">
              <h3 className="font-semibold text-gray-900 mb-2">Colored Card</h3>
              <p className="text-sm text-gray-600">
                Card with gradient background.
              </p>
            </Card>
          </div>
        </Card>

        {/* Color Palette */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Palette</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="h-20 bg-blue-600 rounded-lg mb-2"></div>
              <p className="text-sm font-medium text-gray-900">Primary Blue</p>
              <p className="text-xs text-gray-600">#2563EB</p>
            </div>
            <div>
              <div className="h-20 bg-green-600 rounded-lg mb-2"></div>
              <p className="text-sm font-medium text-gray-900">Secondary Green</p>
              <p className="text-xs text-gray-600">#16A34A</p>
            </div>
            <div>
              <div className="h-20 bg-red-600 rounded-lg mb-2"></div>
              <p className="text-sm font-medium text-gray-900">Alert Red</p>
              <p className="text-xs text-gray-600">#DC2626</p>
            </div>
            <div>
              <div className="h-20 bg-yellow-600 rounded-lg mb-2"></div>
              <p className="text-sm font-medium text-gray-900">Warning Yellow</p>
              <p className="text-xs text-gray-600">#CA8A04</p>
            </div>
          </div>
        </Card>

        {/* Typography */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Typography</h2>
          
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Heading 1 - 4xl</h1>
              <p className="text-sm text-gray-500 mt-1">text-4xl font-bold</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Heading 2 - 3xl</h2>
              <p className="text-sm text-gray-500 mt-1">text-3xl font-bold</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Heading 3 - 2xl</h3>
              <p className="text-sm text-gray-500 mt-1">text-2xl font-bold</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900">Heading 4 - xl</h4>
              <p className="text-sm text-gray-500 mt-1">text-xl font-semibold</p>
            </div>
            <div>
              <p className="text-base text-gray-900">Body text - base</p>
              <p className="text-sm text-gray-500 mt-1">text-base</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Small text - sm</p>
              <p className="text-xs text-gray-500 mt-1">text-sm</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Extra small text - xs</p>
              <p className="text-xs text-gray-500 mt-1">text-xs</p>
            </div>
          </div>
        </Card>

        {/* Badges & Tags */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Badges & Tags</h2>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              Blue Badge
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              Green Badge
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
              Red Badge
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
              Yellow Badge
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
              Purple Badge
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
              Gray Badge
            </span>
          </div>
        </Card>

        {/* Alerts */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alert Messages</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-blue-900">Info Alert</h4>
                  <p className="text-sm text-blue-800 mt-1">This is an informational message.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-green-900">Success Alert</h4>
                  <p className="text-sm text-green-800 mt-1">Action completed successfully!</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-yellow-900">Warning Alert</h4>
                  <p className="text-sm text-yellow-800 mt-1">Please review this warning message.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <h4 className="font-semibold text-red-900">Error Alert</h4>
                  <p className="text-sm text-red-800 mt-1">An error occurred. Please try again.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ComponentShowcase;
