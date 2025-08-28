"use client";

import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-100 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#03acff]/20 rounded-full px-6 py-3 mb-6">
            <MessageCircle className="w-5 h-5 text-[#03acff]" />
            <span className="text-[#03acff] font-medium">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#000000] mb-6 leading-tight">
            Let's <span className="text-[#03acff] drop-shadow-lg">Connect</span>
          </h1>
          <div className="w-32 h-1 bg-[#03acff] rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with Desknet's NEO? Our expert team is here to help you every step of the way.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h2 className="text-2xl font-bold text-[#000000] mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#03acff]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#03acff]/30 transition-colors duration-300">
                    <Mail className="text-[#03acff] w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-600 font-medium text-sm mb-1">Email for Inquiries</div>
                    <a 
                      href="mailto:sales@ispirenextglobal.com" 
                      className="text-[#03acff] font-semibold text-lg hover:text-[#341bca] transition-colors duration-300 block"
                    >
                      sales@ispirenextglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#03acff]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#03acff]/30 transition-colors duration-300">
                    <Phone className="text-[#03acff] w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-600 font-medium text-sm mb-1">Phone Numbers</div>
                    <div className="space-y-2">
                      <a 
                        href="tel:+639202260942" 
                        className="text-[#03acff] font-semibold text-lg hover:text-[#341bca] transition-colors duration-300 block"
                      >
                        +63 920 226 0942
                      </a>
                      <a 
                        href="tel:+639992232797" 
                        className="text-[#03acff] font-semibold text-lg hover:text-[#341bca] transition-colors duration-300 block"
                      >
                        +63 999 223 2797
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#03acff]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#03acff]/30 transition-colors duration-300">
                    <MapPin className="text-[#03acff] w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-600 font-medium text-sm mb-1">Office Location</div>
                    <div className="text-[#000000] font-semibold text-lg leading-relaxed">
                      6F Alliance Global Tower, Uptown Mall, 11th Avenue Corner, 36th Street, Bonifacio Global City, Taguig City, Metro Manila
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Contact Form & Additional Info */}
          <div className="space-y-8">
            {/* Quick Response Promise */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-[#03acff] w-6 h-6" />
                <h3 className="text-xl font-bold text-[#000000]">Why Choose Us?</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#03acff] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expert technical support team</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#03acff] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Quick response within 24 hours</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#03acff] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personalized consultation services</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#03acff] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ongoing training and support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-[#03acff]/20 rounded-full px-6 py-3">
            <MessageCircle className="w-4 h-4 text-[#03acff]" />
            <span className="text-[#03acff] font-medium">We're here to help you succeed!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
