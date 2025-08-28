"use client";

import React from 'react';

export default function CTA() {
  return (
    // Outer div to control the full screen background and centering
    <div className="flex items-center justify-center bg-gray-300 font-[ubuntu] py-16 px-4 sm:px-6 lg:px-8"> {/* Made outer background even darker */}
      <section className="w-full max-w-4xl mx-auto">
        <div className="bg-blue-900 rounded-2xl shadow-2xl overflow-hidden border border-blue-700"> {/* Darker blue background for the card */}
          <div className="p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Workplace?</h2> {/* White text for contrast */}
            <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto opacity-90"> {/* Lighter blue text for readability */}
              Join the growing number of forward-thinking Philippine businesses already harnessing the power of desknet's NEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white font-semibold py-4 px-10 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
                Schedule a Personalized Demo
              </button>
              <button className="bg-white border-2 border-blue-600 text-blue-700 font-semibold py-4 px-10 rounded-lg hover:bg-blue-50 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
                Explore Our Plans
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}