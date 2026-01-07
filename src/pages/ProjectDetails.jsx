import { useParams } from "react-router-dom";
import { projects } from "../data/projectData";
import Navbar from "../components/Navbar";
import React from "react";

export default function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
    (p) => String(p.id) === projectId
  );

  if (!project) {
    return <div className="text-white p-10">Project not found</div>;
  }

  return (
    <section className="bg-black text-white min-h-screen px-6 md:px-16 py-20">
      <Navbar />

      {/* HERO */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 mb-10">
        {/* Left */}
        <div>
          <h1 className="font-anton text-[80px] md:text-[120px] leading-none text-[#cacaca]">
            {project.title}
          </h1>
          <p className="font-sans text-[#8f8f8f] mt-6 max-w-xl">
            {project.tagline}
          </p>
        </div>

        {/* Right Meta */}
        <div className="space-y-6 font-sans text-sm">
          <div>
            <span className="block text-gray-500">(YEAR)</span>
            <span className="text-lg">{project.year}</span>
          </div>

          <div>
            <span className="block text-gray-500">(TIMELINE)</span>
            <span className="text-lg">{project.timeline}</span>
          </div>

          <div>
            <span className="block text-gray-500">(SERVICES)</span>
            <span className="text-lg"> {Array.isArray(project.services) ? project.services.join(", ") : String(project.services)}</span>
          </div>

          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lime-400 text-lg font-semibold mt-4"
            >
              Live Website ↗
            </a>
          )}
        </div>
      </div>

      {/* PROJECT VISUAL */}
      <div className="max-w-7xl mx-auto mb-10">
        {project.type === "video" ? (
          <video
            src={project.image}
            autoPlay
            loop
            muted
            controls
            className="w-full rounded-xl shadow-lg"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-xl shadow-lg"
          />
        )}
      </div>

      {/* ABOUT PROJECT */}
      <div className="max-w-7xl mx-auto mb-10">
        <h3 className="font-anton text-4xl mt-4 mb-5 text-[#cacaca]">
          About the Project<span className="text-lime-400">.</span>
        </h3>
        <p className="font-sans text-[#8f8f8f] max-w-7xl text-[16px] lg:text-[20px] leading-relaxed">
          {project.about}
        </p>
      </div>

      {/* CHALLENGES & SOLUTIONS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 ">
        <div>
          <h3 className="font-anton text-4xl mb-6 text-[#cacaca]">
            Challenges<span className="text-lime-400">.</span>
          </h3>
          <p className="font-sans text-[#8f8f8f] text-[16px] lg:text-[20px] leading-relaxed">
            {project.challenges}
          </p>
        </div>

        <div>
          <h3 className="font-anton text-4xl mb-6 text-[#cacaca]">
            Solutions<span className="text-lime-400">.</span>
          </h3>
          <p className="font-sans text-[#8f8f8f] text-[16px] lg:text-[20px] leading-relaxed">
            {project.solutions}
          </p>
        </div>
      </div>
    </section>
  );
}
