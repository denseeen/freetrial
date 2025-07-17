// src/components/Hero.jsx
"use client";
import React, { useState, useEffect } from 'react';

// Custom hook for the typing effect (keep as is)
const useTypingEffect = (words, initialDelay = 1000, typingSpeed = 100, deletingSpeed = 50, pauseBetweenWords = 1500) => {
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.substring(0, prev.length - 1));
      }, deletingSpeed);

      if (currentText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      timer = setTimeout(() => {
        setCurrentText(prev => currentWord.substring(0, prev.length + 1));
      }, typingSpeed);

      if (currentText === currentWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBetweenWords);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseBetweenWords]);

  return currentText;
};

export default function Hero() {
  const typingWords = ['AppSuite', 'WebMail', 'Time Card', 'Schedule','Inventory'];
  const animatedText = useTypingEffect(typingWords);

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden bg-gray-900">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden opacity-80">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(30,64,175,0.2)_0%,_transparent_70%)]"></div>
        
        {/* Diagonal stripes */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.03)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.03)_50%,_rgba(255,255,255,0.03)_75%,_transparent_75%,_transparent)] bg-[length:6px_6px]"></div>
        
        {/* Floating abstract shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/10 blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-64 rounded-full bg-indigo-600/10 blur-[100px]"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-lg bg-blue-500/10 blur-[60px] rotate-45"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4"> 
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Desknet Neo <span className="text-blue-400">By Inspire</span> 
          <br />
          <span className="text-blue-300 inline-block relative pr-1 mt-2">
            {animatedText}
            <span className="absolute right-0 top-0 bottom-0 w-0.5 bg-white animate-blink-cursor"></span>
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Checkout our Free Trial and experience the future of workplace management with desknet's Neo.
          <br />
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium
                       py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                       hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            Get Free Trial
          </button>
         
        </div>
      </div>
    </div>
  );
}