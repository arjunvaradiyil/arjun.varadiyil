'use client';

import { useParams, useRouter } from "next/navigation";
import { projects } from "../../../data/projectData";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

  // Get related projects (excluding current project)
  const relatedProjects = projects
    .filter((p) => String(p.id) !== projectId)
    .slice(0, 10);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString)
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .toLowerCase();
  };

  return (
    <section className="text-gray-700 dark:text-white min-h-screen px-6 md:px-16 py-20">
      {/* Header - Keep same as old code */}
      <button 
        onClick={() => router.back()} 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 transition-colors w-12 h-12 rounded-full border border-gray-600 justify-center hover:border-[#8f8f8f] hover:bg-[#8f8f8f] text-gray-800 dark:text-[#cacaca] hover:text-blue-500 dark:hover:text-cyan-400"
      >
        <ArrowLeft className="w-7 h-7"/>
      </button>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-[128px] sm:mt-[4.27vw]">
        {/* Left Sidebar - Sticky */}
        <div className="max-w-[628px] sm:w-[32.7vw] sm:sticky sm:top-[calc(80px+4.27vw)] h-min overflow-hidden">
          <div className="border-b border-b-[#EF3942] pb-[20px] sm:pb-[1.82vw]">
            <p className="text-[#666666] text-sm sm:text-base mb-4">
              {project.industry || "Portfolio Project"}
            </p>
            <h1 className="uppercase mt-[24px] sm:mt-[1.25vw] text-[40px] md:text-[56px] leading-tight text-gray-800 dark:text-[#cacaca] font-anton break-words">
              {project.title}
            </h1>
          </div>
          <div className="mt-[24px] sm:mt-[1.82vw] flex sm:justify-between gap-[53px] sm:gap-4 text-[#666666]">
            <div className="flex flex-col">
              <p className="mb-4 sm:mb-[0.72vw] text-sm sm:text-base">
                Year:
              </p>
              <p className="text-sm sm:text-base">
                {project.year || "N/A"}
              </p>
            </div>
            <div>
              <p className="mb-4 sm:mb-[0.72vw] text-sm sm:text-base">
                Timeline:
              </p>
              <p className="text-sm sm:text-base">
                {project.timeline || "N/A"}
              </p>
            </div>
          </div>
          {(project.role || project.teamMembers || project.duration) && (
            <div className="mt-[24px] sm:mt-[1.82vw] space-y-3 text-[#666666]">
              {project.role && (
                <div>
                  <p className="mb-1 text-sm sm:text-base">Role:</p>
                  <p className="text-sm sm:text-base">{project.role}</p>
                </div>
              )}
              {project.teamMembers != null && (
                <div>
                  <p className="mb-1 text-sm sm:text-base">Team:</p>
                  <p className="text-sm sm:text-base">{project.teamMembers} members</p>
                </div>
              )}
              {project.duration && (
                <div>
                  <p className="mb-1 text-sm sm:text-base">Duration:</p>
                  <p className="text-sm sm:text-base">{project.duration}</p>
                </div>
              )}
            </div>
          )}
          {project.previewLink && (
            <div className="mt-[24px] sm:mt-[1.82vw]">
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 dark:text-cyan-400 text-lg font-semibold"
              >
                Live Website ↗
              </a>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-[40px] sm:mt-0">
          <div className="mb-[40px] sm:mb-[4.68vw]">
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

          {project.tagline && (
            <p className="text-[#666666] font-semibold mb-6 text-base">
              {project.tagline}
            </p>
          )}

          {/* About the Project */}
          {project.about && (
            <div className="text-[#666666] mb-8">
              <p className="text-[14px] lg:text-[18px] leading-relaxed">
                {project.about}
              </p>
            </div>
          )}

          {/* Responsibilities */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div className="mt-8">
              <h3 className="font-anton text-xl sm:text-3xl mb-4 sm:mb-6 text-gray-800 dark:text-[#cacaca]">
                Responsibilities<span className="text-blue-500 dark:text-cyan-400">.</span>
              </h3>
              <ul className="text-[#666666] text-[14px] lg:text-[18px] leading-relaxed list-disc list-inside space-y-2">
                {project.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <div className="mt-8">
              <h3 className="font-anton text-xl sm:text-3xl mb-4 sm:mb-6 text-gray-800 dark:text-[#cacaca]">
                Challenges<span className="text-blue-500 dark:text-cyan-400">.</span>
              </h3>
              <p className="text-[#666666] text-[14px] lg:text-[18px] leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}

          {/* Solutions */}
          {project.solutions && (
            <div className="mt-8">
              <h3 className="font-anton text-xl sm:text-3xl mb-4 sm:mb-6 text-gray-800 dark:text-[#cacaca]">
                Solutions<span className="text-blue-500 dark:text-cyan-400">.</span>
              </h3>
              <p className="text-[#666666] text-[14px] lg:text-[18px] leading-relaxed">
                {project.solutions}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          {project.services && (
            <div className="mt-8">
              <h3 className="font-anton text-xl sm:text-3xl mb-4 sm:mb-6 text-gray-800 dark:text-[#cacaca]">
                Tech Stack<span className="text-blue-500 dark:text-cyan-400">.</span>
              </h3>
              <p className="text-[#666666] text-[14px] lg:text-[18px] leading-relaxed">
                {Array.isArray(project.services) ? project.services.join(", ") : String(project.services)}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[80px] sm:h-[4.27vw]"></div>

      {/* Related Projects Section */}
      <section className="relative">
        <div className="flex gap-[3vw] sm:mb-[3.22vw]">
          <div className="min-w-[50%] sm:min-w-auto w-[28vw] max-w-[540px] flex items-stretch sm:items-end justify-start gap-4">
            <h2 className="pb-4 uppercase sm:pb-0 text-[32px] md:text-[44px] leading-tight text-gray-800 dark:text-[#cacaca] font-anton">
              RELATED
              <br />
              PROJECTS
            </h2>
            <span className="block w-[0.8px] h-auto sm:h-[5vw] translate-none sm:-translate-y-[9px] bg-[#323031]"></span>
          </div>
          <span></span>
        </div>
        
        {/* Horizontal Scroller for Related Projects */}
        <div className="overflow-x-auto pb-8 -mx-6 md:-mx-16 px-6 md:px-16">
          <div className="flex gap-0 min-w-max">
            {relatedProjects.map((relatedProject, index) => (
              <div
                key={relatedProject.id}
                className={`min-w-[317px] lg:min-w-[28vw] max-w-[540px] border border-[#AAAAAA] ${index === 0 ? 'border-l' : 'border-l-0'} flex flex-col bg-white dark:bg-gray-900`}
              >
                <div className="min-h-[177px] h-[15.10vw] max-h-[290px] relative bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  {relatedProject.type === "video" ? (
                    <video
                      src={relatedProject.image}
                      className="w-full h-full object-cover"
                      muted
                    />
                  ) : (
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  )}
                </div>
                <div className="px-[clamp(16px,2.2vw,44px)] pt-[clamp(8px,0.8vw,17px)] pb-[clamp(16px,1.3vw,26px)] flex-1 flex flex-col bg-white dark:bg-gray-900">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <p className="text-[#878585] dark:text-[#878585] text-sm">
                      {relatedProject.industry || "Portfolio Project"}
                    </p>
                    <p className="text-[#878585] dark:text-[#878585] text-sm">
                      {relatedProject.year || "N/A"}
                    </p>
                  </div>
                  <h3 className="mt-4 line-clamp-2 flex-1 font-anton text-lg sm:text-xl text-gray-800 dark:text-[#cacaca] mb-4">
                    {relatedProject.title}
                  </h3>
                  <div className="flex items-center gap-4 justify-end mt-auto">
                    <Link href={`/projects/${relatedProject.id}`}>
                      <p className="text-[#666666] dark:text-[#666666] text-sm sm:text-base hover:text-blue-500 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                        View Project →
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {relatedProjects.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-[#666666] text-base sm:text-lg">
              No related projects found
            </p>
          </div>
        )}
      </section>
    </section>
  );
}
