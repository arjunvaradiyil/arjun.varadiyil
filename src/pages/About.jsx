import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from '../assets/images/profilepic.png'

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
     <section
           className="min-h-screen relative bg-cover bg-center text-white px-8"
           style={{
             backgroundImage:
               `url(${ProfileImg})`,
           }}
         >
           {/* Overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/1"></div>
     
           {/* Content */}
           <div className="relative max-w-xl py-40">
             <h2 className="bebas-neue-regular text-6xl md:text-8xl font-extrabold leading-tight">
               HI <br /><span className="text-8xl md:text-9xl">THERE</span><span className="ms-5 text-8xl md:text-9xl text-[#34ebd2]">!</span>
             </h2>
     
             <p className="mt-6 oswald-sub text-lg text-gray-200">
               Hi, I’m <span className="font-bold">Gouri Nandhana</span>, a passionate
               frontend developer who loves building clean, responsive, and
               user-friendly web applications. I believe in creating digital
               experiences that not only look good but also feel intuitive and
               impactful.
             </p>
     
             <p className="mt-4 oswald-sub text-gray-300">
               My journey includes projects with <strong>React</strong>,{" "}
               <strong>Next.js</strong>, <strong>Node.js</strong>, and{" "}
               <strong>MongoDB</strong>, where I’ve worked on real-world UI
               challenges like dashboards, RBAC systems, and pixel-perfect designs.
             </p>
     
             <Link
               to="/about"
               className="mt-8 inline-block oswald-sub font-semibold text-[#34ebd2] hover:text-yellow-300 transition"
             >
               → Know More
             </Link>
           </div>
         </section>
    </div>
  );
}
