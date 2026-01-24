import React from "react";
import SectionHeader from "../components/About/SectionHeader";
import Timeline from "../components/About/Timeline";
import AsmImg from "../assets/images/asm.webp"
import CusatImg from "../assets/images/cusat.png"
import Contactform from "../components/Contactform";
import AboutSkills from "../components/About/AboutSkills";
import Experience from "../components/About/Experience";
import AboutHero from "../components/About/AboutHero";

export default function About() {
  return (
    <div className=" text-white overflow-hidden">
      {/* Hero */}
      <AboutHero />
      <AboutSkills/>
      <Experience/>

      {/* Education Timeline */}
      <section className="py-20 px-6 max-w-5xl mx-auto ">
        <SectionHeader
          title="Education"
          subtitle="A timeline of my academic background"
        />
        <Timeline
          items={[
            {
              year: "2020 – 2024",
              title: "Cochin University of Science and Technology",
              description: "B.Tech in Computer Science Engineering. Coursework: Data Structures, Web Development, AI/ML",
              grade: "CGPA: 7.5",
              image: CusatImg,
            },
            {
              year: "2018 – 2020",
              title: "ASMHSS Velliyanchery, Kerala State Board",
              description: "Class XII - Computer Science",
              grade: "Percentage: 74%",
              image: AsmImg,
            },
          ]}
        />
      </section>

      <Contactform/>
    </div>
  );
}
