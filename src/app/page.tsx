"use client";
import Accordian from "@/components/accordian";
import CustomChatBox from "@/components/customChatBox";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Skills from "@/components/skills";
import Socials from "@/components/socials";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Slide } from "react-awesome-reveal";
import BlogButton from "@/components/blogbutton";
import ProjectButtons from "@/components/projectButtons";
import projects from "./data";
const featuredProject = projects[0];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2 lg:flex-row">
        <div className="flex flex-col justify-center items-center">
          <Project
            projectName={featuredProject.projectName}
            dateStarted={featuredProject.dateStarted}
            dateFinished={featuredProject.dateFinished}
            description={featuredProject.description}
            badges={featuredProject.badges}
            github={featuredProject.github}
            website={featuredProject.website}
            gifUrl={featuredProject.gifUrl}
            />
          <ProjectButtons/>
        </div>
        <div className="">
          <Socials/>
          <Experience/>
          <CustomChatBox/>
        </div>
        <div className="lg:w-[235px] w-[320px] flex flex-col gap-2">
          <Accordian title="Towson University" subtext="Bachelor of Science, Computer Science." description=" Courses: Data Structures & Algorithms, Calculus 1 & 2, Discrete Mathematics" dateStarted={2022} dateFinished={2026} gpa={3.088}/>
          <Skills/>
          <BlogButton/>
        </div>
    </div>
  );
}
