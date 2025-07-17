import React from 'react';
import Comp from "./components/Complimentary";
import Hero from "./components/Hero"; 
import About from "./components/About"; 
import MissionVission from './components/MissionVission';
import CTA from './components/CTA';
import Reward from './components/Reward'; // Import the MissionVision component

export const metadata = {
  title: 'Welcome to Desknets NEO by Inspire',
};

export default function Home() { // Renamed to Home (standard React practice)
  return (
    <div> {/* This is the single parent div */}


      <Hero/>

      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
      <MissionVission/> 
      </div>
      </section>
      <About/>
      <Reward/> {/* Render the Reward component */}
      <CTA/> {/* Render the CTA component */}
      <Comp/>
      
    </div>
  );
}