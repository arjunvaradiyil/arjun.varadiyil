import React,{ useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate,useInView} from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


const Counter = ({ to, duration = 1.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);

  const formatted = useTransform(count, (latest) =>
    Number.isInteger(to) ? Math.round(latest) : latest.toFixed(1)
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, count, to, duration]);
  return <motion.span ref={ref}>{formatted}</motion.span>;
};

export default function WhyMe() {
  return (
    <section className="w-full text-white px-6 md:px-16 lg:px-24 py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top Label */}
        <motion.p
          variants={itemVariants}
          className="text-sm tracking-widest text-purple-600 dark:text-lime-400 mb-6"
        >
          (WHY ME)
        </motion.p>

        {/* Heading + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.h2
            variants={itemVariants}
            className="font-anton font-bold uppercase tracking-wide text-[48px] sm:text-[64px] md:text-[140px] leading-[1] text-gray-800 dark:text-[#cacaca]"
          >
            Numbers <br /> Don’t Lie
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-800 dark:text-[#8f8f8f] text-base md:text-lg leading-relaxed max-w-xl"
          >
            With over a year of hands-on industry experience, I build scalable,
            user-focused web applications using MERN stack and other modern
            technologies — delivering clean code, smooth UX, and real results.
            <br />
            <a href="/about">
              <button className="px-6 py-2 rounded-full border border-gray-600 text-[15px] uppercase tracking-widest font-medium text-gray-800 dark:text-[#8f8f8f] hover:bg-[#8f8f8f] hover:text-[#cacaca] hover:border-[#8f8f8f] transition mt-6">
                MY STORY
              </button>
            </a>
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-full h-px bg-gray-800 my-20"
        />

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Stat 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="space-y-4"
          >
            <h3 className="text-gray-800 dark:text-[#cacaca] text-6xl md:text-8xl font-bold">
              <Counter to={10} />
              <span className="text-purple-500 dark:text-lime-400">+</span>
            </h3>
            <p className="text-gray-800 dark:text-[#cacaca] text-[16px]">
              Real-world projects built across web platforms
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="space-y-4"
          >
            <h3 className="text-gray-800 dark:text-[#cacaca] text-6xl md:text-8xl font-bold">
              <Counter to={1.5} />
              <span className="text-purple-500 dark:text-lime-400">+</span>
            </h3>
            <p className="text-gray-800 dark:text-[#cacaca] text-[16px]">
              Years of professional software development experience
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="space-y-4"
          >
            <h3 className="text-gray-800 dark:text-[#cacaca] text-6xl md:text-8xl font-bold">
              <Counter to={100} />
              <span className="text-purple-500 dark:text-lime-400">%</span>
            </h3>
            <p className="text-gray-800 dark:text-[#cacaca] text-[16px]">
              Commitment to clean code, performance & best practices
            </p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="space-y-4"
          >
            <h3 className="text-gray-800 dark:text-[#cacaca] text-6xl md:text-8xl font-bold">
              <Counter to={10} />
              <span className="text-purple-500 dark:text-lime-400">+</span>
            </h3>
            <p className="text-gray-800 dark:text-[#cacaca] text-[16px]">
              Technologies used including MERN & modern frontend tools
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
