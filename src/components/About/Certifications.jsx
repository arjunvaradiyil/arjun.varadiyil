'use client';

import React from "react";
import { certifications } from "../../data/certificationsData";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Certifications() {
  return (
    <section className="w-full px-6 md:px-20 py-24 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] sm:text-[48px] md:text-[64px] font-antonio text-purple-500 dark:text-lime-400 mb-6"
        >
          CERTIFICATIONS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-800 dark:text-gray-400 text-lg mb-12 max-w-3xl"
        >
          Professional certifications and credentials that validate my expertise in full-stack development and programming fundamentals.
        </motion.p>

        {/* Certifications List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="flex flex-col gap-4 border-b border-gray-200 dark:border-white/10 pb-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Award className="w-6 h-6 text-purple-500 dark:text-lime-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div className="flex-1 min-w-[200px]">
                      <h3 className="text-xl md:text-2xl font-antonio text-black dark:text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-purple-500 dark:text-lime-400 font-medium text-sm md:text-base">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-gray-800 dark:text-gray-500 text-sm md:text-base font-medium">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base mt-2">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
