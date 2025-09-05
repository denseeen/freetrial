"use client";

import React from 'react';

const About = () => {
  const youtubeVideoId = 'fWlzbEVUTlI';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?rel=0&showinfo=0&controls=1&modestbranding=1`;

  return (
    <section className="py-20 px-4 bg-white text-gray-800" data-section="about">
      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
          
          {/* Left Column: Heading and Summary */}
          <div className="mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#03acff] leading-tight mb-4">
              Our Story: Inspire Next Global Inc.
            </h1>
            <div className="w-24 h-1.5 bg-[#03acff] rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Bringing the Best of Japan to the Philippines
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At its heart, desknet's NEO is a smart, all-in-one platform designed to make everyday work easier. It helps teams stay organized, communicate better, and manage tasks more efficiently, whether you're working in a small business or a large organization.
            </p>
          </div>

          {/* Right Column: YouTube Video */}
          <div>
            <div className="relative w-full rounded-2xl shadow-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={youtubeEmbedUrl}
                title="Desknet's NEO by Inspire Next Global Inc."
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Full-Width Text Section Below */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#03acff] mb-6 text-center">
              Our Journey with Desknet's NEO by Inspire
            </h2>
            <p>
              <span className="font-semibold text-[#03acff]">desknet's NEO by Inspire</span> is more than just a software application focusing on business tools; it's a reflection of the Inspire Next Global Inc.'s passion for bringing the best of Japan to the Philippines. For years, Inspire has been dedicated to introducing high-quality Japanese products to the local market, and desknet's NEO is a shining example of that commitment.
            </p>
            <p>
              With over <span className="font-semibold text-[#03acff]">21 built-in tools</span>, from scheduling and task tracking to document sharing and approval workflows, everything you need is just a few clicks away.
            </p>
            <p>
              But it's not just about the features; it's about mindset. Inspire believes that Japanese technology and culture offer something truly valuable: a thoughtful, disciplined approach to getting things done. And we believe this can make a real difference here in the Philippines.
            </p>
            <p>
              By bringing desknet's NEO to Filipino professionals, Inspire hopes to spark a shift toward more organized, collaborative, and future-ready workplaces. It's about giving teams the tools they need to thrive—and sharing a bit of Japan's innovative spirit along the way.
            </p>
            <p className="text-xl font-semibold text-[#03acff] text-center mt-8">
              Because when people have the right tools and the right mindset, amazing things can happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;