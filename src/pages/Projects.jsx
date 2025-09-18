import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

// Mock projects data
const projects = [
  {
    id: "001",
    title: "Syncorp",
    description:
      "For Syncorp, we developed a comprehensive sales software suite featuring a custom CRM, call center tools, AI-driven automations, local payment integration, and a multilingual client portal.",
    industry: "Sales",
    duration: "1 year",
    services: "Full Stack Development",
    image: "https://via.placeholder.com/500x300", // replace with your screenshot/mockup
    link: "#",
    logo: "https://via.placeholder.com/40x40", // replace with small logo
  },
  {
    id: "002",
    title: "VanguardTech",
    description:
      "For VanguardTech, we designed and built an award-winning data visualization platform with cutting-edge UI/UX and scalable backend infrastructure.",
    industry: "Technology",
    duration: "6 months",
    services: "UI/UX + Backend",
    image: "https://via.placeholder.com/500x300",
    link: "#",
    logo: "https://via.placeholder.com/40x40",
  },
  {
    id: "002",
    title: "VanguardTech",
    description:
      "For VanguardTech, we designed and built an award-winning data visualization platform with cutting-edge UI/UX and scalable backend infrastructure.",
    industry: "Technology",
    duration: "6 months",
    services: "UI/UX + Backend",
    image: "https://via.placeholder.com/500x300",
    link: "#",
    logo: "https://via.placeholder.com/40x40",
  },
];

export default function Projects() {
  const mountRef = useRef(null);

  useEffect(() => {
    // THREE.js scene setup
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

    // Stars
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

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Three.js Background */}
      <div
        ref={mountRef}
        className="absolute inset-0 -z-10 pointer-events-none"
      />

      {/* Heading Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="bebas-neue-regular text-7xl lg:text-8xl font-extrabold tracking-tight">
            My Projects
          </h2>
          <p className="bebas-neue-regular mt-4 text-lg text-gray-400">
            Take a look at some of the works I’ve built
          </p>
        </motion.div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Left - Image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg transform group-hover:scale-[1.02] transition duration-300"
              />
              <span className="oswald-sub absolute bottom-4 right-4 bg-white/90 text-black px-4 py-2 text-sm rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition">
                View project →
              </span>
            </a>

            {/* Right - Info */}
            <div className="relative oswald-sub ">
              {/* Project Number */}
              <span className="absolute top-0 right-0 text-[#34ebd2] font-bold text-lg">
                {project.id}
              </span>

              {/* Logo + Title */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="w-10 h-10 rounded-md"
                />
                <h3 className=" text-[#34ebd2] text-2xl md:text-3xl font-bold">{project.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">{project.description}</p>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div>
                  <span className="block text-gray-500">Industry</span>
                  <span className="font-semibold">{project.industry}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Services</span>
                  <span className="font-semibold">{project.services}</span>
                </div>
                <div>
                  <span className="block text-gray-500">Duration</span>
                  <span className="font-semibold">{project.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
