'use client';

import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
        quote: "With desknet's NEO, our teams now operate with greater coordination. From leave requests to internal memos, we've reduced delays and miscommunication across departments. It's an all-in-one tool that replaced at least three systems we were previously using.",
      author: "Ms. Melody Reyes",
      position: "President at Inspire Holdings Inc, Inspire Next Global Inc."
    },
    {
              quote: "We use desknet's NEO not just for communication but also to manage HR-related functions. New hires can quickly access company documents, request leaves, and see announcements without needing to ask around.",
      author: "Ms. Gerlie De Asis",
      position: "Chief Administrative Officer at Inspire Next Global Inc."
    },
    {
        quote: "As Executive Director, I need visibility across campaigns, approvals, and team coordination. desknet's NEO helps us streamline requests, track project progress, and centralize communication. It eliminates silos and keeps everyone—from creatives to executives—on the same page. It's not just a tool; it's now part of our workflow culture.",
      author: "Ms. Rhia Alberto",
      position: "Executive Director at Inspire Alliance Fund Group."
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#F3F8FE] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#03acff] mb-2">
            What Our <span className="text-[#03acff]">Clients Say</span>
          </h1>
          <div className="w-16 h-1 bg-[#03acff] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover how desknet's NEO has transformed the way organizations work and collaborate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start mb-6">
                <Quote className="text-[#03acff] w-8 h-8 flex-shrink-0 mr-3" />
                <div className="flex-1">
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-[#03acff] text-lg mb-1">
                  {testimonial.author}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Join hundreds of organizations that trust desknet's NEO for their business operations
          </p>
        </div>
      </div>
    </section>
  );
}
