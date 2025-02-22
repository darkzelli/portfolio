"use client";
import Accordian from "@/components/accordian";
import ProjectSlideShow from "@/components/projectsSlideShow";
import { accordians } from "./data";
import CustomBadge from "@/components/custombadge";
import CustomChatBox from "@/components/customChatBox";
import SocialCard from "@/components/socialCard";
import Skills from "@/components/skills";
import { Safari } from "@/components/magicui/safari";
import Project from "@/components/project";
import projects from "./data";
import portfolioreviewgif from './images/portfolioreview.gif'
const portfolio = projects[0]
export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen overflow-scroll ">
      <div className="flex flex-col justify-start w-[320px] lg:w-[400px] h-[620px]">
        <CustomBadge text="Projects" bgColor="#A005FF"/>
        <Safari url="porfolioreview.me" className="w-[320px] lg:w-[400px] h-[251px] " imageSrc="https://i.imgur.com/qRh51F7.gif"/>
        <Project  projectName={portfolio.projectName} description={portfolio.description} dateStarted={portfolio.dateStarted} dateFinished={portfolio.dateFinished}/>
      </div>
      <div className="skills flex flex-col w-[320px] lg:ml-3  h-auto lg:h-[690px] justify-start  lg:w-[400px]  lg:overflow-y-scroll">
        <div className="flex  flex-col justify-center ">
          <CustomBadge text="Links" bgColor="#A005FF"/>
          <div className="flex flex-row items-center h-[70px] mb-2">
            <SocialCard url="https://github.com/darkzelli"/>
            <SocialCard url="mailto:zacharyhallellis@gmail.com?" icon="gmail"/>
            <SocialCard url="https://github.com/darkzelli" icon="linkedIn"/>
            <SocialCard url="https://github.com/darkzelli" icon="youtube"/>
          </div>
        </div>
        <CustomBadge text="Experience" bgColor="#A005FF"/>
        {accordians.map((accordian, index) => (
          <Accordian key={index} title={accordian.title} description={accordian.description} dateStarted={accordian.dateStarted} dateFinished={accordian.dateFinished}/>
        ))}
        <div className="w-[400px] h-[400px] border border-dark-3 p-4  rounded-xl hidden lg:flex ">
          <CustomChatBox/>
        </div>
      </div>
      <div className="flex flex-col lg:ml-3 justify-start  w-[320px] lg:w-[250px]">
        <CustomBadge text="Education" bgColor="#A005FF"/>
        <Accordian title="Towson University" subtext="Bachelor of Science, Computer Science." description=" Courses: Data Structures & Algorithms, Calculus 1 & 2, Discrete Mathematics" dateStarted={2022} dateFinished={2026} gpa={3.088}/>
        <CustomBadge text="Skills" bgColor="#A005FF"/>
        <Skills/>
      </div>

    </div>
  );
}
