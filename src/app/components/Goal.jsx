"use client";

import React from 'react';
import { Target, Leaf, Users, Handshake, Lightbulb, Globe } from 'lucide-react';
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

const Partnership = () => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] ${ubuntu.variable} font-sans text-gray-900 flex flex-col items-center py-16 px-4 sm:px-8`}>
      {/* Hero Section */}
      <div className="w-full max-w-6xl text-center mb-16">
        <div className="inline-flex items-center justify-center px-4 py-2 bg-[#03acff]/10 rounded-full mb-6">
          <span className="text-sm font-medium text-[#341bca] tracking-wider">STRATEGIC PARTNERSHIP</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          The Vision Behind Our <span className="text-[#03acff]">Partnership</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transforming Filipino workplaces through Japanese innovation and digital excellence.
        </p>
      </div>

      {/* Partnership Intro */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-[#03acff] to-[#341bca] rounded-full flex items-center justify-center">
              <Handshake className="w-16 h-16 text-white" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              More Than Just a Business Alliance
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The collaboration between Desknet's NEO and Inspire Next Global Inc. is a shared mission to reshape how Filipino teams work, collaborate, and grow. By blending trusted Japanese innovations with Filipino ingenuity, we're opening doors to smarter, more meaningful work experiences.
            </p>
            <div className="text-[#03acff] font-medium flex items-center">
              <span>Our Shared Goals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Goals */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Goal 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="w-12 h-12 bg-[#03acff]/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#341bca]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Japanese Work Culture</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Bringing Japan's renowned work ethic - structure, discipline, and continuous improvement - to Filipino teams through Desknet's NEO.
            </p>
          </div>
        </div>

        {/* Goal 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="w-12 h-12 bg-[#03acff]/10 rounded-lg flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-[#341bca]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Sustainable Workplaces</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Promoting paperless offices with complete digital workspaces that reduce clutter and support eco-friendly business practices.
            </p>
          </div>
        </div>

        {/* Goal 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="w-12 h-12 bg-[#03acff]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#341bca]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Accessible Innovation</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Making powerful digital tools available to every team - from startups to government agencies - with intuitive, reliable software.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Partnership Section */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">
          Our Partnership in Action
        </h2>
        
        <div className="space-y-8">
          {/* Point 1 */}
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#03acff]/10 text-[#341bca]">
                <Lightbulb className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight">
                Cultural Exchange Through Technology
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We're bridging Japanese efficiency with Filipino creativity, creating work solutions that respect both cultures while driving productivity.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#03acff]/10 text-[#341bca]">
                <Globe className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight">
                Localized Global Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                While Desknet's NEO brings Japanese innovation, Inspire Next Global ensures it's perfectly adapted to Filipino workplace needs and contexts.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#03acff]/10 text-[#341bca]">
                <Target className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight">
                Future-Ready Workplaces
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Together, we're building digital workplaces that can adapt to tomorrow's challenges while solving today's productivity pain points.
              </p>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Partnership;