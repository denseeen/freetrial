import React from 'react';
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

export const metadata = {
  title: 'Welcome to Desknets NEO by Inspire',
};

export default function Home() { // Renamed to Home (standard React practice)
  return (
    <div className="bg-[#3C8CDE] min-h-screen"> {/* This is the single parent div */}


      <Hero/>
      <Why/> {/* Render the Why component */}

      {/* Section for Mission and Vision */}
      <section className="bg-[#3C8CDE] py-10">

        <div className="max-w-7xl mx-auto px-4">
      <MissionVission/> 
      </div>
      </section>
      <About/>
      <Reward/> {/* Render the Reward component */}
      <Goal/> {/* Render the Goal component */}
      <Summary/>
      <Outstanding/> {/* Render the Outstanding component */}
      <Plan/> {/* Render the Plan component */}
      <Contact/>
      {/* <CTA/>  */}
      {/* <Comp/> */}
      
    </div>
  );
}