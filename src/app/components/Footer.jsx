import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto border-t border-gray-700 pt-12 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-bold text-white mb-4">desknet's NEO</div>
            <div className="text-gray-400 max-w-xs mx-auto md:mx-0 opacity-90">
              <ul className="space-y-3">
                <li><a href="/faq" className="text-blue-200 hover:text-blue-400 transition text-sm">FAQS</a></li>
                <li><a href="/case" className="text-blue-200 hover:text-blue-400 transition text-sm">Case Study</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-sm">Success Stories</a></li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 w-full md:w-2/3">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-sm">Features Overview</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-sm">Pricing & Plans</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-sm">Success Stories</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-sm">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-sm">Our Philosophy</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-sm">Connect With Us</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 text-center md:text-left"> {/* Adjusted col-span for better mobile layout */}
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-sm">Security Measures</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} desknet's NEO by Inspire. All rights reserved.
        </div>
      </div>
    </footer>
  );
}