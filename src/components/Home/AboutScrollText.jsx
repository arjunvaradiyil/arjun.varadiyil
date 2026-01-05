import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPinnedText() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current.querySelectorAll(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${words.length * 100}`, 
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(words, {
      color: "#cacaca",
      stagger: 1,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const text =
    "I design and develop complete web applications from frontend to backend.";

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-black flex items-center justify-center px-6"
    >
      <div className="max-w-6xl">
        {/* Label */}
        <p className="text-sm tracking-widest text-lime-400 mb-6">
          (ABOUT)
        </p> 

        {/* Pinned Text */}
        <h1
          ref={textRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium"
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
