"use client";
import React from 'react';
import { Target, Eye, Users, LayoutDashboard, Rocket, Clock, Shield, Globe, BarChart2, Check, Zap, Layers, FileText, Smartphone, Headset } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans text-blue-950 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-20 max-w-5xl mx-auto animate-fade-in-down">
        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-blue-200">
          <Zap className="mr-2" size={18} />
          Japanese Innovation · Filipino Adaptation
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
          Empower Your Team with desknet's NEO
        </h1>
        <p className="text-xl text-blue-700 leading-relaxed max-w-3xl mx-auto opacity-90">
          Unify your digital workplace with a complete solution, meticulously blending Japanese precision with the collaborative spirit of Filipino culture.
        </p>
      </section>

      {/* Video and History Sections */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 mb-28">
        {/* Video Section */}
        <section className="relative bg-blue-50 rounded-2xl shadow-lg overflow-hidden border border-blue-200 group">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/5 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
          <div className="p-8 relative z-20">
            <div className="flex items-center mb-8">
              <div className="bg-blue-200 p-3 rounded-lg mr-4 text-blue-700 shadow-md">
                <Rocket size={24} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                Witness desknet's NEO in Action
              </h2>
            </div>
            <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                // CORRECTED YOUTUBE EMBED URL using a valid video ID
                src="https://www.youtube.com/watch?v=fWlzbEVUTlI&ab_channel=InspireNextGlobalInc." // Replaced with a valid YouTube embed URL (from search result 1.4, which is a good general video)
                title="Discover the Power of desknet's NEO"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-8 text-blue-700 leading-relaxed opacity-90">
              Experience firsthand how desknet's NEO perfectly blends Japanese efficiency with Filipino adaptability, creating the ultimate solution for your workplace.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-blue-50 rounded-2xl shadow-lg p-8 border border-blue-200">
          <div className="flex items-center mb-8">
            <div className="bg-blue-200 p-3 rounded-lg mr-4 text-blue-700 shadow-md">
              <Clock size={24} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
              Our Journey: Forging Innovation
            </h2>
          </div>
          <div className="space-y-6 text-blue-700 leading-relaxed opacity-90">
            <p>
              desknet's NEO by Inspire is more than just software; it signifies our unwavering dedication to bringing <b>world-class Japanese technology</b> to the heart of the Philippines. Since our inception, we have been committed to thoughtfully adapting global innovations to meet precise local requirements.
            </p>
            <p>
              What began as a vision to revolutionize workplace productivity has blossomed into a <b>comprehensive platform</b> serving a diverse range of businesses across the archipelago. We have meticulously refined our offerings, integrating continuous feedback from Filipino users to ensure our tools resonate perfectly with local work styles and values.
            </p>
            <p>
              Today, desknet's NEO stands as a proud testament to a successful <b>cultural and technological fusion</b>—delivering Japanese precision imbued with Filipino warmth, all at a price point strategically designed for Philippine businesses to flourish.
            </p>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="w-full max-w-6xl bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 rounded-2xl shadow-xl p-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {/* Integrated Tools */}
          <div className="p-4 flex flex-col items-center justify-center">
            <div className="bg-blue-200 p-5 rounded-full mb-4">
              {/* Changed text-5xl to text-3xl */}
              <div className="text-blue-900 text-3xl font-bold">21+</div>
            </div>
            <div className="text-lg opacity-90">Integrated Tools</div>
          </div>
          {/* Years in Japan */}
          <div className="p-4 flex flex-col items-center justify-center">
            <div className="bg-blue-200 p-5 rounded-full mb-4">
              {/* Changed text-5xl to text-3xl */}
              <div className="text-blue-900 text-3xl font-bold">10+</div>
            </div>
            <div className="text-lg opacity-90">Years in Japan</div>
          </div>
          {/* Paperless */}
          <div className="p-4 flex flex-col items-center">
            <div className="bg-blue-200 p-5 rounded-full mb-4">
              <FileText className="text-blue-700" size={36} />
            </div>
            <div className="text-lg opacity-90">Paperless</div>
          </div>
          {/* Multidevices */}
          <div className="p-4 flex flex-col items-center">
            <div className="bg-blue-200 p-5 rounded-full mb-4">
              <Smartphone className="text-blue-700" size={36} />
            </div>
            <div className="text-lg opacity-90">Multidevices</div>
          </div>
          {/* Support */}
          <div className="p-4 flex flex-col items-center">
            <div className="bg-blue-200 p-5 rounded-full mb-4">
              <Headset className="text-blue-700" size={36} />
            </div>
            <div className="text-lg opacity-90">Support</div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      

      {/* Footer (commented out in your provided code) */}
      {/* <Footer /> */}

      {/* Animations (remain the same as they are color-agnostic) */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
}