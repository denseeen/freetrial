'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = pathname === '/' || pathname === '/.';

  const handleSubscribe = () => {
    router.push('/subscribtions');
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (isHomePage) {
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    const aboutSection = document.querySelector('[data-section="about"]');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleFreeTrialClick = () => {
    router.push('/form');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`${
        isHomePage ? 'sticky top-0 z-50' : ''
      } bg-white py-4 border-b-2 pb-2 shadow-xl`}
    >
      <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/logohehe.png" alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex flex-grow justify-center">
          <button
            onClick={handleHomeClick}
            className="text-gray-600 hover:text-[#2f6cb3] text-lg font-medium transition-colors duration-200 px-4"
          >
            Home
          </button>

          {isHomePage && (
            <>
              <button
                onClick={handleAboutClick}
                className="text-gray-600 hover:text-[#2f6cb3] text-lg font-medium transition-colors duration-200 px-4"
              >
                About
              </button>
              <button
                onClick={handleFreeTrialClick}
                className="text-gray-600 hover:text-[#2f6cb3] text-lg font-medium transition-colors duration-200 px-4"
              >
                Free Trial
              </button>
            </>
          )}
        </nav>

        {/* Desktop Subscribe Button */}
        <button
          onClick={handleSubscribe}
          className="hidden md:block bg-[#3C8CDE] text-white font-medium px-5 py-2 rounded-lg
                     hover:bg-[#2f6cb3] hover:scale-105 transition-all duration-200 shadow-md
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        >
          Subscribe
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-8 py-4 space-y-4">
            <button
              onClick={handleHomeClick}
              className="block w-full text-left text-gray-600 hover:text-[#2f6cb3] text-lg font-medium transition-colors duration-200 py-3 border-b border-gray-100"
            >
              Home
            </button>

            {isHomePage && (
              <>
                <button
                  onClick={handleAboutClick}
                  className="block w-full text-left text-gray-600 hover:text-[#2f6cb3] text-lg font-medium transition-colors duration-200 py-3 border-b border-gray-100"
                >
                  About
                </button>
                <button
                  onClick={handleFreeTrialClick}
                  className="block w-full text-left text-gray-600 hover:text-[#2f6cb3] text-lg font-medium transition-colors duration-200 py-3 border-b border-gray-100"
                >
                  Free Trial
                </button>
              </>
            )}

            <button
              onClick={handleSubscribe}
              className="block w-full bg-[#3C8CDE] text-white font-medium px-5 py-3 rounded-lg
                         hover:bg-[#2f6cb3] transition-all duration-200 shadow-md
                         focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 mt-4"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
