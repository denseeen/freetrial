"use client";

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative min-mid-screen flex items-center justify-center overflow-hidden ">
      {/* Ripple Animation Background */}
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle medium shade4"></div>
        <div className="circle small shade5"></div>
      </div>

      {/* Contact Card */}
      <div className="relative z-10 max-w-xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center mt-5 mb-5 ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#3C8CDE] mb-2 text-center">Contact Us</h1>
        <div className="w-16 h-1 bg-[#3C8CDE] rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 text-center mb-8">
          Need Help or Have Questions? Our team is here to support you every step of the way! Feel free to contact us:
        </p>
        <div className="space-y-6 w-full">
          <div className="flex items-start gap-4">
            <Mail className="text-[#3C8CDE] w-7 h-7 flex-shrink-0 mt-1" />
            <div>
              <div className="text-base font-semibold text-gray-900">Email for Inquiries:</div>
              <a href="mailto:sales@ispirenextglobal.com" className="text-[#3C8CDE] font-medium hover:underline">
                sales@ispirenextglobal.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-[#3C8CDE] w-7 h-7 flex-shrink-0 mt-1" />
            <div>
              <div className="text-base font-semibold text-gray-900">Phones:</div>
              <a href="tel:+639202260942" className="text-[#3C8CDE] font-medium hover:underline">09202260942</a> /{" "}
              <a href="tel:+639992232797" className="text-[#3C8CDE] font-medium hover:underline">09992232797</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-[#3C8CDE] w-7 h-7 flex-shrink-0 mt-1" />
            <div>
              <div className="text-base font-semibold text-gray-900">Location:</div>
              <div className="text-gray-700">
                6F Alliance Global Tower, Uptown Mall, 11th Avenue Corner, 36th Street, Bonifacio Global City, Taguig City, Metro Manila
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full flex flex-col items-center">
          <p className="text-lg text-gray-800 mb-4 text-center">Want to book an appointment with our team?</p>
          <a
            href="mailto:sales@ispirenextglobal.com?subject=Appointment%20Request"
            className="inline-block px-8 py-3 bg-[#3C8CDE] text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 text-lg"
          >
            Book an Appointment
          </a>
        </div>
      </div>

      {/* Ripple Animation CSS */}
      <style jsx>{`
        .ripple-background {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          background: #3399ff;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          background: white;
          animation: ripple 15s infinite;
          box-shadow: 0px 0px 1px 0px #508fb9;
        }

        .small {
          width: 200px;
          height: 200px;
          left: -100px;
          bottom: -100px;
        }

        .medium {
          width: 400px;
          height: 400px;
          left: -200px;
          bottom: -200px;
        }

        .large {
          width: 600px;
          height: 600px;
          left: -300px;
          bottom: -300px;
        }

        .xlarge {
          width: 800px;
          height: 800px;
          left: -400px;
          bottom: -400px;
        }

        .xxlarge {
          width: 1000px;
          height: 1000px;
          left: -500px;
          bottom: -500px;
        }

        .shade1 {
          opacity: 0.2;
        }
        .shade2 {
          opacity: 0.5;
        }
        .shade3 {
          opacity: 0.7;
        }
        .shade4 {
          opacity: 0.8;
        }
        .shade5 {
          opacity: 0.9;
        }

        @keyframes ripple {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(0.8);
          }
        }
      `}</style>
    </section>
  );
}
