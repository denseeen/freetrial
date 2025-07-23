import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto border-t border-gray-700 pt-12 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
            {/* Logo size significantly increased again */}
            <img
              src="/images/white.png"
              alt="desknet's NEO Logo"
              className="h-20 sm:h-24 md:h-32 lg:h-40 mb-8 mx-auto md:mx-0" // Even larger heights
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 w-full md:w-2/3">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-white mb-4 text-lg">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-base">Features Overview</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-base">Pricing & Plans</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-base">Success Stories</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-white mb-4 text-lg">Company</h4>
              <ul className="space-y-3">
                <li><a href="/faq" className="text-blue-200 hover:text-blue-400 transition text-base">FAQs</a></li>
                <li><a href="/case" className="text-blue-200 hover:text-blue-400 transition text-base">Case Studies</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-base">Success Stories</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-white mb-4 text-lg">Connect</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-base">Contact Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-base">Support</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-base">Facebook</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition text-base">LinkedIn</a></li>
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