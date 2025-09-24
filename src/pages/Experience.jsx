import { motion } from "framer-motion";
import React from "react";
import { useRef, useEffect, useState } from "react";
import sreyasLogo from "../assets/images/sreyas.jpg"
import luminarLogo from "../assets/images/luminar.jpg"
import techLogo from "../assets/images/techbyheart.jpg"

const experiences = [
  {
    year: "Jan 2025 - Present",
    role: "Junior Software Developer",
    company: "Sreyas IT Solutions",
    description:
      "Built role-based access control (RBAC) dashboard with React. Focused on pixel-perfect UI and reusable components.",
    logo: sreyasLogo, 
  },
  {
    year: "July 2024 - Jan 2025",
    role: "MERN Developer Trainee",
    company: "Luminar Technolab",
    description:
      "Worked on dynamic menus with MERN stack. Improved responsiveness and implemented Figma-based UI.",
    logo: luminarLogo,
  },
  {
    year: "Feb 2024 - March 2024",
    role: "Cyber security Intern",
    company: "TechbyHeart Pvt Ltd",
    description:
      "Created responsive websites using React, Next.js, and Tailwind. Collaborated with clients to deliver high-quality results.",
    logo: techLogo,
  },
];

export default function Experience() {
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight))
      );
      setProgress(visible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black text-white min-h-screen py-20 px-6">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h1
          className="text-5xl font-bold bebas-neue-regular text-[#34ebd2]"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Journey in Tech
        </motion.h1>
        <p className="text-gray-400 mt-4 oswald-sub">
          From internships to projects, here’s how I’ve grown in
          building real-world solutions.
        </p>
      </div>

      {/* Timeline */}
      <div
        ref={timelineRef}
        className="relative max-w-5xl mx-auto pl-8 border-l-2 border-gray-700"
      >
        <motion.div
          className="absolute left-0 top-0 w-[2px] bg-[#34ebd2]"
          style={{ height: `${progress * 100}%` }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-20 relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-4 top-4 w-6 h-6 bg-[#34ebd2] rounded-full shadow-lg" />

            {/* Logo */}
            <motion.img
              src={exp.logo}
              alt={exp.company}
              className="w-24 h-24 object-contain rounded-xl bg-white p-2 cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 3 }}
              onClick={() =>
                window.open(
                  `https://www.google.com/search?q=${encodeURIComponent(
                    exp.company
                  )}`,
                  "_blank"
                )
              }
            />

            {/* Text */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg max-w-xl">
              <h3 className="text-xl font-bold oswald-font text-[#34ebd2]">
                {exp.role}
              </h3>
              <p className="text-lg oswald-sub">{exp.company}</p>
              <p className="text-sm oswald-small text-gray-400 mb-2">{exp.year}</p>
              <p className="oswald-small text-gray-400">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20" >
        <motion.a
          href="/contact"
          className="inline-block bg-[#34ebd2] text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
          whileHover={{ scale: 1.05 }}
        >
          Let’s Build Together →
        </motion.a>
      </div>
    </section>
  );
}
