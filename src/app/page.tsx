"use client";
import Accordian from "@/components/accordian";
import CustomChatBox from "@/components/customChatBox";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Socials from "@/components/socials";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-2 lg:flex-row">
        <div><Projects/></div>
        <div className="flex flex-col"><Socials/><Experience/><CustomChatBox/></div>
        <div className="lg:w-[235px] w-[320px]"><Accordian title="Towson University" subtext="Bachelor of Science, Computer Science." description=" Courses: Data Structures & Algorithms, Calculus 1 & 2, Discrete Mathematics" dateStarted={2022} dateFinished={2026} gpa={3.088}/><Skills/></div>
    </div>
  );
}
