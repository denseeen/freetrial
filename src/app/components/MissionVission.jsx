// components/MissionVision.jsx
"use client";
import React from 'react';
import { Target, Eye, Check } from 'lucide-react';

const MissionVision = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-5 items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5 bg-white">
      {/* Mission Card */}
      <div className="relative bg-white rounded-2xl shadow-lg p-10 border justify-center border-blue-100 overflow-hidden animate-fade-in group">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 rounded-full opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
        <div className="flex items-start mb-8 relative z-10">
          <div className="bg-blue-100 p-4 rounded-xl mr-5 text-blue-700 shadow-md">
            <Target size={28} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Our Mission</h2>
            <div className="w-20 h-1 bg-blue-300 mt-3"></div>
          </div>
        </div>
        <div className="text-blue-700 leading-relaxed space-y-5 relative z-10 opacity-90">
          <p className="text-lg">
            To empower Filipino teams with intelligent, efficient digital tools that elevate collaboration while honoring local work culture.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
              <span>Simplify workflows with intuitive, user-centric design.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
              <span>Deliver high-caliber innovation at genuinely accessible prices.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
              <span>Integrate Filipino values seamlessly into our platform experience.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Vision Card */}
      <div className="relative bg-blue-50 rounded-2xl justify-center shadow-lg p-10 text-blue-900 overflow-hidden animate-fade-in delay-200 group border border-blue-100">
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-100 rounded-full opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
        <div className="flex items-start mb-8 relative z-10">
          <div className="bg-white p-4 rounded-xl mr-5 text-blue-700 shadow-md">
            <Eye size={28} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Our Vision</h2>
            <div className="w-20 h-1 bg-blue-300 mt-3"></div>
          </div>
        </div>
        <div className="leading-relaxed space-y-5 relative z-10 opacity-95">
          <p className="text-lg text-blue-700">
            To redefine workplace technology for Filipino professionals, harmonizing Japanese excellence with profound local adaptation.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
              <span>Become the Philippines' most trusted digital workplace solution.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
              <span>Offer world-class functionality at unmatched, local market prices.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
              <span>Forge future-ready Filipino teams with cutting-edge tools.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;