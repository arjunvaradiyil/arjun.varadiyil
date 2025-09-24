import React from "react";
import SectionHeader from "../components/SectionHeader";
import StorySection from "../components/StorySection";
import Timeline from "../components/Timeline";
import TechStackGrid from "../components/TechStackGrid";
import CallToAction from "../components/CallToAction";
import AboutHero from "../components/AboutHero";

import DanceImg from "../assets/images/dance.jpg";
import SketchImg from "../assets/images/sketch.jpg";
import MoviesImg from "../assets/images/movies.jpg";
import ReadingImg from "../assets/images/reading.jpg";
import Schl1Img from "../assets/images/school1.png"
import Schl2Img from "../assets/images/school2.png"
import CollegeImg from "../assets/images/college.jpg"

export default function About() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero */}
      <AboutHero />

      {/* Story sections */}
      <StorySection
        title="Coding is My Craft"
        text="Building clean, interactive web applications is where I shine. From MERN stack to Remix and Three.js, I love pushing boundaries."
        img={DanceImg}
      />
      <StorySection
        title="Dance – My Soul Language"
        text="I am a trained classical dancer. Dance has taught me discipline, rhythm, and expression – qualities I carry into my code."
        img={DanceImg}
        reverse
      />
      <StorySection
        title="Sketching & Creativity"
        text="Art is another part of me. I love sketching and drawing, which fuels my eye for design and detail in development."
        img={SketchImg}
      />
      <StorySection
        title="Movies & Series"
        text="A storyteller at heart, I watch movies and series to learn narratives, emotions, and design inspiration."
        img={MoviesImg}
        reverse
      />
      <StorySection
        title="My New Passion – Reading"
        text="Recently, I started reading books and it has become my favorite hobby. Every book is a new world, inspiring me more than anything else."
        img={ReadingImg}
      />

      {/* Education Timeline */}
      <section className="py-20 px-6 max-w-5xl mx-auto oswald-sub ">
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

      {/* Tech Stack */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeader title="Tech I Work With" subtitle="Tools that empower my creativity" />
        <TechStackGrid />
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
