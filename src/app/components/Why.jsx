
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhyChooseUs() {
  // Create refs for each animated element to detect when they are in view
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);
  const feature4Ref = useRef(null);

  // Use useInView hook to check if elements are in the viewport
  // Changed 'once: true' to 'once: false' for repeated animations on scroll
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const isSubtitleInView = useInView(subtitleRef, { once: false, amount: 0.5 });
  const isFeature1InView = useInView(feature1Ref, { once: false, amount: 0.5 });
  const isFeature2InView = useInView(feature2Ref, { once: false, amount: 0.5 });
  const isFeature3InView = useInView(feature3Ref, { once: false, amount: 0.5 });
  const isFeature4InView = useInView(feature4Ref, { once: false, amount: 0.5 });

  // Define animation variants for elements
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const featureItem = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-8 px-4 min-h-fit flex items-center justify-center font-['Ubuntu']" data-section="why">
      <div className="max-w-7xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8">
        {/* Section Title - Using the primary deep blue */}
        <motion.h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-800"
          variants={fadeInAnimation}
          initial="initial"
          animate={isTitleInView ? "animate" : "initial"}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Choose desknet's NEO?
        </motion.h2>
        {/* Subtitle - Using a dark gray for better readability on light background */}
        <motion.p
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-700 mb-8"
          variants={fadeInAnimation}
          initial="initial"
          animate={isSubtitleInView ? "animate" : "initial"}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Japan's Most Popular Collaboration Software
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isFeature1InView || isFeature2InView || isFeature3InView || isFeature4InView ? "visible" : "hidden"}
        >
          {/* Feature 1: Intuitive and User-friendly - Blue Icon */}
          <motion.div ref={feature1Ref} className="flex flex-col items-center" variants={featureItem}>
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-blue-600 flex items-center justify-center mb-6 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 md:h-20 md:w-20 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
              Intuitive and User-friendly
            </h3>
            <p className="text-gray-600">Easy-to-use interface for all users</p>
          </motion.div>

          {/* Feature 2: Trustworthy Security - Teal Icon */}
          <motion.div ref={feature2Ref} className="flex flex-col items-center" variants={featureItem}>
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-teal-500 flex items-center justify-center mb-6 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 md:h-20 md:w-20 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl text-gray-800 font-semibold mb-2">
              Trustworthy Security
            </h3>
            <p className="text-gray-600">Enterprise-grade protection</p>
          </motion.div>

          {/* Feature 3: Affordable and Accessible - Purple Icon */}
          <motion.div ref={feature3Ref} className="flex flex-col items-center" variants={featureItem}>
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-purple-600 flex items-center justify-center mb-6 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 md:h-20 md:w-20 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zM8 13c-2.67 0-8 1.34-8 4v2h8v-2c0-.69.1-1.36.29-2H8z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl text-gray-800 font-semibold mb-2">
              Affordable and Accessible
            </h3>
            <p className="text-gray-600">
              Cost-effective for businesses of all sizes
            </p>
          </motion.div>

          {/* Feature 4: Paperless Efficiency - Orange Icon */}
          <motion.div ref={feature4Ref} className="flex flex-col items-center" variants={featureItem}>
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-orange-500 flex items-center justify-center mb-6 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 md:h-20 md:w-20 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl text-gray-800 font-semibold mb-2">
              Paperless Efficiency
            </h3>
            <p className="text-gray-600">
              Streamline workflows and reduce waste with digital documents and
              approvals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
