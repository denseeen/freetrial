"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Target, Leaf, Users, Handshake, Lightbulb, Globe, Star, ArrowRight, CheckCircle, Award } from 'lucide-react';

export default function Goal() {
  const goals = [
    {
      icon: Target,
      title: "Japanese Work Culture",
      description: "Bringing Japan's renowned work ethic - structure, discipline, and continuous improvement - to Filipino teams through desknet's NEO.",
      color: "from-[#03acff] to-[#03acff]"
    },
    {
      icon: Leaf,
      title: "Sustainable Workplaces",
      description: "Promoting paperless offices with complete digital workspaces that reduce clutter and support eco-friendly business practices.",
      color: "from-[#03acff] to-[#03acff]"
    },
    {
      icon: Users,
      title: "Accessible Innovation",
      description: "Making powerful digital tools available to every team - from startups to government agencies - with intuitive, reliable software.",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center text-black px-4 md:px-8 overflow-hidden">
      {/* Background shapes for a dynamic feel - More subtle */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-[#03acff] to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-[#03acff] to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      {/* Floating decorative icons - More subtle colors */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-10 text-[#03acff]"
      >
        <Target size={40} className="animate-bounce" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-40 right-20 text-purple-500"
      >
        <Globe size={35} className="animate-pulse" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-40 left-20 text-[#03acff]"
      >
        <Users size={30} className="animate-bounce" />
      </motion.div>

      {/* Additional floating background icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute top-60 left-1/4 text-[#03acff]"
      >
        <Leaf size={25} className="animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute top-80 right-1/3 text-indigo-500"
      >
        <Handshake size={28} className="animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-60 right-1/4 text-amber-500"
      >
        <Lightbulb size={32} className="animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute top-1/3 left-1/2 text-rose-500"
      >
        <Award size={24} className="animate-bounce" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="absolute bottom-1/3 right-1/2 text-violet-500"
      >
        <Star size={26} className="animate-pulse" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
        {/* Header Section - More balanced colors */}
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
            <Handshake className="w-4 h-4" />
            Strategic Partnership
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            The Vision Behind Our{" "}
            <span className="text-[#03acff]">Partnership</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
          >
            Transforming Filipino workplaces through Japanese innovation and digital excellence.
          </motion.p>
        </motion.div>

        {/* Partnership Intro - Enhanced with better colors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="lg:w-1/3 flex justify-center"
            >
              <div className="w-48 h-48 bg-[#03acff] rounded-full flex items-center justify-center shadow-2xl shadow-[#03acff]/50">
                <Handshake className="w-16 h-16 text-white" />
              </div>
            </motion.div>
            <div className="lg:w-2/3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
              >
                More Than Just a Business Alliance
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-gray-600 mb-6 leading-relaxed text-lg"
              >
                The collaboration between desknet's NEO and Inspire Next Global Inc. is a shared mission to reshape how Filipino teams work, collaborate, and grow. By blending trusted Japanese innovations with Filipino ingenuity, we're opening doors to smarter, more meaningful work experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-[#03acff] font-medium flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Our Shared Goals</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Partnership Goals - Enhanced Grid with varied colors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-gray-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${goal.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <goal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {goal.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Concluding Statement - More subtle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white shadow-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-xl sm:text-2xl font-semibold leading-relaxed"
            >
              Together, Inspire Next Global Inc. and Desknet's NEO are creating a future where technology meets tradition, and where Filipino workplaces thrive with purpose.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}