"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Building, Globe, Headset, Zap, Users, Calendar, Package, Mail, Clock, BarChart3, Star, ArrowRight, Play, CheckCircle, Award, Target, Leaf, Lightbulb, Shield, Settings, Download, HelpCircle } from 'lucide-react';

export default function Faqs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const faqs = [
    {
      question: "What is Desknet's NEO By Inspire?",
      answer: "Desknet's NEO is a high-end Japanese Software Application which you can use as a business collaboration platform for your company. It was developed by NEOJapan Inc. in 1999 in Yokohama, Japan and was introduced in the Philippines in 2021.\n\nDesknet's NEO By Inspire is the branding of Desknet's NEO in the Philippines under its collaboration with the Inspire Next Global Inc. It started to be introduced in the Philippines Market in 2024."
    },
    {
      question: "What are the main features included in Desknet's NEO By Inspire?",
      answer: "Schedule and Calendar Sharing – Keeping everyone synced.\nWebmail and Internal Chat – Making everyone connected.\nApproval Workflows – Lessen the paper cost/use of the company.\nAttendance and Time Tracking – Aside from being time accurate, it is also on-premises.\nShared Folders, Memos, and More!"
    },
    {
      question: "What is the function of AppSuite?",
      answer: "AppSuite is a no-code tool built into Desknet's NEO that lets you create custom forms, databases, dashboards, and internal business apps, no coding needed. AppSuite can be limitless as it can be used as an alternative for excel."
    },
    {
      question: "Is it available or accessible to any devices?",
      answer: "Yes! Desknet's NEO By Inspire is available on any device that can be used to access the Internet. An application of Desknet's NEO By Inspire is also available to download on IOS' Google Appstore and Android's Google Playstore."
    },
    {
      question: "I want to know more about Desknet's NEO By Inspire functions.",
      answer: `For self-taught access of Desknet's NEO By Inspire tools and functions, you can access the prepared User Manual in this website, you can also watch our ready-made videos on YouTube: Inspire Next Global Inc.
You can keep in-touch with us or send us your inquiries through our email sales@inspirenextglobal.com or dial through 09202260942 / 09992232797.
Want to schedule an introduction or on-boarding discussion? You can send your available schedule and location of your site/company through sales@inspirenextglobal.com.`
    },
    {
      question: "Is Desknet's NEO By Inspire customizable?",
      answer: "Yes! Desknet's NEO By Inspire offers extensive portal and UI customization options to match your organization's branding, workflows, and user preferences. You can easily integrate files, presentations, videos, and websites into your environment by converting their links into their embedded form. You can also manually adjust the size of your interface according to your needs."
    },
    {
      question: "What is collaboration software?",
      answer: "It is a tool for realizing smooth communication and efficient workflows within companies and organizations. It specializes in and focuses on easy information sharing, fluid communication, and streamline workflows."
    },
    {
      question: "Where can I pay my subscription fee?",
      answer: "You can pay your subscription fee via our authorized channel partners, making transactions easier, more secure, and accessible through your preferred local providers. You can choose whether you want to pay through BPI, UnionBank, Gcash, and or physical payment (through visiting our main office at 6F Alliance Global Tower, Uptown Mall in BGC, Taguig)."
    },
    {
      question: "How many months is the free-trial that Desknet's NEO By Inspire offers?",
      answer: "Desknet's NEO By Inspire is offering 1 Month free-trial. No bank details will be required during the on-boarding process of the free-trial, unlike the other software applications that require it.\n\nYou could enjoy up to 2 Months free-trial with Desknet's NEO By Inspire if you subscribed or signed a contract with us for 1 year!"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to render text with specific links (for the contact FAQ)
  const renderRichAnswer = (answerText) => {
    if (answerText.includes('sales@inspirenextglobal.com')) {
      return (
        <>
          For self-taught access of Desknet's NEO By Inspire tools and functions, you can access the prepared User Manual in this website, you can also watch our ready-made videos on YouTube:{' '}
          <a href="https://www.youtube.com/@InspireNextGlobalInc" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#03acff] font-medium">Inspire Next Global Inc.</a>
          <br /><br />
          You can keep in-touch with us or send us your inquiries through our email{' '}
          <a href="mailto:sales@inspirenextglobal.com" className="hover:underline text-[#03acff] font-medium">sales@inspirenextglobal.com</a> or dial through{' '}
          <a href="tel:+639202260942" className="hover:underline text-[#03acff] font-medium">09202260942</a> /{' '}
          <a href="tel:+639992232797" className="hover:underline text-[#03acff] font-medium">09992232797</a>.
          <br /><br />
          Want to schedule an introduction or on-boarding discussion? You can send your available schedule and location of your site/company through{' '}
          <a href="mailto:sales@inspirenextglobal.com" className="hover:underline text-[#03acff] font-medium">sales@inspirenextglobal.com</a>.
        </>
      );
    }
    // For other answers, split by newlines for paragraph breaks
    return answerText.split('\n').map((paragraph, pIndex) => (
      <p key={pIndex} className={pIndex > 0 ? "mt-2" : ""}>
        {paragraph}
      </p>
    ));
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
        <HelpCircle size={40} className="animate-bounce" />
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
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="text-[#03acff] text-4xl sm:text-5xl md:text-6xl" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Frequently Asked Questions
            </h1>
        </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            Find answers to common questions about Desknet NEO and get the information you need
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-[#03acff] shadow-xl' : 'border-gray-200'
              } hover:shadow-xl hover:border-[#03acff]/50`}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center text-lg font-semibold cursor-pointer transition-colors duration-200 focus:outline-none group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span
                  className={`text-lg md:text-xl font-bold transition-colors duration-200 ${
                    openIndex === index ? 'text-[#03acff]' : 'text-gray-900 group-hover:text-[#03acff]'
                  }`}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-6 h-6 transition-colors duration-200 ${
                    openIndex === index ? 'text-[#03acff]' : 'text-gray-400 group-hover:text-[#03acff]'
                  }`}
                >
                  <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 text-gray-700 border-t border-gray-100">
                {renderRichAnswer(faq.answer)}
              </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="mailto:sales@inspirenextglobal.com"
              className="px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg bg-[#03acff] text-white flex items-center gap-2 mx-auto w-fit"
            >
              <Mail className="text-xl" />
              Still Have Questions?
              <ArrowRight className="text-xl" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}