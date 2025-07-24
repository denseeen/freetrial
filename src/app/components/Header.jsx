'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubscribe = () => {
    router.push('/subscribtions'); // This should match your folder name inside /app
  };

  // Check if we are on homepage
  const isHomePage = pathname === '/' || pathname === '/.';

  return (
    <header className="bg-white py-4 border-b-2 pb-2 shadow-xl">
      <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/logohehe.png" alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex flex-grow justify-center">
          <a
            href="/"
            className="text-gray-600 hover:text-[#3C8CDE] text-lg font-medium transition-colors duration-200 px-4"
          >
            Home
          </a>

          {isHomePage && (
            <>
              <a
                href="#about"
                className="text-gray-600 hover:text-[#3C8CDE] text-lg font-medium transition-colors duration-200 px-4"
              >
                About
              </a>
              <a
                href="/form"
                className="text-gray-600 hover:text-[#3C8CDE] text-lg font-medium transition-colors duration-200 px-4"
              >
                Free Trial
              </a>
            </>
          )}
        </nav>

        {/* Subscribe Button */}
        <button
          onClick={handleSubscribe}
          className="bg-[#3C8CDE] text-white font-medium px-5 py-2 rounded-lg
                    hover:bg-[#2f6cb3] hover:scale-105 transition-all duration-200 shadow-md
                    focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        >
          Subscribe
        </button>

      </div>
    </header>
  );
}
