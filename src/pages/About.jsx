import React from "react";
import SectionHeader from "../components/About/SectionHeader";
import Timeline from "../components/About/Timeline";
import Sidebar from "../components/Navbar";
import Schl1Img from "../assets/images/school1.png"
import Schl2Img from "../assets/images/school2.png"
import CollegeImg from "../assets/images/college.jpg"
import Contactform from "../components/Contactform";
import AboutSkills from "../components/About/AboutSkills";
import Experience from "../components/About/Experience";
import AboutHero from "../components/About/AboutHero";

export default function About() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero */}
      <Sidebar/>
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
              year: "2018",
              title: "Albab Central School",
              description: "Completed 10th grade with strong focus on Science & Math.",
              grade: "Grade: 85%",
              image: Schl1Img,
            },
            {
              year: "2018 – 2020",
              title: "Government Higher Secondary School, Kerala",
              description: "Higher Secondary in Computer Science stream.",
              grade: "Grade: 92%",
              image: Schl2Img,
            },
            {
              year: "2020 – 2024",
              title: "B.Tech in Computer Science – XYZ College",
              description: "Focused on MERN stack, React.js, Node.js, and full-stack dev.",
              grade: "CGPA: 8.7",
              image: CollegeImg,
            },
          ]}
        />
      </section>

      <Contactform/>
    </div>
  );
}
