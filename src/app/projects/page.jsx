'use client';

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { projects } from "../../data/projectData";
import { Github, Link, Linkedin } from "lucide-react";
import NextLink from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2000;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <section className="relative text-gray-700 dark:text-white pt-20 pb-12 md:pt-28 md:pb-20 px-4 md:px-16 overflow-hidden">
      <div
        ref={mountRef}
        className="absolute inset-0 -z-10 pointer-events-none"
      />

      <motion.div
        className="text-left mb-8 md:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="font-anton text-[40px] sm:text-[50px] lg:text-[140px] font-medium px-2 md:px-4 text-gray-800 dark:text-[#cacaca]">
          MY PROJECTS
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-24 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="grid md:grid-cols-2 gap-6 md:gap-10 items-center"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transform transition duration-300 hover:scale-[0.96]"
            >
              {project.type === "video" ? (
                <video
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-lg w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative w-full aspect-video rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <NextLink href={`/projects/${project.id}`}>
                <span className="absolute bottom-2 right-2 md:bottom-4 md:right-4 border border-[#8f8f8f] bg-black/80 text-white dark:text-[#8f8f8f] px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-xl md:rounded-2xl font-semibold opacity-0 group-hover:opacity-100 transition">
                  VIEW PROJECT →
                </span>
              </NextLink>
            </a>

            <div className="relative ">
              <span className="absolute top-0 right-0 text-purple-500 dark:text-lime-400 font-bold text-sm md:text-lg">
                {project.id}
              </span>

              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-8 pr-10 md:pr-14">
                <div className="relative w-12 h-6 md:w-20 md:h-10 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-gray-800 dark:text-[#cacaca] text-lg sm:text-xl md:text-3xl font-bold leading-tight">{project.title}</h3>
              </div>

              <p className="text-gray-800 dark:text-[#8f8f8f] mb-5 md:mb-8 text-sm md:text-base leading-relaxed">{project.description}</p>
              <div className="grid grid-cols-2 gap-y-3 md:gap-y-4 text-xs md:text-sm">
                <div>
                  <span className="block text-purple-500 dark:text-lime-400">Domain</span>
                  <span className="font-semibold">{project.industry}</span>
                </div>
                <div>
                  <span className="block text-purple-500 dark:text-lime-400">Technologies Used</span>
                  <span className="font-semibold"> {Array.isArray(project.services) ? project.services.join(", ") : String(project.services)}</span>
                </div>

              <div className="flex gap-4 md:gap-5 mt-5 md:mt-8">
                {project.gitLink && (
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-purple-500 dark:text-gray-400 dark:hover:text-lime-400 transition"
                  >
                    <Github size={20} className="md:w-6 md:h-6" />
                  </a>
                )}
                {project.previewLink && (
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-purple-500 dark:text-gray-400 dark:hover:text-lime-400 transition"
                  >
                    <Link size={20} className="md:w-6 md:h-6" />
                  </a>
                )}
                {project.linkedinLink && (
                  <a
                    href={project.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-purple-500 dark:text-gray-400 dark:hover:text-lime-400 transition"
                  >
                    <Linkedin size={20} className="md:w-6 md:h-6" />
                  </a>
                )}
              </div>
               
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
