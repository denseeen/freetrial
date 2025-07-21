import React from "react";

export default function WhyChooseUs() {
  return (
    // Section container with white background
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title - using primary color #03acff */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#03acff]">
          Why Choose desknet's NEO?
        </h2>
        {/* Subtitle - using black #000000 */}
        <p className="text-lg md:text-xl text-black mb-12">
          Japan's Most Popular Collaboration Software
        </p>

        {/* Features Grid - Changed grid-cols-3 to grid-cols-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Feature 1: Intuitive and User-friendly */}
          <div className="flex flex-col items-center">
            {/* Icon Circle - using primary color with white icon */}
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-[#03acff] flex items-center justify-center mb-6 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 md:h-20 md:w-20 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#341bca]">
              Intuitive and User-friendly
            </h3>
            <p className="text-gray-700">Easy-to-use interface for all users</p>
          </div>

          {/* Feature 2: Trustworthy Security */}
          <div className="flex flex-col items-center">
            {/* Icon Circle - using highlight color with white icon */}
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-[#341bca] flex items-center justify-center mb-6 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 md:h-20 md:w-20 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl text-[#341bca] font-semibold mb-2">
              Trustworthy Security
            </h3>
            <p className="text-gray-700">Enterprise-grade protection</p>
          </div>

          {/* Feature 3: Affordable and Accessible */}
          <div className="flex flex-col items-center">
            {/* Icon Circle - using primary color with white icon */}
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-[#03acff] flex items-center justify-center mb-6 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 md:h-20 md:w-20 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zM8 13c-2.67 0-8 1.34-8 4v2h8v-2c0-.69.1-1.36.29-2H8z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl text-[#341bca] font-semibold mb-2">
              Affordable and Accessible
            </h3>
            <p className="text-gray-700">
              Cost-effective for businesses of all sizes
            </p>
          </div>

          {/* New Feature: Paperless Efficiency */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-[#03acff] flex items-center justify-center mb-6 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 md:h-20 md:w-20 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl text-[#341bca] font-semibold mb-2">
              Paperless Efficiency
            </h3>
            <p className="text-gray-700">
              Streamline workflows and reduce waste with digital documents and
              approvals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
