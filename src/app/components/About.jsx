"use client";

import React from 'react';

const About = () => {
  const youtubeVideoId = 'fWlzbEVUTlI';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <section className="py-16 px-4 bg-[#F3F8FE] min-h-screen flex items-center justify-center" data-section="about">
      <div className="max-w-7xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#03acff] mb-2">
            Our Story: Inspire Next Global Inc.
          </h1>
          <div className="w-16 h-1 bg-[#03acff] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Bringing the Best of Japan to the Philippines
          </p>
        </div>

        {/* YouTube Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#03acff] mb-6 text-center">
            Discover Desknet's NEO
          </h2>
          <div className="relative w-full rounded-2xl shadow-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`${youtubeEmbedUrl}?autoplay=1&mute=0&loop=1&playlist=${youtubeVideoId}&enablejsapi=1&rel=0&showinfo=0&controls=1&modestbranding=1`}
              title="Desknet's NEO by Inspire Next Global Inc."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* History Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#03acff] mb-6 text-center">
            Our Journey with Desknet's NEO
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              <span className="font-semibold text-[#03acff]">Desknet's NEO by Inspire</span> is more than just a software application focusing on business tools; it's a reflection of the Inspire Next Global Inc.'s passion for bringing the best of Japan to the Philippines. For years, Inspire has been dedicated to introducing high-quality Japanese products to the local market, and Desknet's NEO is a shining example of that commitment.
            </p>
            <p>
              At its heart, Desknet's NEO is a smart, all-in-one platform designed to make everyday work easier. It helps teams stay organized, communicate better, and manage tasks more efficiently, whether you're working in a small business or a large organization. With over <span className="font-semibold text-[#03acff]">21 built-in tools</span>, from scheduling and task tracking to document sharing and approval workflows, everything you need is just a few clicks away.
            </p>
            <p>
              But it's not just about the features; it's about mindset. Inspire believes that Japanese technology and culture offer something truly valuable: a thoughtful, disciplined approach to getting things done. And we believe this can make a real difference here in the Philippines.
            </p>
            <p>
              By bringing Desknet's NEO to Filipino professionals, Inspire hopes to spark a shift toward more organized, collaborative, and future-ready workplaces. It's about giving teams the tools they need to thrive—and sharing a bit of Japan's innovative spirit along the way.
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