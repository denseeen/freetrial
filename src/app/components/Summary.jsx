// src/app/components/Summary.jsx
"use client";

import React from 'react';
import { FaIndustry, FaHandshake, FaBuilding } from 'react-icons/fa';

export const Summary = () => {
  return (
    <section className="py-16 px-4  min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3C8CDE] mb-2">CASE STUDIES SUMMARY</h2>
          <div className="w-16 h-1 bg-[#3C8CDE] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            A diverse range of organizations—from government offices and businesses to schools and
            local councils—use our easy-to-use collaboration software and have expressed their
            satisfaction with it. Here's what some of them had to say:
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {/* Manufacturing Business Card */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col items-center text-center flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-28 h-28 bg-[#3C8CDE] rounded-full flex items-center justify-center mb-6">
              <FaIndustry className="text-white text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Business</h3>
            <p className="text-[#3C8CDE] text-base mb-4 font-medium">60 users</p>
            <p className="text-gray-700 text-base leading-relaxed">
              We are pleased with the cost and usability. The improvement in internal
              information sharing has led to an increase in efficiency.
            </p>
          </div>

          {/* Service Industry Business Card */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col items-center text-center flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-28 h-28 bg-[#3C8CDE] rounded-full flex items-center justify-center mb-6">
              <FaHandshake className="text-white text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Industry Business</h3>
            <p className="text-[#3C8CDE] text-base mb-4 font-medium">160 users</p>
            <p className="text-gray-700 text-base leading-relaxed">
              It has strengthened coordination between sales and management and has
              proven instrumental in our expansion overseas.
            </p>
          </div>

          {/* Government Agency Card */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col items-center text-center flex-1 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="w-28 h-28 bg-[#3C8CDE] rounded-full flex items-center justify-center mb-6">
              <FaBuilding className="text-white text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Government Agency</h3>
            <p className="text-[#3C8CDE] text-base mb-4 font-medium">7,000 users</p>
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