import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-lg py-4">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          {/* Increased height to h-16 (example) */}
          <img src="/images/logohehe.png" alt="Logo" className="h-16 w-auto" /> 
        </div>

        {/* Subscribe button on the right */}
        <button
          className="bg-[#3C8CDE] text-white font-medium px-5 py-2 rounded-lg 
                     hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-md
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        >
          Subscribe
        </button>
      </div>
    </header>
  );
}