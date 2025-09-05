"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      description: "Work hassle-free with Desknet’s NEO"
    },
    // {
    //   image: "/Manufacturing.png",
    //   pdf: "/pdf/NEO Manufacturing Case Study.pdf",
    //   title: "Restaurant Operations Digitalization",
    //   description: "Improving order management and staff coordination for restaurants."
    // },
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
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white min-h-screen font-[ubuntu]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#03acff] tracking-tight">
            CASE STUDIES
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how companies across various industries leverage{" "}
            <span className="font-semibold text-[#03acff]">desknet's NEO by Inspire</span>{" "}
            to transform their operations and achieve success.
          </p>
        </div>
      </div>
      
      {/* Carousel Section (Full-width) */}
      <div
        className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden shadow-2xl mb-20"
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
                <a
                  href={carouselItems[currentIndex].pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#03acff] text-white font-semibold rounded-full shadow-lg hover:bg-[#03acff] transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="mr-2" size={20} />
                  View PDF
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/60 text-[#03acff] rounded-full shadow-lg hover:bg-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#03acff]/50"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/60 text-[#03acff] rounded-full shadow-lg hover:bg-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#03acff]/50"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm border-2 border-white ${
                currentIndex === index ? 'bg-[#03acff] scale-125' : 'bg-white/80 hover:bg-[#03acff]/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      {/* End Carousel Section */}
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Clients by Industry
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            These are some of the companies from different industries that use{" "}
            <span className="font-semibold text-[#03acff]">desknet's NEO by Inspire</span>{" "}
            to streamline their operations and enhance productivity.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{industry.icon}</span>
                <h2 className="text-2xl font-bold text-[#03acff] tracking-wide">
                  {industry.name}
                </h2>
              </div>
              <ul className="space-y-4">
                {industry.companies.map((company, compIndex) => (
                  <li
                    key={compIndex}
                    className="p-4 bg-gray-50 rounded-xl transition-all duration-200 hover:bg-blue-50/50"
                  >
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {company.name}
                    </h3>
                    <div className="text-sm text-gray-600 mt-1 space-y-1">
                      <p className="flex items-center">
                        <span className="text-lg mr-2">👥</span> {company.users}
                      </p>
                      {company.subscription && (
                        <p className="flex items-center">
                          <span className="text-lg mr-2">⏳</span> {company.subscription}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Citation Note */}
        <div className="mt-20 text-sm text-gray-500 text-center">
          <p>
            Source: NEO Philippine Tech Inc. Case Studies.{" "}
            <a
              href="https://www.dneoph.com/case-study"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#03acff] hover:underline"
            >
              https://www.dneoph.com/case-study
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}