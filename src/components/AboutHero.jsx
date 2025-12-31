import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const sections = [
  {
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
];

export default function AboutHero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-gray-400 px-6 md:px-16 py-32"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* LEFT CONTENT */}
        <div className="space-y-[90vh]">

          {/* ABOUT ME */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="max-w-xl"
          >
            <h2 className="text-6xl md:text-8xl font-bold uppercase text-white mb-10">
              About Me
            </h2>

            <h3 className="text-sm tracking-widest text-gray-300 mb-6">
              DUNCAN ROBERT
            </h3>

            <p className="text-lg leading-relaxed text-gray-400 space-y-4">
              I’m a digital designer and Framer developer passionate about crafting meaningful, user-centered experiences.
              <br /><br />
              With a strong foundation in visual design and a deep understanding of interactive systems, I bring ideas to life through thoughtful design, smooth animations, and responsive layouts.
            </p>

            {/* Social icons (visual placeholders) */}
            <div className="flex gap-6 mt-10 text-white">
              <span>X</span>
              <span>IG</span>
              <span>BE</span>
              <span>DR</span>
            </div>
          </motion.div>

          {/* WHAT I CAN DO */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="max-w-xl"
          >
            <h2 className="text-6xl md:text-7xl font-bold uppercase text-white mb-8">
              What I Can Do<br />For You
            </h2>

            <p className="text-lg text-gray-400 mb-12">
              As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.
            </p>

            <ul className="space-y-6 text-xl text-white">
              <li className="border-b border-gray-700 pb-4">1. UI/UX Design</li>
              <li className="border-b border-gray-700 pb-4 text-orange-400">
                2. Graphic Design
              </li>
              <li className="border-b border-gray-700 pb-4">3. Web Design</li>
              <li className="border-b border-gray-700 pb-4">4. Branding</li>
            </ul>
          </motion.div>
        </div>

        {/* RIGHT STICKY IMAGE */}
        <div className="relative hidden md:block">
          <div className="sticky top-28 h-[540px] rounded-3xl overflow-hidden">
            {sections.map((item, i) => {
              const start = i / sections.length;
              const end = (i + 1) / sections.length;

              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.2, end - 0.2, end],
                [0, 1, 1, 0]
              );

              const scale = useTransform(
                scrollYProgress,
                [start, end],
                [1.05, 1]
              );

              return (
                <motion.img
                  key={i}
                  src={item.image}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  style={{ opacity, scale }}
                />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
