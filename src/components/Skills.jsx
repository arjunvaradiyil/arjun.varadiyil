import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiSass, SiTailwindcss, SiBootstrap, SiFirebase,SiCanva,SiWordpress,SiVercel,SiGit,} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiSass />, name: "SCSS" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiWordpress />, name: "WordPress" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiGit />, name: "Git" },
  ];

  const loopedSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden bg-black py-8">
      <motion.div
        className="flex space-x-20 text-8xl text-[#34ebd2]" 
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {loopedSkills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center min-w-[120px]"
          >
            {skill.icon}
            <span className="text-lg oswald-sub text-gray-400 mt-2">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
