"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Building, Globe, Headset, Zap, Users, Calendar, Package, Mail, Clock, BarChart3, Star, ArrowRight, Play, CheckCircle } from 'lucide-react';
import Image from 'next/image';

// Typing Animation Component
const TypingAnimation = ({ words, className = "" }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 200;
    const pauseDelay = 1500;

    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (currentText.length < currentWord.length) {
          setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Main Component: Hero Section
export default function Hero() {
  const router = useRouter();
  const features = ["AppSuite", "WebMail", "Time Card", "Schedule", "Inventory"];

  const handleRequestDemo = () => {
    router.push("/demo");
  };

  const handleFreeTrial = () => {
    router.push("/form");
  };

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center text-black px-4 md:px-8 overflow-hidden">
      {/* Background shapes for a dynamic feel */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      {/* Floating decorative icons */}
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
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-16">
        {/* Text Content */}
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <Zap className="text-[#03acff] text-4xl sm:text-5xl md:text-6xl" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Experience the future of workplace management with{" "}
              <span className="text-[#03acff]">Desknet NEO</span> by Inspire
            </h1>
          </motion.div>

          {/* Subheading with Typing Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
          >
            A smart, all-in-one platform offering{" "}
            <span className="font-semibold text-[#03acff] block sm:inline mt-2 sm:mt-0">
              <TypingAnimation words={features} />
            </span>
          </motion.p>

          {/* Feature Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Mail className="text-[#03acff] text-xl" />
              <span className="text-sm font-medium">WebMail</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Clock className="text-[#03acff] text-xl" />
              <span className="text-sm font-medium">Time Card</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Calendar className="text-[#03acff] text-xl" />
              <span className="text-sm font-medium">Schedule</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Package className="text-[#03acff] text-xl" />
              <span className="text-sm font-medium">Inventory</span>
            </div>
          </motion.div>


          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <motion.button
              onClick={handleRequestDemo}
              className="px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg bg-[#03acff] text-white flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(3, 172, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="text-xl" />
              Request a Demo
              <ArrowRight className="text-xl" />
            </motion.button>
            <motion.button
              onClick={handleFreeTrial}
              className="px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg bg-transparent text-[#03acff] border border-[#03acff] hover:bg-[#03acff] hover:text-white flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(3, 172, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="text-xl" />
              Start Free Trial
              <ArrowRight className="text-xl" />
            </motion.button>
          </motion.div>
        </div>

        {/* Multi-device Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <Image
              src="/images/b.png"
              alt="Desknet NEO Multi-device Interface"
              width={700}
              height={500}
              className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl h-auto"
              priority
            />
            {/* Floating badge on the image */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute -top-4 -right-4 bg-[#03acff] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            >
              <Zap className="text-sm" />
              <span className="text-sm font-medium">Multi-Platform</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}