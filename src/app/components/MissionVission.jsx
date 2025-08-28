"use client";
import React, { useRef } from 'react';
import { Target, Eye } from 'lucide-react';
import { motion, useInView } from "framer-motion"; // Import motion and useInView

export default function MissionVision() {
  // Create refs for each card to detect when they are in view
  const missionCardRef = useRef(null);
  const visionCardRef = useRef(null);

  // Use useInView hook to check if elements are in the viewport
  // Set once: false to re-trigger animation every time they scroll into view
  const isMissionCardInView = useInView(missionCardRef, { once: false, amount: 0.3 }); // 30% visible to trigger
  const isVisionCardInView = useInView(visionCardRef, { once: false, amount: 0.3 });

  // Define animation variants for the cards
  const cardAnimation = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    // Main container for the section
    <div className="w-full max-w-7xl mt-5 items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5 bg-[#3C8CDE] rounded-2xl font-[ubuntu]">
      {/* Mission Card */}
      <motion.div
        ref={missionCardRef}
        className="relative bg-white rounded-2xl shadow-lg p-10 border border-[#A9BED9] overflow-hidden group"
        variants={cardAnimation}
        initial="initial"
        animate={isMissionCardInView ? "animate" : "initial"}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
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
        </div>
      </motion.div>

      {/* Vision Card */}
      <motion.div
        ref={visionCardRef}
        className="relative bg-white rounded-2xl justify-center shadow-lg p-10 text-[#2A3A4D] overflow-hidden group border border-[#A9BED9]"
        variants={cardAnimation}
        initial="initial"
        animate={isVisionCardInView ? "animate" : "initial"}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} // Added a slight delay for the second card
      >
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
        </div>
      </motion.div>
    </div>
  );
}
