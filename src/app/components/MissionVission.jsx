"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Target, Eye, Users, Zap, Shield } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center text-black px-4 md:px-8 overflow-hidden py-16">
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold text-[#03acff] uppercase tracking-wider mb-4">
            Our Purpose
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black">
            Guiding <span className="text-[#03acff]">Vision</span>, <br />Purposeful <span className="text-[#03acff]">Mission</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-black text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Discover what drives us forward and shapes our commitment to empowering Filipino businesses
          </motion.p>
        </motion.div>

        {/* Mission & Vision Cards - Side by side layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-20">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 p-10 rounded-2xl bg-white border border-[#03acff] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 rounded-2xl bg-[#03acff]">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-black">Our Mission</h2>
            </div>
            <p className="text-black text-lg leading-relaxed flex-grow">
              To empower Filipino teams and organizations with a smart, efficient, and user-friendly digital platform that simplifies workflow, enhances collaboration, and reflects the unique values of Filipino work culture.
            </p>
            <div className="mt-8 pt-6 border-t border-[#03acff]">
              <div className="flex items-center text-sm text-black">
                <Zap className="w-4 h-4 mr-2 text-[#03acff]" />
                Streamlining workflows for Filipino businesses
              </div>
            </div>
          </motion.div>

          {/* Divider for mobile, hidden on larger screens */}
          <div className="my-8 lg:my-0 lg:mx-4 flex items-center justify-center lg:block">
            <div className="w-16 h-1 bg-gradient-to-r from-[#03acff] to-[#03acff] rounded-full lg:w-1 lg:h-16 lg:mx-auto"></div>
          </div>

        {/* Vision Card */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex-1 p-10 rounded-2xl bg-white border border-[#03acff] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 rounded-2xl bg-[#03acff]">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-black">Our Vision</h2>
            </div>
            <p className="text-black text-lg leading-relaxed flex-grow">
              To be the go-to digital workplace solution for Filipino professionals—offering world-class functionality inspired by Japanese excellence, tailored to local needs, and built to support progressive, future-ready teams.
            </p>
            <div className="mt-8 pt-6 border-t border-[#03acff]">
              <div className="flex items-center text-sm text-black">
                <Users className="w-4 h-4 mr-2 text-[#03acff]" />
                Building future-ready Filipino teams
              </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
}