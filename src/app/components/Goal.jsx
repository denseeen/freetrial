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

      {/* Concluding statement */}
      <div className="w-full max-w-6xl text-center mt-12">
        <p className="text-xl sm:text-2xl font-semibold text-gray-800 leading-relaxed">
          Together, Inspire Next Global Inc. and Desknet’s NEO are creating a future where technology meets tradition, and where Filipino workplaces thrive with purpose.
        </p>
      </div>
    </div>
  );
};

export default Partnership;