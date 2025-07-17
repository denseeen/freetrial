import React from 'react';

const Header = () => {
  return (
    <header className="bg-white backdrop-blur-md shadow-md py-4">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          <img src="/images/logohehe.png" alt="Logo" className="h-10 w-auto" />

        </div>

        {/* Subscribe button on the right */}
        <button className="bg-blue-800 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-900 hover:scale-105 transition-all duration-200 shadow-sm">
          Subscribe
        </button>
      </div>
    </header>
  );
};

export default Header;
