'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { Check, Building, Globe, Headset, Zap, Users, Calendar, Package, Mail, Clock, BarChart3, Star, ArrowRight, Play, CheckCircle, Award, Target, Leaf, Lightbulb, Shield, Settings, Download } from 'lucide-react';

export default function PlanningPage() {
  const router = useRouter();

  const plans = [
    {
      type: "FREE TRIAL",
      price: "Free",
      description: "Experience Desknet's NEO By Inspire for a limited time.",
      features: [
        "1 Month Free Trial (No bank details required!)",
        "Enjoy up to 5 core applications",
        "Basic system operations",
        "Limited support access",
      ],
      buttonText: "Start Free Trial",
      buttonColor: '#03acff',
      isTrial: true,
      redirectTo: '/form',
    },
    {
      type: "BASIC ACCOUNT",
      price: "₱200",
      description: "Ideal for fundamental system operations.",
      features: [
        "Facility Reservation",
        "Visitors Management",
        "Document Management",
        "Project Management",
        "Inventory",
        "Cabinet",
        "Safety Confirmation",
        "1GB per account",
        "Cloud status (shareable)",
        "Small to medium Enterprise",
      ],
      buttonText: "Choose Basic",
      buttonColor: '#03acff',
      redirectTo: '/basic',
    },
    {
      type: "PREMIUM ACCOUNT",
      price: "₱360",
      description: "Highly recommended for a fully paperless operational system.",
      features: [
        "Facility Reservation",
        "Visitors Management",
        "Workflow",
        "Circulations/Report",
        "Project Management",
        "Safety Confirmation",
        "AppSuite",
        "1GB per account",
        "Cloud status (shareable)",
        "Small to Large Enterprise",
      ],
      buttonText: "Go Premium",
      buttonColor: '#341bca',
      isPremium: true,
      redirectTo: '/premium',
    },
  ];

  return (
    <section className="relative w-full py-24 bg-white flex flex-col items-center justify-center text-black px-4 md:px-8 overflow-hidden">
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
            <Star className="w-4 h-4" />
            Pricing Plans
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Choose Your{" "}
            <span className="text-[#03acff]">Perfect Plan</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
          >
            You could enjoy up to 2 Months free-trial with desknet's NEO by Inspire
            if you subscribed or signed a contract with us for 1 year!
          </motion.p>
        </motion.div>

        {/* Plans Grid - Enhanced with proper alignment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group flex flex-col h-full"
            >
              <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex flex-col h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border-2 ${
                plan.isPremium ? 'border-[#03acff]' : 'border-gray-200 hover:border-[#03acff]/30'
              }`}>
                {/* Premium Badge */}
                {plan.isPremium && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#03acff] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                  >
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">Most Popular</span>
                  </motion.div>
                )}

                {/* Price Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="w-20 h-20 bg-[#03acff] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#03acff]/30 mx-auto"
                >
                  <span className="text-white font-bold text-lg">{plan.price}</span>
                </motion.div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#03acff] transition-colors duration-300 text-center">
                  {plan.type}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {plan.description}
                </p>

                <div className="flex-grow">
                  <ul className="text-left w-full space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.0 + index * 0.1 + i * 0.05 }}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <Check className="text-green-500 w-4 h-4 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  onClick={() => router.push(plan.redirectTo)}
                  className="mt-auto px-8 py-3 text-white text-lg font-semibold rounded-full shadow-lg w-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                  style={{ backgroundColor: plan.buttonColor }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
