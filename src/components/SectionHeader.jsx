import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-6xl bebas-neue-regular tracking-wide text-[#34ebd2]">
        {title}
      </h2>
      <p className="mt-3 oswald-sub text-gray-400 text-lg md:text-xl">
        {subtitle}
      </p>
    </motion.div>
  );
}
