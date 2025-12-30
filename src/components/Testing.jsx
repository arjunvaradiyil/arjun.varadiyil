import { motion, useScroll, useTransform } from "framer-motion";
import React,{ useRef } from "react";

export default function ScrollRotateCard() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Rotate from edge → full back image
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div ref={containerRef} className="relative bg-black text-white">
      {/* SECTION 1 */}
      <section className="h-screen flex items-center px-16">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">WHAT I CAN DO FOR YOU</h1>
          <p className="text-gray-400">
            I craft visually striking and user-focused digital experiences.
          </p>

          <ul className="mt-10 space-y-6 text-xl">
            <li>01. UI / UX Design</li>
            <li>02. Graphic Design</li>
            <li>03. Web Design</li>
            <li>04. Branding</li>
          </ul>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="h-screen flex items-center px-16">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">ABOUT ME</h1>
          <p className="text-gray-400">
            I’m a digital designer passionate about meaningful experiences.
          </p>

          <div className="flex gap-10 mt-10">
            <div>
              <p className="text-4xl font-bold text-lime-400">12</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-lime-400">270</p>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-lime-400">50+</p>
              <p className="text-sm text-gray-400">Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY ROTATING CARD */}
      <div className="pointer-events-none fixed right-24 top-1/2 -translate-y-1/2 perspective-[1200px]">
        <motion.div
          style={{ rotateY }}
          className="relative w-[320px] h-[420px] rounded-2xl transform-style-preserve-3d"
        >
          {/* FRONT IMAGE */}
          <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"
              alt="Front"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BACK IMAGE */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?cs=srgb&dl=pexels-bertellifotografia-573299.jpg&fm=jpg"
              alt="Back"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
