"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Globe, Headset, Zap, Users, Calendar, Package, Mail, Clock, BarChart3, Star, ArrowRight, Play, CheckCircle, Award, Target, Leaf, Lightbulb, Shield, Settings, Download } from 'lucide-react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <footer ref={ref} className="relative w-full text-gray-600 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor: '#ffffff'}}>
      {/* Floating decorative icons - Matching Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-10 text-[#03acff]"
      >
        <Award size={40} className="animate-bounce" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-40 right-20 text-[#03acff]"
      >
        <Globe size={35} className="animate-pulse" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-40 left-20 text-[#03acff]"
      >
        <Users size={30} className="animate-bounce" />
      </motion.div>

      {/* Additional floating background icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.08, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute top-60 left-1/4 text-[#03acff]"
      >
        <BarChart3 size={25} className="animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.08, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute top-80 right-1/3 text-[#03acff]"
      >
        <Mail size={28} className="animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.08, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-60 right-1/4 text-[#03acff]"
      >
        <Calendar size={32} className="animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.08, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute top-1/3 left-1/2 text-[#03acff]"
      >
        <Clock size={24} className="animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.08, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="absolute bottom-1/3 right-1/2 text-[#03acff]"
      >
        <Package size={26} className="animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.08, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="absolute top-1/2 left-1/6 text-[#03acff]"
      >
        <Star size={22} className="animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.08, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 2.3 }}
        className="absolute bottom-1/2 right-1/6 text-[#03acff]"
      >
        <Headset size={29} className="animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.08, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute top-2/3 left-2/3 text-[#03acff]"
      >
        <CheckCircle size={23} className="animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isInView ? { opacity: 0.08, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        transition={{ duration: 1, delay: 2.7 }}
        className="absolute bottom-2/3 right-2/3 text-[#03acff]"
      >
        <Zap size={27} className="animate-pulse" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section with Logo and Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 mb-16"
        >
          {/* Logo Section */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6"
            >
              <img
                src="/images/only.jpg"
                alt="desknet's NEO by Inspire Logo"
                className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 mx-auto lg:mx-0"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              Empowering Filipino businesses with Japanese precision and innovation through comprehensive digital solutions.
            </motion.p>
          </div>

          {/* Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 w-full lg:w-2/3"
          >
            <div className="text-center lg:text-left">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="font-semibold text-gray-800 mb-6 text-xl"
              >
                Product
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="space-y-4"
              >
                <li>
                  <a 
                    href="subscribtions" 
                    className="text-gray-600 hover:text-[#03acff] transition-colors duration-300 text-base flex items-center justify-center lg:justify-start gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Pricing & Plans
                  </a>
                </li>
              </motion.ul>
            </div>

            <div className="text-center lg:text-left">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="font-semibold text-gray-800 mb-6 text-xl"
              >
                Company
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="space-y-4"
              >
                <li>
                  <a 
                    href="/faq" 
                    className="text-gray-600 hover:text-[#03acff] transition-colors duration-300 text-base flex items-center justify-center lg:justify-start gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    FAQs
                  </a>
                </li>
                <li>
                  <a 
                    href="/case" 
                    className="text-gray-600 hover:text-[#03acff] transition-colors duration-300 text-base flex items-center justify-center lg:justify-start gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Case Studies
                  </a>
                </li>
                <li>
                  <a 
                    href="/testimonies" 
                    className="text-gray-600 hover:text-[#03acff] transition-colors duration-300 text-base flex items-center justify-center lg:justify-start gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Testimonials
                  </a>
                </li>
              </motion.ul>
            </div>

            <div className="text-center lg:text-left">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="font-semibold text-gray-800 mb-6 text-xl"
              >
                Connect
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="space-y-4"
              >
                <li>
                  <a 
                    href="https://www.youtube.com/channel/UCUGE-qPvLqYmZhQ25aLXm6A" 
                    className="text-gray-600 hover:text-[#03acff] transition-colors duration-300 text-base flex items-center justify-center lg:justify-start gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    YouTube
                  </a>
                </li>
                <li>
                  <a 
                    href="https://web.facebook.com/profile.php?id=61577731001288" 
                    className="text-gray-600 hover:text-[#03acff] transition-colors duration-300 text-base flex items-center justify-center lg:justify-start gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/desknets-neo-by-inspire-next-global-inc-590465382/" 
                    className="text-gray-600 hover:text-[#03acff] transition-colors duration-300 text-base flex items-center justify-center lg:justify-start gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    LinkedIn
                  </a>
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section with Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="border-t border-gray-300 pt-8 text-center"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} desknet's NEO. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span></span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Zap className="w-4 h-4 text-[#03acff]" />
              </motion.div>
              <span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}