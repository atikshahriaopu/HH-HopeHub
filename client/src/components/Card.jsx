import React from 'react';

const Card = ({ children, className = '', padding = true, hover = false, ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-200 transition-all duration-200 ${
        hover ? 'hover:shadow-md hover:border-gray-300' : ''
      } ${padding ? 'p-6' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
