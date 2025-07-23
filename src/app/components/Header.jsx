'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
export default function Header() {

   const router = useRouter();

   const handleSubscribe = () => {
    router.push('/subscribtions'); // This should match your folder name inside /app
  };
  return (
    <header className="bg-white py-4 border-b-2 border-black pb-2 shadow-xl">
      {/* Increased horizontal padding from px-6 to px-8 */}
      <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          <img src="/images/logohehe.png" alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Navigation links in the center - using Option 1 for centering */}
        <nav className="hidden md:flex flex-grow justify-center">
          <a href="/Hero" className="text-gray-600 hover:text-[#3C8CDE] text-lg font-medium transition-colors duration-200 px-4">
            Home
          </a>
          <a href="/About" className="text-gray-600 hover:text-[#3C8CDE] text-lg font-medium transition-colors duration-200 px-4">
            About
          </a>
          <a href="/freetrial" className="text-gray-600 hover:text-[#3C8CDE] text-lg font-medium transition-colors duration-200 px-4">
            Free Trial
          </a>
        </nav>

        {/* Subscribe button on the right */}
      <button
          onClick={handleSubscribe}
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