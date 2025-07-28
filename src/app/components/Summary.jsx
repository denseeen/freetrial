// src/app/components/Summary.jsx
"use client";

import React from 'react';
import { FaIndustry, FaHandshake, FaBuilding } from 'react-icons/fa';

export const Summary = () => {
  return (
    // Main container for the entire section
    // Added 'bg-white' for a white background
    // Increased vertical padding (py-16) for more breathing room
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Centered content wrapper */}
      <div className="max-w-7xl mx-auto"> {/* Increased max-width for a slightly wider layout */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">CASE STUDIES SUMMARY</h2> {/* Darker text, bold, slightly larger */}
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto"> {/* Lighter text, centered, with max-width for readability */}
          A diverse range of organizations—from government offices and businesses to schools and
          local councils—use our easy-to-use collaboration software and have expressed their
          satisfaction with it. Here's what some of them had to say:
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8"> {/* Using 'gap' for consistent spacing */}
          {/* Manufacturing Business Card */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl"> {/* Lighter background, larger shadow, subtle hover effect */}
            <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center mb-6"> {/* Slightly larger icon circle, deeper blue */}
              <FaIndustry className="text-white text-6xl" /> {/* Larger icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Business</h3> {/* Darker, slightly larger heading */}
            <p className="text-red-600 text-base mb-4 font-medium">60 users</p> {/* Slightly larger user count */}
            <p className="text-gray-700 text-base leading-relaxed"> {/* Adjusted line-height */}
              We are pleased with the cost and usability. The improvement in internal
              information sharing has led to an increase in efficiency.
            </p>
          </div>

          {/* Service Industry Business Card */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <FaHandshake className="text-white text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Industry Business</h3>
            <p className="text-red-600 text-base mb-4 font-medium">160 users</p>
            <p className="text-gray-700 text-base leading-relaxed">
              It has strengthened coordination between sales and management and has
              proven instrumental in our expansion overseas.
            </p>
          </div>

          {/* Government Agency Card */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-28 h-28 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <FaBuilding className="text-white text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Government Agency</h3>
            <p className="text-red-600 text-base mb-4 font-medium">7,000 users</p>
            <p className="text-gray-700 text-base leading-relaxed">
              Usability was the key factor for us. We wanted an accessible tool that makes
              viewing large volumes of information easy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};