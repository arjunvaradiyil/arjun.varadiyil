import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Projects", "Experience", "About", "Contact"];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-2 py-4 bg-transparent text-[#34ebd2]">
        <div className="flex items-center space-x-2 text-6xl font-bold bebas-neue-regular">
          <span>≋</span>
          <span>G</span>
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          className="bebas-neue-regular text-[#34ebd2] text-6xl font-bold transition-all duration-300 hover:text-7xl"
        >
          MENU
        </button>
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}   
            animate={{ y: 0, opacity: 1 }}        
            exit={{ y: "-100%", opacity: 0 }}     
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#34ebd2] text-black flex bebas-neue-regular"
          >
            {/* Left Side Image (hidden on small screens) */}
            <div className="hidden md:flex w-1/2  items-center justify-center relative">
              <img
                src="https://cdn.pixabay.com/photo/2024/01/16/22/25/ai-generated-8513200_1280.jpg"
                alt="menu visual"
                className="object-cover w-full h-full mix-blend-multiply"
              />
            </div>

            {/* Right Side Nav */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-4 text-7xl md:text-8xl font-extrabold">
              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  whileHover={{ scale: 1.3 }}
                  className="transition-transform duration-300"
                >
                  {item}
                </motion.a>
              ))}

              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-6xl font-bold bebas-neue-regular"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
