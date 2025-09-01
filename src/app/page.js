'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
// import Comp from "./components/Complimentary";
import Hero from "./components/Hero"; 
import About from "./components/About"; 
import MissionVission from './components/MissionVission';
import CTA from './components/CTA';
import Reward from './components/Reward'; // Import the MissionVision component
import Why from './components/Why'; // Import the Why component
import  Goal  from './components/Goal'; // Import the Goal component
import Outstanding from './components/Outstanding'; // Import the Outstanding component
import  Plan  from './components/Plan';
import  Contact  from './components/Contact';
import { Summary } from './components/Summary';
import Trusted from './components/Trusted';

export default function Home() { // Renamed to Home (standard React practice)
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-[#3C8CDE] min-h-screen"> {/* This is the single parent div */}
      <Hero/>
      <section className="bg-[#3C8CDE] py-10">
        <div className="max-w-7xl mx-auto px-4">
        <Why/> 
        </div>
      </section>
      <About/>
      {/* Section for Mission and Vision */}
      <section className="bg-[#3C8CDE] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <MissionVission/> 
        </div>
      </section>
      <Reward/> {/* Render the Reward component */}
      <Trusted/>
      <Goal/> {/* Render the Goal component */}
      
      <Summary/>
      <Outstanding/> {/* Render the Outstanding component */}
      <Plan/> {/* Render the Plan component */}
      <Contact/>
      {/* <CTA/>  */}
      {/* <Comp/> */}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#03acff] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-50 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}