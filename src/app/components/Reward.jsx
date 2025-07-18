"use client";

import React from 'react';
import { Star, Award, Users, Trophy, Heart, Globe } from 'lucide-react';
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

const App = () => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] ${ubuntu.variable} font-sans text-gray-900 flex flex-col items-center py-16 px-4 sm:px-8`}>
      {/* Header */}
      <header className="w-full max-w-6xl text-center mb-16">
        <div className="inline-flex items-center justify-center px-4 py-2 bg-[#03acff]/10 rounded-full mb-6">
          <span className="text-sm font-medium text-[#341bca] tracking-wider">OUR ACHIEVEMENTS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Recognized <span className="text-[#03acff]">Excellence</span> in Innovation
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Celebrating the milestones and recognition that drive our commitment to delivering exceptional business solutions.
        </p>
      </header>

      {/* Featured Achievement - Hero Card */}
      <div className="w-full max-w-6xl mb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-[#03acff] to-[#341bca] p-8 flex flex-col items-center justify-center">
              <Trophy className="w-12 h-12 text-white mb-4" />
              <h3 className="text-white text-xl font-medium mb-2 tracking-wide">Top 100</h3>
              <p className="text-white text-center tracking-wider">BestSoftware 2025</p>
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Recognized as a Leading Innovator
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desknet's NEO has been selected as one of the top 100 business software solutions for 2025, recognized for our innovative approach to workplace productivity and collaboration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#03acff]/10 text-[#341bca] tracking-wide">
                  Enterprise Software
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#03acff]/10 text-[#341bca] tracking-wide">
                  Groupware Solutions
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#03acff]/10 text-[#341bca] tracking-wide">
                  Business Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Cards Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Customer Satisfaction */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="w-12 h-12 bg-[#03acff]/10 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#341bca]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Rank No.1</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              in Customer Satisfaction in the groupware and business chat category (2018-2023)
            </p>
            <div className="text-sm font-medium text-[#03acff] flex items-center tracking-wide">
              <span>Nikkei Computer</span>
            </div>
          </div>
        </div>

        {/* Global Users */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="w-12 h-12 bg-[#03acff]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#341bca]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">5 Million+ Users</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Worldwide adoption across SMEs, enterprises, and government agencies
            </p>
            <div className="text-sm font-medium text-[#03acff] flex items-center tracking-wide">
              <span>Global Reach</span>
            </div>
          </div>
        </div>

        {/* Best in Japan */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="w-12 h-12 bg-[#03acff]/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#341bca]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Best in Japan 2025</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Recognized as top business software with excellence in innovation
            </p>
            <div className="text-sm font-medium text-[#03acff] flex items-center tracking-wide">
              <span>Tokyo Stock Exchange</span>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">
          Our Journey to Excellence
        </h2>
        
        <div className="space-y-8">
          {/* Milestone 1 */}
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#03acff]/10 text-[#341bca]">
                <Star className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight">
                Customer Satisfaction Leader
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ranked No. 1 in Customer Satisfaction in the groupware and business chat category by Nikkei Computer for six consecutive years (2018–2023).
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#03acff]/10 text-[#341bca]">
                <Globe className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight">
                Global Adoption
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Over 5 million users worldwide as of May 2025, spanning SMEs, large enterprises, government agencies, educational institutions, and local governments.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#03acff]/10 text-[#341bca]">
                <Trophy className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight">
                Industry Recognition
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hailed as one of the Best Software in Japan 2025, listed on the Section of the Tokyo Stock Exchange.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-[#03acff] to-[#341bca] rounded-xl p-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
          Join Our Growing Community
        </h2>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed tracking-wide">
          Be part of the 5 million+ users transforming their workplace with Desknet's NEO.
        </p>
        <button className="bg-white text-[#341bca] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 tracking-wide">
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default App;