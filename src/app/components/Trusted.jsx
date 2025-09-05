"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building, Globe, Headset, Zap, Users, Calendar, Package, Mail, Clock, BarChart3, Star, ArrowRight, Play, CheckCircle, Award } from 'lucide-react';

export default function Trusted() {
    return (
        <section className="relative w-full py-24 bg-white flex flex-col items-center justify-center text-black overflow-hidden">
            {/* Background shapes for a dynamic feel - Matching Hero */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            {/* Floating decorative icons - Matching Hero */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-20 left-10 text-[#03acff]"
            >
                <Award size={40} className="animate-bounce" />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute top-40 right-20 text-[#03acff]"
            >
                <Globe size={35} className="animate-pulse" />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="absolute bottom-40 left-20 text-[#03acff]"
            >
                <Users size={30} className="animate-bounce" />
            </motion.div>

            {/* Additional floating background icons */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="absolute top-60 left-1/4 text-[#03acff]"
            >
                <BarChart3 size={25} className="animate-pulse" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="absolute top-80 right-1/3 text-[#03acff]"
            >
                <Mail size={28} className="animate-bounce" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-60 right-1/4 text-[#03acff]"
            >
                <Calendar size={32} className="animate-pulse" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1, delay: 1.7 }}
                className="absolute top-1/3 left-1/2 text-[#03acff]"
            >
                <Clock size={24} className="animate-bounce" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1, delay: 1.9 }}
                className="absolute bottom-1/3 right-1/2 text-[#03acff]"
            >
                <Package size={26} className="animate-pulse" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1, delay: 2.1 }}
                className="absolute top-1/2 left-1/6 text-[#03acff]"
            >
                <Star size={22} className="animate-bounce" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1, delay: 2.3 }}
                className="absolute bottom-1/2 right-1/6 text-[#03acff]"
            >
                <Headset size={29} className="animate-pulse" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute top-2/3 left-2/3 text-[#03acff]"
            >
                <CheckCircle size={23} className="animate-bounce" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.08, scale: 1 }}
                transition={{ duration: 1, delay: 2.7 }}
                className="absolute bottom-2/3 right-2/3 text-[#03acff]"
            >
                <Zap size={27} className="animate-pulse" />
            </motion.div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center gap-12 px-4 md:px-8">
                {/* Header Section - Matching Hero Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
                    >
                        <Star className="w-4 h-4" />
                        Global Recognition
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
                    >
                        Trusted by{" "}
                        <span className="text-[#03acff]">16,000+ Companies</span>{" "}
                        Worldwide
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
                    >
                        From startups to Fortune 500 companies, businesses across different industries choose Desknet NEO for their collaboration needs
                    </motion.p>
                </motion.div>

                {/* Logo Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full"
                >
                    <div className="overflow-hidden">
                        <div className="flex items-center space-x-20 animate-slide" style={{
                            animation: 'slide 25s linear infinite',
                            width: 'max-content'
                        }}>
                            {/* First set of logos */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/1.png" 
                                        alt="Yazaki Philippine EDS Techno-Service" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/2.png" 
                                        alt="Pilot" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/3.png" 
                                        alt="Company Logo" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/4.png" 
                                        alt="Mitsubishi Estate" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/5.png" 
                                        alt="Company Logo" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/6.png" 
                                        alt="Company Logo" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                        style={{ transform: 'scale(1.4)' }}
                                    />
                                </div>
                            </motion.div>
                            
                            {/* Duplicate logos for seamless loop */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/1.png" 
                                        alt="Yazaki Philippine EDS Techno-Service" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/2.png" 
                                        alt="Pilot" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/3.png" 
                                        alt="Company Logo" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/4.png" 
                                        alt="Mitsubishi Estate" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/5.png" 
                                        alt="Company Logo" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                    />
                                </div>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-gray-400 hover:text-gray-600 transition-colors text-center"
                            >
                                <div className="w-80 h-32 flex items-center justify-center mb-6 transition-all duration-300">
                                    <img 
                                        src="/images/6.png" 
                                        alt="Company Logo" 
                                        className="w-full h-full object-contain p-4 hover:scale-105 transition-transform"
                                        style={{ transform: 'scale(1.4)' }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Indicators - Matching Hero Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600"
                >
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                        <CheckCircle className="text-green-500 text-lg" />
                        <span className="font-medium">Enterprise Security</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                        <Star className="text-yellow-500 text-lg" />
                        <span className="font-medium">Award-Winning Platform</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                        <Headset className="text-[#03acff] text-lg" />
                        <span className="font-medium">24/7 Global Support</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}