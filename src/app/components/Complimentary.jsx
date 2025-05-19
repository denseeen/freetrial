'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/form');
    }, 5000); // 5 seconds delay
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-100 to-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Header */}
      <div className="w-full bg-gradient-to-br from-blue-100 to-white">
        <div className="flex flex-col md:flex-row px-6 md:px-10 py-2 items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center justify-center w-full md:w-auto space-x-4">
            <div className="w-24 md:w-64 border-t border-black"></div>
            <img
              src="/images/logo.png"
              alt="i-NEO Logo"
              className="h-16 border border-black mx-4 rounded-full"
            />
            <div className="w-24 md:w-64 border-t border-black"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-black mb-4">Welcome to I-Neo</h1>
          <p className="text-gray-600 mb-6">
            Start your free trial and experience the benefits.
          </p>
          <button
            onClick={handleRegisterClick}
            className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition"
          >
            Register Now!
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-black text-white py-4 flex flex-col md:flex-row justify-center gap-2 md:gap-10 items-center border-t text-sm px-4 text-center">
        <span>adminINEO@gmail.com</span>
        <span>🌐 https://inspirenextglobal.com</span>
      </div>

      {/* Loading Modal */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/70 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-semibold text-blue-400">Redirecting to form...</p>
          </div>
        </div>
      )}
    </div>
  );
}
