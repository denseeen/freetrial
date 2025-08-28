"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom hook for the typing effect
const useTypingEffect = (
  words,
  initialDelay = 1000,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBetweenWords = 1500
) => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
      }, deletingSpeed);

      if (currentText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => currentWord.substring(0, prev.length + 1));
      }, typingSpeed);

      if (currentText === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBetweenWords);
      }
    }

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseBetweenWords,
  ]);

  return currentText;
};

export default function Hero() {
  const typingWords = [
    "AppSuite",
    "WebMail",
    "Time Card",
    "Schedule",
    "Inventory",
  ];
  const animatedText = useTypingEffect(typingWords);

  // Scroll animation variants
  const scrollVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  // Function to scroll to Why component
  const scrollToWhy = () => {
    const whySection = document.querySelector('[data-section="why"]');
    if (whySection) {
      whySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* High-quality background with layered approach */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3C8CDE]/90 to-[#341bca]/90 z-0"></div>

        {/* High-res background image */}
        <Image
          src="/images/background.png"
          alt="Modern office workspace"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0 opacity-20 object-position-center"
        />

        {/* Subtle noise texture for depth */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 z-0 mix-blend-overlay"></div>
      </div>

      {/* Subtle floating particles */}
      <div className="absolute inset-0 overflow-hidden z-1">
        {[...Array(15)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const size = 1 + (i * 0.2) % 3;
          const left = (i * 7.3) % 100;
          const top = (i * 5.7) % 100;
          const duration = 15 + (i * 2) % 30;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Main content with scroll-triggered animations */}
      <motion.div
        className="relative z-10 text-center px-4 w-full max-w-6xl"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          offscreen: {},
          onscreen: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg"
          variants={scrollVariants}
          style={{ fontFamily: "Ubuntu, sans-serif" }}
        >
          Desknet NEO <span className="text-[#03acff]">By Inspire</span>
          <br />
          <motion.span 
            className="text-white inline-block relative pr-1 mt-4 text-3xl md:text-4xl"
            variants={scrollVariants}
          >
            {animatedText}
            <span className="absolute right-0 top-0 bottom-0 w-0.5 bg-white animate-pulse"></span>
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          variants={scrollVariants}
          style={{ fontFamily: "Ubuntu, sans-serif" }}
        >
          Experience the future of workplace management with desknet's NEO by Inspire.
        </motion.p>

        
      </motion.div>

      {/* Scroll down arrow */}
      <motion.button
        onClick={scrollToWhy}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-[#03acff] transition-colors duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="text-sm mt-2 font-medium">Scroll to learn more</span>
        </motion.div>
      </motion.button>

      {/* Subtle floating shapes for background interest */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#03acff]/10 blur-[80px] -z-1"
        animate={{
          x: ["-5%", "5%", "-5%"],
          y: ["-5%", "5%", "-5%"],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-64 rounded-full bg-[#341bca]/10 blur-[100px] -z-1"
        animate={{
          x: ["5%", "-5%", "5%"],
          y: ["5%", "-5%", "5%"],
          transition: {
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
}