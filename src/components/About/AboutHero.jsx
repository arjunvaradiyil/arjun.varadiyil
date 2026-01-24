import { motion, AnimatePresence, useInView } from "framer-motion";
import React from "react";
import { Linkedin, Github, Mail, Download } from "lucide-react";
import img1 from "../../assets/images/arjunvaradiyil.jpeg"
const resume = "https://drive.google.com/file/d/1ZnYLAnJzsW0EkUPe_3R-6agIO6oWDzT-/view";

export default function AboutHero() {

  const imageSrc = img1;


  return (
  <>
    {/* FIRST ABOUT HERO SECTION */}
    <section className="w-full px-6 md:px-20 py-24 mt-12">
      {/* AVAILABLE BADGE */}
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-2 rounded-full border border-gray-700 bg-black/80 px-4 py-1.5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-400 dark:bg-lime-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-sans text-gray-300 tracking-wide">
              Available for work
            </span>
          </div>
        </div>
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 relative">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-[48px] md:text-[120px] font-antonio font-bold text-gray-800 dark:text-white leading-none">
            ABOUT ME
          </h1>

          <h3 className="mt-10 text-[32px] font-antonio font-semibold text-purple-500 dark:text-lime-400">
            ARJUN VARADIYIL
          </h3>

          <p className="mt-4 max-w-xl text-gray-600 dark:text-[#cacaca] text-[18px] leading-relaxed">
            Hello! I'm Arjun Varadiyil. My journey in technology is driven by a passion for crafting elegant solutions to complex problems. I specialize in the MERN stack, building applications that are not just functional, but also provide an intuitive and engaging user experience.
          </p>

          <div className="mt-8 flex items-center gap-6 text-gray-800 dark:text-[#cacaca] text-2xl">
            <a href="https://www.linkedin.com/in/arjunvaradiyil" target="_blank" rel="noopener noreferrer"><Linkedin className="hover:text-purple-500 dark:hover:text-lime-400 cursor-pointer" /></a>
            <a href="https://github.com/arjunvaradiyil" target="_blank" rel="noopener noreferrer"><Github className="hover:text-purple-500 dark:hover:text-lime-400 cursor-pointer" /></a>
            <a href="mailto:arjunvaradiyil203@gmail.com"><Mail className="hover:text-purple-500 dark:hover:text-lime-400 cursor-pointer" /></a>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <Download className="hover:text-purple-500 dark:hover:text-lime-400 cursor-pointer"  />
            </a>
          </div>
        </motion.div>

        {/* IMAGE (SHARED) */}
        <div className="rounded-2xl overflow-hidden bg-gray-900 shadow-xl relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={imageSrc}
              src={imageSrc}
              alt="About profile"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-[280px] md:w-[280px] lg:w-[350px] h-[470px] object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  </>
);
}