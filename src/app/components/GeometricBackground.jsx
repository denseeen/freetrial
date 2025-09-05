"use client";
import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const shapeVariants = {
  animate: (i) => ({
    x: [0, 50 * Math.sin(i), 0],
    y: [0, 50 * Math.cos(i), 0],
    rotate: [0, 360, 0],
    transition: {
      duration: 25 + i * 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.circle
          cx="25"
          cy="25"
          r="10"
          fill="#03acff"
          fillOpacity="0.1"
          variants={shapeVariants}
          custom={1}
          animate="animate"
        />
        <motion.rect
          x="70"
          y="15"
          width="15"
          height="15"
          fill="#341bca"
          fillOpacity="0.1"
          variants={shapeVariants}
          custom={2}
          animate="animate"
        />
        <motion.polygon
          points="50,10 65,35 35,35"
          fill="#03acff"
          fillOpacity="0.1"
          variants={shapeVariants}
          custom={3}
          animate="animate"
        />
        <motion.circle
          cx="80"
          cy="80"
          r="12"
          fill="#341bca"
          fillOpacity="0.1"
          variants={shapeVariants}
          custom={4}
          animate="animate"
        />
        <motion.rect
          x="10"
          y="80"
          width="18"
          height="18"
          fill="#03acff"
          fillOpacity="0.1"
          variants={shapeVariants}
          custom={5}
          animate="animate"
        />
      </svg>
    </div>
  );
};

export default GeometricBackground;