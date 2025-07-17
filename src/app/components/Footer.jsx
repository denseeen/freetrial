import react from "react";


export default function Footer() {

return (

    <footer className="w-full max-w-6xl border-t border-gray-700 pt-12 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold text-white mb-4">desknet's NEO</div>
            <div className="text-gray-400 max-w-xs opacity-90">
              Japanese innovation, meticulously tailored for dynamic Filipino workplaces. Empowering teams to achieve their full potential.
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition">Features Overview</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition">Pricing & Plans</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition">Our Philosophy</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition">Connect With Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition">Terms of Service</a></li>
                <li><a href="#" className="text-blue-200 hover:text-blue-400 transition">Security Measures</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} desknet's NEO by Inspire. All rights reserved.
        </div>
      </footer>
);
}