'use client';

import { useParams, useRouter } from "next/navigation";
import { projects } from "../../../data/projectData";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.projectId;

  const project = projects.find(
    (p) => String(p.id) === projectId
  );

  if (!project) {
    return <div className="text-white p-10">Project not found</div>;
  }

  return (
    <section className=" text-gray-700 dark:text-white min-h-screen px-6 md:px-16 py-20">
      <button 
        onClick={() => router.back()} 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 transition-colors w-12 h-12 rounded-full border border-gray-600 justify-center hover:border-[#8f8f8f] hover:bg-[#8f8f8f] text-gray-800 dark:text-[#cacaca] hover:text-blue-500 dark:hover:text-cyan-400"
      >
        <ArrowLeft className="w-7 h-7"/>
      </button>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 mb-10">
        <div>
          <h1 className="font-anton text-[65px] md:text-[80px] leading-none text-gray-800 dark:text-[#cacaca]">
            {project.title}
          </h1>
          <p className="font-sans text-gray-800 dark:text-[#8f8f8f] mt-6 max-w-xl">
            {project.tagline}
          </p>
        </div>

        <div className="space-y-6 font-sans text-sm">
          <div>
            <span className="block text-gray-800 dark:text-gray-500">(YEAR)</span>
            <span className="text-lg">{project.year}</span>
          </div>

          <div>
            <span className="block text-gray-800 dark:text-gray-500">(TIMELINE)</span>
            <span className="text-lg">{project.timeline}</span>
          </div>

          <div>
            <span className="block text-gray-800 dark:text-gray-500">(TECH STACK)</span>
            <span className="text-lg"> {Array.isArray(project.services) ? project.services.join(", ") : String(project.services)}</span>
          </div>

          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-500 dark:text-cyan-400 text-lg font-semibold mt-4"
            >
              Live Website ↗
            </a>
          )}
        </div>
      </div>

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
          <div className="relative w-full aspect-video rounded-xl shadow-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto mb-10">
        <h3 className="font-anton text-4xl mt-4 mb-5 text-gray-800 dark:text-[#cacaca]">
          About the Project<span className="text-blue-500 dark:text-cyan-400">.</span>
        </h3>
        <p className="font-sans text-gray-600 dark:text-[#8f8f8f] max-w-7xl text-[16px] lg:text-[20px] leading-relaxed">
          {project.about}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 ">
        <div>
          <h3 className="font-anton text-4xl mb-6 text-gray-800 dark:text-[#cacaca]">
            Challenges<span className="text-blue-500 dark:text-cyan-400">.</span>
          </h3>
          <p className="font-sans text-gray-600 dark:text-[#8f8f8f] text-[16px] lg:text-[20px] leading-relaxed">
            {project.challenges}
          </p>
        </div>

        <div>
          <h3 className="font-anton text-4xl mb-6 text-gray-800 dark:text-[#cacaca]">
            Solutions<span className="text-blue-500 dark:text-cyan-400">.</span>
          </h3>
          <p className="font-sans text-gray-600 dark:text-[#8f8f8f] text-[16px] lg:text-[20px] leading-relaxed">
            {project.solutions}
          </p>
        </div>
      </div>
    </section>
  );
}
