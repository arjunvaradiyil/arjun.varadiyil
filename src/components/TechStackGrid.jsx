import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiRemix, SiMongodb, SiThreedotjs } from "react-icons/si"; // <-- FIXED

const techs = [
  { icon: <FaReact size={50} />, name: "React" },
  { icon: <SiRemix size={50} />, name: "Remix" },
  { icon: <SiThreedotjs size={50} />, name: "Three.js" }, // <-- FIXED
  { icon: <FaNodeJs size={50} />, name: "Node.js" },
  { icon: <SiMongodb size={50} />, name: "MongoDB" },
];

export default function TechStackGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
      {techs.map((t, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <div className="text-[#34ebd2]">{t.icon}</div>
          <p className="mt-2 text-gray-300 font-medium">{t.name}</p>
        </motion.div>
      ))}
    </div>
  );
}
