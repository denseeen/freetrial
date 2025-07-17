"use client";

import React from 'react'; // Corrected import to 'React'

export default function CTA() {
  return (
    // Outer div to control the full screen background and centering
    <div className="flex items-center justify-center bg-white">
      <section className="w-full max-w-4xl mx-auto my-5"> {/* Added mx-auto for horizontal centering */}
        <div className="bg-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-200">
          <div className="p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">Ready to Transform Your Workplace?</h2>
            <p className="text-xl text-blue-800 mb-10 max-w-2xl mx-auto opacity-90">
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