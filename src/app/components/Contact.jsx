import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 px-4 bg-[#F3F8FE] min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center">
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
              <a href="mailto:sales@ispirenextglobal.com" className="text-[#3C8CDE] font-medium hover:underline">sales@ispirenextglobal.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-[#3C8CDE] w-7 h-7 flex-shrink-0 mt-1" />
            <div>
              <div className="text-base font-semibold text-gray-900">Phones:</div>
              <a href="tel:+639202260942" className="text-[#3C8CDE] font-medium hover:underline">09202260942</a> / <a href="tel:+639992232797" className="text-[#3C8CDE] font-medium hover:underline">09992232797</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-[#3C8CDE] w-7 h-7 flex-shrink-0 mt-1" />
            <div>
              <div className="text-base font-semibold text-gray-900">Location:</div>
              <div className="text-gray-700">6F Alliance Global Tower, Uptown Mall, 11th Avenue Corner, 36th Street, Bonifacio Global City, Taguig City, Metro Manila</div>
            </div>
          </div>
        </div>
        {/* Book Appointment Section */}
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
    </section>
  );
}
