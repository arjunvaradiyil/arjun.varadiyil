import { motion, AnimatePresence, useInView } from "framer-motion";
import React from "react";
import { Linkedin, Github, Mail, Download } from "lucide-react";
import img1 from "../assets/images/profilepic.png"

export default function AboutSection() {

  const imageSrc = img1;


  return (
  <>
    {/* FIRST ABOUT HERO SECTION */}
    <section className="w-full bg-black px-6 md:px-20 py-24 mt-12">
      {/* AVAILABLE BADGE */}
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-2 rounded-full border border-gray-700 bg-black/80 px-4 py-1.5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-sm font-sans text-gray-300 tracking-wide">
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
          <h1 className="text-[48px] md:text-[120px] font-antonio font-bold text-white leading-none">
            ABOUT ME
          </h1>

          <h3 className="mt-10 text-[32px] font-antonio font-semibold text-lime-400">
            GOURINANDHANA E S
          </h3>

          <p className="mt-4 max-w-xl text-[#cacaca] text-[18px] leading-relaxed">
            I'm a digital designer and Framer developer passionate about crafting
            meaningful, user-centered experiences.
          </p>

          <p className="mt-4 max-w-xl text-gray-400 text-[18px] leading-relaxed">
            With a strong foundation in visual design and a deep understanding of
            interactive systems, I bring ideas to life through thoughtful design,
            smooth animations, and responsive layouts.
          </p>

          <div className="mt-8 flex items-center gap-6 text-[#cacaca] text-2xl">
            <Linkedin className="hover:text-lime-400 cursor-pointer" />
            <Github className="hover:text-lime-400 cursor-pointer" />
            <Mail className="hover:text-lime-400 cursor-pointer" />
            <Download className="hover:text-lime-400 cursor-pointer" />
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