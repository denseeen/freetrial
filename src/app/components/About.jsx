"use client"; // This directive is important for client-side rendering in Next.js

import React from 'react';

// Main About component for the About Us page
const About = () => {
  // YouTube video embed URL
  const youtubeVideoId = 'fWlzbEVUTlI'; // From the provided YouTube link
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 font-inter text-gray-800 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="w-full max-w-6xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#3C8CDE] leading-tight mb-4 drop-shadow-md">
          Our Story: Inspire Next Global Inc.
        </h1>
        <p className="text-xl text-gray-700">
          Bringing the Best of Japan to the Philippines
        </p>
      </header>

      {/* Main Content Section with YouTube Video First */}
      <main className="w-full max-w-6xl bg-white shadow-1xl rounded-2xl p-8 md:p-12 mb-16">
        {/* YouTube Video Section - Now at the top */}
        <section className="w-full flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center border-b-2 border-[#3C8CDE] pb-2 rounded-lg w-full">
            Discover Desknet's NEO
          </h2>
          {/* Responsive video container */}
          <div className="relative w-full rounded-xl shadow-lg overflow-hidden" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={youtubeEmbedUrl}
              title="Desknet's NEO by Inspire Next Global Inc."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-6 text-md">
            Watch this video to get a deeper insight into how Desknet's NEO can transform your workplace.
          </p>
        </section>

        {/* History Section - Now second */}
        <section className="w-full space-y-6 text-gray-800 text-lg leading-relaxed">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-[#3C8CDE] pb-2 rounded-lg">
            Our Journey with Desknet's NEO
          </h2>
          <p>
            <span className="font-semibold text-[#3C8CDE]">Desknet's NEO by Inspire</span> is more than just a software application focusing on business tools; it's a reflection of the Inspire Next Global Inc.'s passion for bringing the best of Japan to the Philippines. For years, Inspire has been dedicated to introducing high-quality Japanese products to the local market, and Desknet's NEO is a shining example of that commitment.
          </p>
          <p>
            At its heart, Desknet's NEO is a smart, all-in-one platform designed to make everyday work easier. It helps teams stay organized, communicate better, and manage tasks more efficiently, whether you're working in a small business or a large organization. With over <span className="font-semibold text-[#3C8CDE]">21 built-in tools</span>, from scheduling and task tracking to document sharing and approval workflows, everything you need is just a few clicks away.
          </p>
          <p>
            But it's not just about the features; it's about mindset. Inspire believes that Japanese technology and culture offer something truly valuable: a thoughtful, disciplined approach to getting things done. And we believe this can make a real difference here in the Philippines.
          </p>
          <p>
            By bringing Desknet's NEO to Filipino professionals, Inspire hopes to spark a shift toward more organized, collaborative, and future-ready workplaces. It's about giving teams the tools they need to thrive—and sharing a bit of Japan's innovative spirit along the way.
          </p>
          <p className="text-xl font-semibold text-[#3C8CDE] text-center mt-8">
            Because when people have the right tools and the right mindset, amazing things can happen.
          </p>
        </section>
      </main>

        {/* Footer Section */}
    </div>
  );
};

export default About;