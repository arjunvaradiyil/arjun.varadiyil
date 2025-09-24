import React from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      className="py-20 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl bebas-neue-regular md:text-5xl font-bold mb-6">
        Let’s Build Something Amazing Together
      </h2>
      <p className="text-lg oswald-font text-gray-400 mb-8">
        I’m always open to exciting opportunities and collaborations.
      </p>
      <a
        href="/contact"
        className="inline-block bg-[#34ebd2] oswald-sub text-black px-8 py-4 rounded-full font-semibold hover:bg-[#28c9b5] transition"
      >
        Contact Me
      </a>
    </motion.section>
  );
}
