"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function CaseStudy() {
  const industries = [
    {
      name: "Manufacturing Industry",
      icon: "🏭",
      companies: [
        { name: "Philippines EDS Techno-Service, Inc.", users: "800 Users" },
        { name: "Pilot", users: "1,500 Users", subscription: "6 Months subscription" },
      ]
    },
    {
      name: "Travel Industry",
      icon: "✈️",
      companies: [
        { name: "H.I.S Travel Corporation", users: "36 Users", subscription: "3 Months subscription" },
      ]
    },
    {
      name: "Government Industry",
      icon: "🏛️",
      companies: [
        { name: "Kobe City", users: "20,166 Users", subscription: "2 Years subscription" },
        { name: "Ohda City Hall", users: "570 Users" },
      ]
    },
    {
      name: "Construction Industry",
      icon: "🏗️",
      companies: [
        { name: "Sankei Construction Co., Ltd.", users: "300 Users", subscription: "3 Months subscription" },
        { name: "Mitsubishi Estate Home", users: "500 Users" },
      ]
    },
    {
      name: "Retail Industry",
      icon: "🛍️",
      companies: [
        { name: "Nakaniwa Tokei", users: "25 Users", subscription: "6 Months subscription" },
        { name: "Life Corporation", users: "6,000 Users", subscription: "20 Months subscription" },
      ]
    },
    {
      name: "Logistics Industry",
      icon: "🚚",
      companies: [
        { name: "Zero", users: "750 Users" },
        { name: "Morikuni", users: "70 Users", subscription: "3 Months subscription" },
      ]
    },
    {
      name: "Healthcare Industry",
      icon: "🏥",
      companies: [
        { name: "Seirei Welfare Corporation", users: "14,000 Users" },
        { name: "Eijukai Medical Corporation", users: "190 Users" },
      ]
    },
    {
      name: "Restaurant Industry",
      icon: "🍽️",
      companies: [
        { name: "Aleph", users: "600 Users" },
        { name: "Wins Japan", users: "70 Users", subscription: "6 Months" },
      ]
    },
    {
      name: "University Industry",
      icon: "🎓",
      companies: [
        { name: "Tokyo Healthcare University", users: "2,500 Users" },
        { name: "Musashino University", users: "1,345 Users", subscription: "10 Months" },
      ]
    },
    {
      name: "IT Industry",
      icon: "💻",
      companies: [
        { name: "Inet Corporation", users: "1,700 Users" },
        { name: "System Approach", users: "25 Users" },
      ]
    },
    {
      name: "Non-Government Unit (NGO) Industry",
      icon: "🤝",
      companies: [
        { name: "Osaka Water Comprehensive Service", users: "300 Users" },
      ]
    }
  ];

  // More realistic case study images
  const pdfPageImages = [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === pdfPageImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [pdfPageImages.length, isHovering]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === pdfPageImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pdfPageImages.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const industryRefs = useRef([]);
  industryRefs.current = [];

  const addToRefs = (el) => {
    if (el && !industryRefs.current.includes(el)) {
      industryRefs.current.push(el);
    }
  };

  const industryItemVariants = {
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
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white min-h-screen font-[ubuntu]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            CASE STUDIES
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how companies across various industries leverage Desknet's NEO to transform their operations
          </p>
        </div>

        {/* Carousel Section */}
        <div 
          className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl mb-16 bg-gray-200 flex items-center justify-center border-4 border-blue-500 dark:border-blue-400"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="absolute w-full h-full"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <img
                src={pdfPageImages[currentIndex]}
                alt={`Case Study Page ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Success Story #{currentIndex + 1}</h3>
                  <p className="text-lg opacity-90">How we helped transform their business operations</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 flex space-x-2 z-20">
            {pdfPageImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mb-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            These are some of the companies from different industries that use Desknet's NEO to streamline their operations and enhance productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => {
            const industryRef = useRef(null);
            const isIndustryInView = useInView(industryRef, { once: true, amount: 0.1 });

            return (
              <motion.div
                key={index}
                ref={industryRef}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-300"
                variants={industryItemVariants}
                initial="hidden"
                animate={isIndustryInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{industry.icon}</span>
                  <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {industry.name}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {industry.companies.map((company, compIndex) => (
                    <li 
                      key={compIndex} 
                      className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {company.name}
                      </h3>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
                        <p>👥 {company.users}</p>
                        {company.subscription && <p>⏳ {company.subscription}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 rounded-2xl p-8 md:p-12 text-center shadow-xl mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to see how we can help your business?</h3>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Download our complete case study compilation to learn more about our success stories across industries.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1TUyKMHNY2K6H4EPxKSQMMTCgiJBsOeYT?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <Download className="mr-2" size={20} />
            Download Case Studies (PDF)
          </a>
        </div>

        {/* Citation Note */}
        <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
          <p>
            NEOPhilippine Tech Inc. Case Studies.{" "}
            <a
              href="https://www.dneoph.com/case-study"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              https://www.dneoph.com/case-study
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}