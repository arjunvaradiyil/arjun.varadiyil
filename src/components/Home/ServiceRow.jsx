import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const easeSlow = [0.22, 1, 0.36, 1];

export default function ServiceRow({ service, active, setActive }) {
  const isOpen = active === service.id;

  return (
    <motion.div
      onMouseEnter={() => {
            if (window.innerWidth >= 768) setActive(service.id);
       }}
       onMouseLeave={() => {
        if (window.innerWidth >= 768) setActive(null);
       }}
      className='border-t border-[#333] cursor-pointer font-["Geist","Geist Placeholder",sans-serif]'
    >
      {/* HEADER */}
      <motion.div
        className="flex items-center justify-between py-12"
        animate={{
          scale: isOpen ? 1.05 : 1,
        }}
        transition={{ duration: 0.8, ease: easeSlow }}
      >
        {/* Number */}
        <motion.span
          className="text-5xl md:text-6xl font-semibold text-gray-800 dark:text-gray-500"
          animate={{
            scale: isOpen ? 1.2 : 1,
            color: isOpen ? "#555555]" : "#555555",
          }}
          transition={{ duration: 0.8, ease: easeSlow }}
        >
          {service.id}
          <span className="h-1 w-1 text-purple-500 dark:text-lime-400">.</span>
        </motion.span>

        {/* Title */}
        <motion.h3 className="text-2xl md:text-5xl text-gray-800 dark:text-[#cacaca] font-semibold origin-right"
            animate={{
                opacity: isOpen ? 0 : 1,
                scale: isOpen ? 0.95 : 1,
                width: isOpen ? 0 : "auto",
            }}
            transition={{ duration: 0.6, ease: easeSlow }}
            >
            {service.title}
        </motion.h3>
        {/* PLUS BUTTON (mobile & tablet only) */}
        <button
        onClick={(e) => {
            e.stopPropagation();
            setActive(isOpen ? null : service.id);
        }}
        className="md:hidden text-purple-500 dark:text-lime-400 text-3xl font-light"
        >
        {isOpen ? "−" : "+"}
        </button>
      </motion.div>

      {/* EXPAND CONTENT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 1.1, ease: easeSlow }}
            className="pb-16 flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid md:grid-cols-2 gap-14 items-center"
            >
              {/* IMAGE */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: easeSlow,
                }}
                className="rounded-3xl overflow-hidden max-w-[70%] mx-auto"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* TEXT CONTENT */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.25,
                  duration: 0.9,
                  ease: easeSlow,
                }}
              >
                <h4 className="text-4xl md:text-5xl text-gray-800 dark:text-gray-200 font-semibold mb-5">
                  {service.title}
                </h4>

                <p className="text-gray-800 dark:text-[#8f8f8f] mb-8 max-w-md text-lg">
                  {service.description}
                </p>

                <ul className="mb-8 space-y-3">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.1 * index,
                        duration: 0.5,
                        ease: easeSlow,
                      }}
                      className="flex items-start gap-3 text-gray-800 dark:text-[#8f8f8f] text-[16px]"
                    >
                      <span className="text-purple-500 dark:text-lime-400 mt-1">•</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  {service.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: easeSlow,
                      }}
                      className="px-5 py-2 rounded-full border border-[#333] text-sm text-gray-800 dark:text-[#8f8f8f]"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
