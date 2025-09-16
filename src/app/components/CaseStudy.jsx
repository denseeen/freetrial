"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, Building, Globe, Headset, Zap, Users, Calendar, Package, Mail, Clock, BarChart3, Star, ArrowRight, Play, CheckCircle, Award, Target, Leaf, Lightbulb, Shield, Settings } from 'lucide-react';

export default function CaseStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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

  const carouselItems = [
    {
      image: "/images/Advertising.png",
      pdf: "/pdf/Advertising_and_Publishing.pdf",
      title: "Advertising and Publishing",
      description: "By streamlining complicated tasks and communication, you can increase the amount of time available for creative idea generation."
    },
    {
      image: "/images/Education.png",
      pdf: "/pdf/Education.pdf",
      title: "Education",
      description: "Groupware for promoting the computerization of school administration"
    },
    {
      image: "/images/Finance.png",
      pdf: "/pdf/financeusagedeskneten-US.pdf",
      title: "Finance",
      description: "Modernizing public services with a secure and intuitive platform."
    },
    {
      image: "/images/Thorough.png",
      pdf: "/pdf/groupware_mynavicomparisonen-U.pdf",
      title: "Thorough Comparison",
      description: "Functions and Costs"
    },
    {
      image: "/images/solution.png",
      pdf: "/pdf/manufacturingusageofdesknetneoen-US.pdf",
      title: "Solution",
      description: "In other words, it is essential to use it in conjunction with domestic groupware"
    },
    {
      image: "/images/Goverment.png",
      pdf: "/NEOGovernmentCaseStudy.pdf",
      title: "Government Industry Case Study",
      description: "Work hassle-free with Desknet's NEO"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length, isHovering]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
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

  return (
    <section ref={ref} className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center text-black px-4 md:px-8 overflow-hidden min-h-screen">
      {/* Background shapes for a dynamic feel - Matching Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"
      ></motion.div>

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
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="text-[#03acff] text-4xl sm:text-5xl md:text-6xl" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Case Studies
            </h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
          >
            Discover how companies across various industries leverage{" "}
            <span className="font-semibold text-[#03acff]">desknet's NEO</span>{" "}
            to transform their operations and achieve success.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Carousel Section (Full-width) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden shadow-2xl mb-20 max-w-7xl mx-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
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
              src={carouselItems[currentIndex].image}
              alt={`Case Study Page ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* Content Overlay */}
            <div className="absolute bottom-0 w-full p-8 md:p-12">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 max-w-lg mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-[#03acff] mb-2 leading-tight">
                  {carouselItems[currentIndex].title}
                </h3>
                <p className="text-sm md:text-lg text-gray-700 mb-4">
                  {carouselItems[currentIndex].description}
                </p>
                <motion.a
                  href={carouselItems[currentIndex].pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#03acff] text-white font-semibold rounded-full shadow-lg hover:bg-[#03acff] transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="mr-2" size={20} />
                  View PDF
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/60 text-[#03acff] rounded-full shadow-lg hover:bg-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#03acff]/50"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={32} />
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/60 text-[#03acff] rounded-full shadow-lg hover:bg-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#03acff]/50"
          aria-label="Next slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={32} />
        </motion.button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {carouselItems.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm border-2 border-white ${
                currentIndex === index ? 'bg-[#03acff] scale-125' : 'bg-white/80 hover:bg-[#03acff]/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            ></motion.button>
          ))}
        </div>
      </motion.div>
      {/* End Carousel Section */}
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Industry Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building className="text-[#03acff] text-3xl sm:text-4xl md:text-5xl" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Our Clients by Industry
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
          >
            These are some of the companies from different industries that use{" "}
            <span className="font-semibold text-[#03acff]">desknet's NEO</span>{" "}
            to streamline their operations and enhance productivity.
          </motion.p>
        </motion.div>

        {/* Industry Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.5 + (index * 0.1) }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">{industry.icon}</span>
                <h2 className="text-xl md:text-2xl font-bold text-[#03acff] tracking-wide">
                  {industry.name}
                </h2>
              </div>
              <ul className="space-y-4">
                {industry.companies.map((company, compIndex) => (
                  <motion.li
                    key={compIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 1.7 + (index * 0.1) + (compIndex * 0.05) }}
                    className="p-4 bg-gray-50/80 backdrop-blur-sm rounded-xl transition-all duration-200 hover:bg-blue-50/50 hover:shadow-md"
                  >
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {company.name}
                    </h3>
                    <div className="text-sm text-gray-600 mt-2 space-y-1">
                      <p className="flex items-center">
                        <span className="text-lg mr-2">👥</span> {company.users}
                      </p>
                      {company.subscription && (
                        <p className="flex items-center">
                          <span className="text-lg mr-2">⏳</span> {company.subscription}
                        </p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Citation Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mt-20 text-sm text-gray-500 text-center"
        >
          <p>
            Source: NEO Philippine Tech Inc. Case Studies.{" "}
            <a
              href="https://www.dneoph.com/case-study"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#03acff] hover:underline font-medium"
            >
              https://www.dneoph.com/case-study
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}