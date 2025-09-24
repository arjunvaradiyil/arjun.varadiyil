import React from "react";
import { motion } from "framer-motion";

export default function StorySection({ title, text, img, reverse }) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div
        className={`flex flex-col md:flex-row items-center gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h3 className="text-3xl md:text-5xl bebas-neue-regular mb-6 leading-tight">
            {title}
          </h3>
          <p className="oswald-sub text-lg md:text-xl text-gray-300 leading-relaxed">
            {text}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            <img
              src={img}
              alt={title}
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#34ebd2]/30 to-black/50 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
