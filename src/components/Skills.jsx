import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiSass, SiTailwindcss, SiBootstrap, SiFirebase,SiCanva,SiWordpress,SiVercel,SiGit,} from "react-icons/si";

export default function Skills() {
  const [duration, setDuration] = useState(20);

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

  useEffect(()=> {
    const updateDuration = () =>{
      if (window.innerWidth < 640) {
        setDuration(10); 
      } else if (window.innerWidth < 1024) {
        setDuration(15); 
      } else {
        setDuration(20); 
      }
    };
    updateDuration();
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black py-8">
      <motion.div
        className="flex space-x-4 sm:space-x-8 md:space-x-20 lg:space-x-32 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#34ebd2]" 
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
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
