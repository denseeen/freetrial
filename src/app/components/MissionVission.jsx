// components/MissionVision.jsx
"use client";
import React from 'react';
import { Target, Eye } from 'lucide-react'; // Removed Check as it's no longer used

export default function MissionVision() {
  return (
    // Main container for the sectio
    // . Using our primary blue for the overall background
    // to match the site's theme, and cards will stand out on it.
    <div className="w-full max-w-7xl mx-auto mt-5 items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5 bg-[#3C8CDE] p-6 rounded-2xl font-[ubuntu]">
      {/* Mission Card */}
      <div className="relative bg-white rounded-2xl shadow-lg p-10 border border-[#A9BED9] overflow-hidden animate-fade-in group">
        {/* Background circle accent, using light blue-grey */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#A9BED9] rounded-full opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
        <div className="flex items-start mb-8 relative z-10">
          {/* Icon background, using light blue-grey */}
          <div className="bg-[#A9BED9] p-4 rounded-xl mr-5 text-[#3C8CDE] shadow-md"> {/* Icon color changed to primary blue */}
            <Target size={28} />
          </div>
          <div>
            {/* Title text, using dark blue-grey */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2A3A4D]">Our Mission</h2>
            {/* Underline, using accent blue */}
            <div className="w-20 h-1 bg-[#5DACE4] mt-3"></div>
          </div>
        </div>
        {/* Paragraph text, using dark blue-grey */}
        <div className="text-[#2A3A4D] leading-relaxed space-y-5 relative z-10 opacity-90">
          <p className="text-lg">
            To empower Filipino teams and organizations with a smart, efficient, and user-friendly digital platform that simplifies workflow, enhances collaboration, and reflects the unique values of Filipino work culture, all while delivering high-caliber innovation at a cost that’s practical and accessible.
          </p>
          {/* Removed the ul list with checkmarks */}
        </div>
      </div>

      {/* Vision Card */}
      {/* Kept background as white for consistency with Mission Card, adjusted border and text colors */}
      <div className="relative bg-white rounded-2xl justify-center shadow-lg p-10 text-[#2A3A4D] overflow-hidden animate-fade-in delay-200 group border border-[#A9BED9]">
        {/* Background circle accent, using light blue-grey */}
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#A9BED9] rounded-full opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
        <div className="flex items-start mb-8 relative z-10">
          {/* Icon background, using white */}
          <div className="bg-white p-4 rounded-xl mr-5 text-[#3C8CDE] shadow-md"> {/* Icon color changed to primary blue */}
            <Eye size={28} />
          </div>
          <div>
            {/* Title text, using dark blue-grey */}
            <h2 className="text-2xl sm:text-3xl font-bold">Our Vision</h2>
            {/* Underline, using accent blue */}
            <div className="w-20 h-1 bg-[#5DACE4] mt-3"></div>
          </div>
        </div>
        {/* Paragraph text, using dark blue-grey */}
        <div className="leading-relaxed space-y-5 relative z-10 opacity-95">
          <p className="text-lg text-[#2A3A4D]">
            To be the go-to digital workplace solution for Filipino professionals—offering world-class functionality inspired by Japanese excellence, tailored to local needs, and built to support progressive, future-ready teams without the high cost of traditional enterprise systems.
          </p>
          {/* Removed the ul list with checkmarks */}
        </div>
      </div>
    </div>
  );
}
