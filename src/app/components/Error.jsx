"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Globe, Headset, Zap, Users, Calendar, Package, Mail, Clock, BarChart3, Star, ArrowRight, Play, CheckCircle, Award, Target, Leaf, Lightbulb, Shield, Settings, Download, Wrench, AlertTriangle, Database, Server, Cpu, HardDrive, Wifi, Lock, RefreshCw, TrendingUp } from 'lucide-react';

export default function Error() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full py-16 sm:py-20 lg:py-24 bg-white flex flex-col items-center justify-center text-black px-4 md:px-8 overflow-hidden min-h-screen">
      {/* Background shapes for a dynamic feel - Matching Hero */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-[#03acff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      {/* Floating Icons - More comprehensive set */}
      <div className="absolute top-20 left-10 animate-float">
        <Building className="w-6 h-6 text-[#03acff] opacity-20" />
      </div>
      <div className="absolute top-32 right-16 animate-float-delayed">
        <Globe className="w-8 h-8 text-[#03acff] opacity-20" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float">
        <Headset className="w-7 h-7 text-[#03acff] opacity-20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed">
        <Zap className="w-6 h-6 text-[#03acff] opacity-20" />
      </div>
      <div className="absolute top-1/2 left-5 animate-float">
        <Users className="w-5 h-5 text-[#03acff] opacity-20" />
      </div>
      <div className="absolute top-1/3 right-5 animate-float-delayed">
        <Calendar className="w-6 h-6 text-[#03acff] opacity-20" />
      </div>
      
      {/* Additional floating icons */}
      <div className="absolute top-16 right-1/3 animate-float">
        <Database className="w-5 h-5 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute top-1/4 left-1/4 animate-float-delayed">
        <Server className="w-6 h-6 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float">
        <Cpu className="w-5 h-5 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-delayed">
        <HardDrive className="w-6 h-6 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute top-2/3 left-16 animate-float">
        <Wifi className="w-5 h-5 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute top-1/2 right-20 animate-float-delayed">
        <Lock className="w-5 h-5 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute bottom-1/2 right-1/3 animate-float">
        <RefreshCw className="w-6 h-6 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute top-3/4 left-1/2 animate-float-delayed">
        <TrendingUp className="w-5 h-5 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute top-1/6 left-1/2 animate-float">
        <Package className="w-5 h-5 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute bottom-1/6 right-1/2 animate-float-delayed">
        <Settings className="w-5 h-5 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute top-2/5 left-1/6 animate-float">
        <Shield className="w-5 h-5 text-[#03acff] opacity-15" />
      </div>
      <div className="absolute bottom-2/5 right-1/6 animate-float-delayed">
        <Target className="w-5 h-5 text-[#03acff] opacity-15" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[#03acff]/10 rounded-full mb-6">
            <Wrench className="w-12 h-12 text-[#03acff]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            We'll be back soon 
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            We're working hard to improve your experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
