"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, FileText } from 'lucide-react'; // Added FileText icon

export default function CaseStudy() {
  const industries = [
    {
      name: "Manufacturing Industry",
      icon: "🏭", // Added icon
      companies: [
        { name: "Philippines EDS Techno-Service, Inc.", users: "800 Users" },
        { name: "Pilot", users: "1,500 Users", subscription: "6 Months subscription" },
      ]
    },
    {
      name: "Travel Industry",
      icon: "✈️", // Added icon
      companies: [
        { name: "H.I.S Travel Corporation", users: "36 Users", subscription: "3 Months subscription" },
      ]
    },
    {
      name: "Government Industry",
      icon: "🏛️", // Added icon
      companies: [
        { name: "Kobe City", users: "20,166 Users", subscription: "2 Years subscription" },
        { name: "Ohda City Hall", users: "570 Users" },
      ]
    },
    {
      name: "Construction Industry",
      icon: "🏗️", // Added icon
      companies: [
        { name: "Sankei Construction Co., Ltd.", users: "300 Users", subscription: "3 Months subscription" },
        { name: "Mitsubishi Estate Home", users: "500 Users" },
      ]
    },
    {
      name: "Retail Industry",
      icon: "🛍️", // Added icon
      companies: [
        { name: "Nakaniwa Tokei", users: "25 Users", subscription: "6 Months subscription" },
        { name: "Life Corporation", users: "6,000 Users", subscription: "20 Months subscription" },
      ]
    },
    {
      name: "Logistics Industry",
      icon: "🚚", // Added icon
      companies: [
        { name: "Zero", users: "750 Users" },
        { name: "Morikuni", users: "70 Users", subscription: "3 Months subscription" },
      ]
    },
    {
      name: "Healthcare Industry",
      icon: "🏥", // Added icon
      companies: [
        { name: "Seirei Welfare Corporation", users: "14,000 Users" },
        { name: "Eijukai Medical Corporation", users: "190 Users" },
      ]
    },
    {
      name: "Restaurant Industry",
      icon: "🍽️", // Added icon
      companies: [
        { name: "Aleph", users: "600 Users" },
        { name: "Wins Japan", users: "70 Users", subscription: "6 Months" },
      ]
    },
    {
      name: "University Industry",
      icon: "🎓", // Added icon
      companies: [
        { name: "Tokyo Healthcare University", users: "2,500 Users" },
        { name: "Musashino University", users: "1,345 Users", subscription: "10 Months" },
      ]
    },
    {
      name: "IT Industry",
      icon: "💻", // Added icon
      companies: [
        { name: "Inet Corporation", users: "1,700 Users" },
        { name: "System Approach", users: "25 Users" },
      ]
    },
    {
      name: "Non-Government Unit (NGO) Industry",
      icon: "🤝", // Added icon
      companies: [
        { name: "Osaka Water Comprehensive Service", users: "300 Users" },
      ]
    }
  ];

  // Carousel items now include image, PDF URL, title, and description
  const carouselItems = [
    {
      image: "/images/Advertising.png",
      pdf: "/pdf/Advertising_and_Publishing.pdf", // Placeholder PDF URL 1
      title: "Advertising and Publishing",
      description: "By streamlining complicated tasks and communication, you can increase the amount of time available for creative idea generation."
    },
    {
      image: "/images/Education.png",
      pdf: "/pdf/Education.pdf", // Placeholder PDF URL 2
      title: "Education",
      description: "Groupware for promoting the computerization of school administration"
    },
    {
      image: "/images/Finance.png",
      pdf: "/pdf/financeusagedeskneten-US.pdf", // Placeholder PDF URL 3
      title: "Finance",
      description: "Modernizing public services with a secure and intuitive platform."
    },
    {
      image: "/images/Thorough.png",
      pdf: "/pdf/groupware_mynavicomparisonen-U.pdf", // Placeholder PDF URL 4
      title: "Thorough Comparison",
      description: "Functions and Costs"
    },
    {
      image: "/images/solution.png",
      pdf: "/pdf/manufacturingusageofdesknetneoen-US.pdf", // Placeholder PDF URL 5
      title: "Solution",
      description: "In other words, it is essential to use it in conjunction with domestic groupware"
    },
    {
      image: "https://placehold.co/800x600/3C8CDE/ffffff?text=PDF+Case+Study+6",
      pdf: "/pdf/ms365_neotogetheren-US.pdf", // Placeholder PDF URL 6
      title: "Logistics Optimization",
      description: "Streamlining supply chain and delivery processes."
    },
    {
      image: "/images/Goverment.png",
      pdf: "/NEOGovernmentCaseStudy.pdf", // Placeholder PDF URL 7
      title: "Government Industry Case Study",
      description: "Work hassle-free with Desknet’s NEO"
    },
    {
      image: "/Manufacturing.png",
      pdf: "/pdf/NEOManufacturingCaseStudy.pdf", // Placeholder PDF URL 8
      title: "Restaurant Operations Digitalization",
      description: "Improving order management and staff coordination for restaurants."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false); // State for carousel hover

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (isHovering) return; // Pause if hovering over carousel

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [carouselItems.length, isHovering]); // Dependency on isHovering

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

  // Refs and animations for industry sections
  const industryRefs = useRef([]);
  industryRefs.current = []; // Clear refs on re-render

  // Helper function to add elements to the refs list
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
      <div className="max-w-6xl mx-auto"> {/* Increased max-width */}
        <div className="text-center mb-16"> {/* Increased bottom margin */}
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
          onMouseEnter={() => setIsHovering(true)} // Pause auto-play on hover
          onMouseLeave={() => setIsHovering(false)} // Resume auto-play on mouse leave
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
                src={carouselItems[currentIndex].image} // Use image from carouselItems
                alt={`Case Study Page ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Improved Glassy Text Overlay */}
              <div className="absolute inset-0 flex items-end p-8">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-lg w-full">
                  <div className="w-10 h-1 bg-[#3C8CDE] rounded-full mb-3"></div>
                  <h3 className="text-2xl font-bold text-[#3C8CDE] mb-2">{carouselItems[currentIndex].title}</h3>
                  <p className="text-lg text-gray-700 mb-4">{carouselItems[currentIndex].description}</p>
                  <a
                    href={carouselItems[currentIndex].pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#3C8CDE] text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
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
            className="absolute left-4 z-20 p-4 bg-white text-[#3C8CDE] rounded-full shadow-lg hover:bg-[#3C8CDE] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3C8CDE]"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 z-20 p-4 bg-white text-[#3C8CDE] rounded-full shadow-lg hover:bg-[#3C8CDE] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3C8CDE]"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-6 flex space-x-2 z-20">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 shadow-md border-2 border-white ${
                  currentIndex === index ? 'bg-[#3C8CDE] scale-125' : 'bg-white/60 hover:bg-[#3C8CDE]/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        {/* End Carousel Section */}

        <div className="mb-16 text-center"> {/* Consolidated paragraph and added margin */}
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            These are some of the companies from different industries that use Desknet's NEO to streamline their operations and enhance productivity.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"> {/* Adjusted grid and margin */}
          {industries.map((industry, index) => {
            const industryRef = useRef(null);
            const isIndustryInView = useInView(industryRef, { once: true, amount: 0.1 }); // Animate once on scroll

            return (
              <motion.div
                key={index}
                ref={industryRef}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-300"
                variants={industryItemVariants}
                initial="hidden"
                animate={isIndustryInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }} /* Added subtle lift on hover */
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{industry.icon}</span> {/* Display industry icon */}
                  <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {industry.name}
                  </h2>
                </div>
                <ul className="space-y-3"> {/* Added space between list items */}
                  {industry.companies.map((company, compIndex) => (
                    <li
                      key={compIndex}
                      className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {company.name}
                      </h3>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1"> {/* Added space-y-1 */}
                        <p>👥 {company.users}</p> {/* Added user icon */}
                        {company.subscription && <p>⏳ {company.subscription}</p>} {/* Added clock icon */}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section (Replaced old PDF Link) */}
     

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
