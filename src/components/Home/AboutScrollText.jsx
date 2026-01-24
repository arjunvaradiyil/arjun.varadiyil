import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPinnedText({ theme }) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll(".word");

    const isMobile = window.innerWidth < 768;
    const targetColor = theme === "dark" ? "#cacaca" : "#000000";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${words.length * (isMobile ? 40 : 100)}`, 
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(words, {
      color: targetColor,
      stagger: isMobile ? 0.25 : 1,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [theme]);

  const text =
    "I craft elegant solutions to complex problems, building scalable web applications with the MERN stack.";

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl">
        {/* Label */}
        <p className="text-3xl sm:text-4xl lg:text-5xl tracking-widest text-purple-500 dark:text-lime-400 mb-6">
          (ABOUT)
        </p> 

        {/* Pinned Text */}
        <h1
          ref={textRef}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight font-medium"
        >
          {text.split(" ").map((word, i) => (
            <span
              key={i}
              className="word text-[#555555] inline-block mr-2"
            >
              {word}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
