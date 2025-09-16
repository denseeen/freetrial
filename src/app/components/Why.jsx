
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-32" data-section="why">
      <div className="relative container px-6 mx-auto text-center">
        <div className="max-w-6xl mx-auto">
          {/* Header Section - Matching Hero Style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-semibold text-gray-800 lg:text-5xl xl:text-6xl leading-tight"
          >
            Why Choose{" "}
            <span className="text-[#03acff]">Desknet NEO</span> 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-gray-600 text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto"
          >
            Japan's Most Popular Collaboration Software — trusted by over 16,000 companies worldwide.
          </motion.p>

          {/* Features Grid - Expanded */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16"
          >
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-8">
              <div className="w-32 h-32 bg-[#03acff] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Intuitive Design</h3>
              <p className="text-base text-gray-600 text-center">Easy-to-use interface for all users</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center p-8">
              <div className="w-32 h-32 bg-[#03acff] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Secure Platform</h3>
              <p className="text-base text-gray-600 text-center">Enterprise-grade protection</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center p-8">
              <div className="w-32 h-32 bg-[#03acff] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zM8 13c-2.67 0-8 1.34-8 4v2h8v-2c0-.69.1-1.36.29-2H8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Affordable Solution</h3>
              <p className="text-base text-gray-600 text-center">Cost-effective for all business sizes</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center p-8">
              <div className="w-32 h-32 bg-[#03acff] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Paperless Efficiency</h3>
              <p className="text-base text-gray-600 text-center">Streamline workflows digitally</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
