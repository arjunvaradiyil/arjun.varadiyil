import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.h1
        className="text-6xl md:text-8xl bebas-neue-regular bg-gradient-to-r from-white via-gray-200 to-[#34ebd2] bg-clip-text text-transparent mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl oswald-sub max-w-3xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Hi, I’m <span className="text-[#34ebd2]">Gouri Nandhana</span>,  
        a frontend developer and classical dancer, blending logic with creativity.  
        Other than coding, I sketch, dance, watch movies, and recently fell in love with reading.
      </motion.p>
    </section>
  );
}
