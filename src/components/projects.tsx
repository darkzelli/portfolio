"use client";
import { Safari } from "./magicui/safari";
import projects from "@/app/data";
import Project from "./project";
const portfolio = projects[0]
export default function Projects() {
  return (
    <div className="flex flex-col justify-start w-[320px] lg:w-[400px] h-[620px]">
            <Safari url="porfolioreview.me" className="w-[320px] lg:w-[400px] h-[251px] button-35" imageSrc="https://i.imgur.com/qRh51F7.gif"/>
            <Project  projectName={portfolio.projectName} description={portfolio.description} dateStarted={portfolio.dateStarted} dateFinished={portfolio.dateFinished}/>
    </div>
  );
}
