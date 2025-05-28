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
              src="/images/final-logo.png"
              alt="i-NEO Logo"
              className="h-16 border border-black mx-4"
            />
            <div className="w-24 md:w-64 border-t border-black"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl text-black">Welcome to</h1>
        <h1 className="text-3xl text-[#03acff] font-bold -mt-1 mb-4">Desknet's NEO by Inspire</h1>
          <p className="text-black mb-2">
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
      <div className="w-full bg-black/10 text-white py-4 flex flex-col md:flex-row justify-center  md:gap-2 items-center border-t text-sm px-4 text-center">
        
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  className="w-6 h-6 fill-current text-red-500"
>
  <path d="M44 10.5v27c0 1.9-1.6 3.5-3.5 3.5h-33C5.6 41 4 39.4 4 37.5v-27C4 8.6 5.6 7 7.5 7h33c1.9 0 3.5 1.6 3.5 3.5zM24 26L7.5 14v23.5H24V26zm0 0l16.5 11.5V14L24 26zm16.5-16H7.5L24 23l16.5-13z" />
</svg>

<span>inspireneo2025@gmail.com</span>

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
