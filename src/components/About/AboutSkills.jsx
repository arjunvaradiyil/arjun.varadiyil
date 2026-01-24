'use client';

import React,{ useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import {skills} from "../../data/skills";

export default function AboutSkills() {
  const [activeId, setActiveId] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);


  return (
    <section className="w-full px-6 md:px-20 py-24">
        <div className="max-w-6xl mx-auto">

            <h2 className="text-[64px] font-antonio text-purple-500 dark:text-lime-400">
            WHAT I CAN DO FOR YOU
            </h2>

            <p className="mt-6 max-3w-xl text-gray-800 dark:text-gray-400 text-lg">
            I build websites that work well, look good, and scale over time.
            </p>

            <div className="relative mt-20 space-y-6">
            {skills.map((skill) => {
                const isOpen = activeId === skill.id;

                return (
                <div
                    key={skill.id}
                    className="relative border-b border-gray-700 pb-6"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    {/* HEADER */}
                    <div
                    onClick={() =>
                        setActiveId(isOpen ? null : skill.id)
                    }
                    className="flex items-center justify-between cursor-pointer"
                    >
                    <h3
                        className={`text-3xl font-antonio transition-colors ${
                        isOpen ? "text-purple-500 dark:text-lime-400" : "text-gray-800 dark:text-white"
                        }`}
                    >
                        {skill.id}. {skill.title}
                    </h3>
                    <span className="text-gray-800 dark:text-gray-400">
                        {isOpen ? "—" : "+"}
                    </span>
                    </div>

                    {/* CONTENT (click only) */}
                    <AnimatePresence>
                    {isOpen && (
                        <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                        >
                        <p className="mt-4 text-gray-800 dark:text-gray-400 max-w-xl">
                            {skill.description}
                        </p>

                        <ul className="mt-6 space-y-3">
                            {skill.features.map((item) => (
                            <li
                                key={item}
                                className="flex gap-3 text-gray-600 dark:text-gray-300"
                            >
                                <Check size={16} className="text-purple-500 dark:text-lime-400 mt-1" />
                                {item}
                            </li>
                            ))}
                        </ul>
                        </motion.div>
                    )}
                    </AnimatePresence>

                    {/* HOVER IMAGE */}
                    <AnimatePresence>
                    {hoveredSkill?.id === skill.id && !isOpen && (
                        <motion.img
                        src={skill.image}
                        alt={skill.title}
                        initial={{ opacity: 0, y: 20, rotate: -6 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="pointer-events-none absolute right-0 top-[-40px] w-[260px] rounded-xl shadow-2xl"
                        />
                    )}
                    </AnimatePresence>
                </div>
                );
            })}
            </div>
        </div>
    </section>

  );
}
