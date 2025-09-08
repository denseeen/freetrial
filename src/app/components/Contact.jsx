"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock, Users, Building, Globe, Headset, Zap, Calendar, Package, BarChart3, Star, ArrowRight, Play, CheckCircle, Award, Target, Leaf, Lightbulb, Shield, Settings, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white flex flex-col items-center justify-center text-black px-4 md:px-8 overflow-hidden">
      {/* Background shapes for a dynamic feel - Matching Hero */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      {/* Floating decorative icons - Matching Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-10 text-[#03acff]"
      >
        <Building size={40} className="animate-bounce" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-40 right-20 text-[#03acff]"
      >
        <Globe size={35} className="animate-pulse" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-40 left-20 text-[#03acff]"
      >
        <Users size={30} className="animate-bounce" />
      </motion.div>

      {/* Additional floating background icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute top-60 left-1/4 text-[#03acff]"
      >
        <BarChart3 size={25} className="animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute top-80 right-1/3 text-[#03acff]"
      >
        <Mail size={28} className="animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-60 right-1/4 text-[#03acff]"
      >
        <Calendar size={32} className="animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute top-1/3 left-1/2 text-[#03acff]"
      >
        <Clock size={24} className="animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="absolute bottom-1/3 right-1/2 text-[#03acff]"
      >
        <Package size={26} className="animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="absolute top-1/2 left-1/6 text-[#03acff]"
      >
        <Star size={22} className="animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
        className="absolute bottom-1/2 right-1/6 text-[#03acff]"
      >
        <Headset size={29} className="animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute top-2/3 left-2/3 text-[#03acff]"
      >
        <CheckCircle size={23} className="animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 2.7 }}
        className="absolute bottom-2/3 right-2/3 text-[#03acff]"
      >
        <Zap size={27} className="animate-pulse" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
        {/* Header Section - Matching Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-[#03acff]/10 text-[#03acff] px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Let's{" "}
            <span className="text-[#03acff]">Connect</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
          >
            Ready to transform your business with desknet's NEO by Inspire? Our expert team is here to help you every step of the way.
          </motion.p>
        </motion.div>

        {/* Contact Content Grid - Enhanced with Hero styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#03acff]/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#03acff] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#03acff]/30">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-600 font-medium text-sm mb-1">Email for Inquiries</div>
                    <a 
                      href="mailto:sales@ispirenextglobal.com" 
                      className="text-[#03acff] font-semibold text-lg hover:text-[#03acff]/80 transition-colors duration-300 block"
                    >
                      sales@ispirenextglobal.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#03acff] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#03acff]/30">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-600 font-medium text-sm mb-1">Phone Numbers</div>
                    <div className="space-y-2">
                      <a 
                        href="tel:+639202260942" 
                        className="text-[#03acff] font-semibold text-lg hover:text-[#03acff]/80 transition-colors duration-300 block"
                      >
                        +63 920 226 0942
                      </a>
                      <a 
                        href="tel:+639992232797" 
                        className="text-[#03acff] font-semibold text-lg hover:text-[#03acff]/80 transition-colors duration-300 block"
                      >
                        +63 999 223 2797
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#03acff] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#03acff]/30">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-600 font-medium text-sm mb-1">Office Location</div>
                    <div className="text-gray-900 font-semibold text-lg leading-relaxed">
                      6F Alliance Global Tower, Uptown Mall, 11th Avenue Corner, 36th Street, Bonifacio Global City, Taguig City, Metro Manila
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#03acff]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#03acff] rounded-xl flex items-center justify-center">
                  <Users className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                {[
                  "Expert technical support team",
                  "Quick response within 24 hours",
                  "Personalized consultation services",
                  "Ongoing training and support"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-[#03acff] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="text-white w-4 h-4" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
