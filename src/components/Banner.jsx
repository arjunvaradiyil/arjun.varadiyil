import { motion } from "framer-motion";
import { Hand } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/images/profilepic.png";

export default function Banner() {
  const fullText = "GOURI";
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 400);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 overflow-hidden">

      {/* TYPEWRITER BG TEXT */}
      <motion.h1
        initial={{ opacity: 1 }}
        animate={{ opacity: showContent ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="absolute text-[120px] sm:text-[160px] lg:text-[260px] font-anton text-white/5 select-none pointer-events-none"
      >
        {typedText}
      </motion.h1>

      {/* MAIN CONTENT */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-white w-full max-w-6xl"
        >
          {/* Name */}
          <p className="tracking-widest font-anton text-[16px] sm:text-[18px] text-gray-400 text-center mb-4">
            GOURINANDHANA ES
          </p>

          {/* DESKTOP SPLIT / MOBILE STACK */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">

            {/* SOFTWARE */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="
                font-anton tracking-wide
                text-[42px]
                sm:text-[56px]
                lg:text-[100px]
                hidden lg:block
              "
            >
              SOFTWARE
            </motion.h1>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="w-[260px] sm:w-[300px] lg:w-[350px] h-[360px] sm:h-[420px] lg:h-[450px] rounded-2xl overflow-hidden bg-zinc-900">
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Hand Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-[-18px] bottom-[40%] w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center cursor-pointer shadow-lg"
              >
                <Hand className="text-black w-5 h-5" />
              </motion.div>
            </motion.div>

            {/* DEVELOPER */}
            <motion.h2
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="
                font-anton tracking-wide
                text-[42px]
                sm:text-[56px]
                lg:text-[100px]
                hidden lg:block
              "
            >
              DEVELOPER
            </motion.h2>
          </div>

          {/* MOBILE / TABLET TEXT */}
          <div className="lg:hidden text-center mt-6">
            <h1 className="text-[42px] sm:text-[56px] font-anton">
              SOFTWARE
            </h1>
            <h2 className="text-[42px] sm:text-[56px] font-anton">
              DEVELOPER
            </h2>
          </div>

        </motion.div>
      )}
    </section>
  );
}
