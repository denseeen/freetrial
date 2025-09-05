"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Award, Users, Trophy, Heart, Globe } from "lucide-react";

export default function Reward() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4 md:px-0">
      <div className="w-full max-w-7xl mx-auto py-24">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-center"
          style={{ color: "#03acff" }}
        >
          Recognized Excellence in Innovation
        </motion.h1>
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-lg md:text-2xl mb-14 text-center"
          style={{ color: "#000000", opacity: 0.85, maxWidth: 750, margin: "0 auto" }}
        >
          Celebrating milestones and recognition that drive our commitment to delivering exceptional business solutions.
        </motion.p>

        {/* Featured Achievement Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-20 w-full max-w-4xl rounded-2xl border border-[#03acff] flex flex-col md:flex-row overflow-hidden bg-white"
        >
          <div className="md:w-1/3 flex flex-col items-center justify-center py-12 px-8 border-b md:border-b-0 md:border-r border-[#03acff] bg-white">
            <Trophy className="w-16 h-16 mb-4" color="#03acff" />
            <h3 className="text-2xl font-bold mb-2" style={{ color: "#03acff" }}>
              Top 100
            </h3>
            <p className="text-lg font-medium" style={{ color: "#000" }}>
              BestSoftware 2025
            </p>
          </div>
          <div className="md:w-2/3 py-12 px-8 flex flex-col justify-center bg-white">
            <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#03acff" }}>
              Leading Innovator
            </h2>
            <p className="text-[#000000] mb-6 text-lg">
              desknet's NEO selected as a top 100 business software solution for 2025, recognized for innovation in workplace productivity and collaboration.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Enterprise Software", "Groupware Solutions", "Business Innovation"].map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "#03acff1a",
                    color: "#03acff",
                    border: "1px solid #03acff33"
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievement Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 w-full"
        >
          {/* Customer Satisfaction */}
          <div className="rounded-xl border border-[#03acff] p-10 flex flex-col items-center bg-white">
            <Heart className="w-10 h-10 mb-3" color="#03acff" />
            <h3 className="text-lg font-bold mb-2" style={{ color: "#03acff" }}>
              Rank No.1
            </h3>
            <p className="text-[#000] mb-2 text-center text-base">
              Customer Satisfaction in groupware & business chat (2018-2023)
            </p>
            <span className="text-sm font-medium" style={{ color: "#03acff" }}>
              Nikkei Computer
            </span>
          </div>
          {/* Global Users */}
          <div className="rounded-xl border border-[#03acff] p-10 flex flex-col items-center bg-white">
            <Users className="w-10 h-10 mb-3" color="#03acff" />
            <h3 className="text-lg font-bold mb-2" style={{ color: "#03acff" }}>
              5 Million+ Users
            </h3>
            <p className="text-[#000] mb-2 text-center text-base">
              Worldwide adoption across SMEs, enterprises, and government agencies
            </p>
            <span className="text-sm font-medium" style={{ color: "#03acff" }}>
              Global Reach
            </span>
          </div>
          {/* Best in Japan */}
          <div className="rounded-xl border border-[#03acff] p-10 flex flex-col items-center bg-white">
            <Award className="w-10 h-10 mb-3" color="#03acff" />
            <h3 className="text-lg font-bold mb-2" style={{ color: "#03acff" }}>
              Best in Japan 2025
            </h3>
            <p className="text-[#000] mb-2 text-center text-base">
              Recognized as top business software for innovation
            </p>
            <span className="text-sm font-medium" style={{ color: "#03acff" }}>
              Tokyo Stock Exchange
            </span>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto"
        >
          <div className="text-center flex flex-col items-center">
            <Star size={40} className="mb-2" color="#03acff" />
            <div className="text-2xl font-bold" style={{ color: "#03acff" }}>
              6 Years
            </div>
            <div className="text-sm text-[#00000099] mt-1">Consecutive Awards</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <Globe size={40} className="mb-2" color="#03acff" />
            <div className="text-2xl font-bold" style={{ color: "#03acff" }}>
              5M+
            </div>
            <div className="text-sm text-[#00000099] mt-1">Global Users</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <Trophy size={40} className="mb-2" color="#03acff" />
            <div className="text-2xl font-bold" style={{ color: "#03acff" }}>
              Top 100
            </div>
            <div className="text-sm text-[#00000099] mt-1">Best Software 2025</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}