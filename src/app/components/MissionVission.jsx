"use client";
import React, { useRef } from 'react';
import { Target, Eye } from 'lucide-react';
import { motion, useInView } from "framer-motion";

export default function MissionVision() {
  const missionCardRef = useRef(null);
  const visionCardRef = useRef(null);
  const isMissionCardInView = useInView(missionCardRef, { once: true, amount: 0.5 }); // Added once: true
  const isVisionCardInView = useInView(visionCardRef, { once: true, amount: 0.5 });

  const cardAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 font-[ubuntu]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Mission Card */}
        <motion.div
          ref={missionCardRef}
          className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col justify-between"
          variants={cardAnimation}
          initial="initial"
          animate={isMissionCardInView ? "animate" : "initial"}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Card header with icon and title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-[#A9BED9] text-[#3C8CDE] shadow-md">
              <Target size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#2A3A4D]">Our Mission</h2>
          </div>
          {/* Card content */}
          <div className="flex-grow">
            <p className="text-[#2A3A4D] text-lg leading-relaxed">
              To empower Filipino teams and organizations with a smart, efficient, and user-friendly digital platform that simplifies workflow, enhances collaboration, and reflects the unique values of Filipino work culture, all while delivering high-caliber innovation at a cost that’s practical and accessible.
            </p>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#A9BED9] rounded-bl-3xl opacity-10"></div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          ref={visionCardRef}
          className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col justify-between"
          variants={cardAnimation}
          initial="initial"
          animate={isVisionCardInView ? "animate" : "initial"}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          {/* Card header with icon and title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-[#A9BED9] text-[#3C8CDE] shadow-md">
              <Eye size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#2A3A4D]">Our Vision</h2>
          </div>
          {/* Card content */}
          <div className="flex-grow">
            <p className="text-[#2A3A4D] text-lg leading-relaxed">
              To be the go-to digital workplace solution for Filipino professionals—offering world-class functionality inspired by Japanese excellence, tailored to local needs, and built to support progressive, future-ready teams without the high cost of traditional enterprise systems.
            </p>
          </div>
          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#A9BED9] rounded-tr-3xl opacity-10"></div>
        </motion.div>
      </div>
    </div>
  );
}