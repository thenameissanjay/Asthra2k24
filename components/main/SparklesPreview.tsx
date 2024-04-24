import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "../sub/sparkles";

export const SparklesPreview = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Video Background */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/earth.mp4" type="video/mp4" />
        {/* Add additional source tags for other video formats if needed */}
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="flex flex-col items-center mt-20">
          <div className="flex-grow" />
          <motion.h1
            initial={{ y: -800 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className=" md:text-7xl text-6xl lg:text-9xl font-bold text-center text-white relative z-2 mt-1100"
          >
            Asthra 2K24
          </motion.h1>
        </div>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 bg-black" />
<div className="text-center md:text-2xl text-md text-bold mt-10 text-white">
18th THE NATIONAL LEVEL TECHNICAL SYMPOSIUM
</div>
          {/* Core component */}
          <SparklesCore
            background="none"
            minSize={0.4}
            maxSize={1}
            particleDensity={0}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          

          {/* Radial Gradient to prevent sharp edges */}
        </div>
      </div>
    </div>
  );
};
