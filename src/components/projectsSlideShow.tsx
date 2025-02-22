"use client";
import projects from "@/app/data";
import Project from "./project";
export default function ProjectSlideShow() {
  return (
    <div className="flex flex-row">
      {projects.map((project, index) => (
        <Project key={index}  projectName={project.projectName} dateStarted={project.dateStarted} dateFinished={project.dateFinished} description={project.description} urlColor={project.urlColor} gifUrl={project.gifUrl} badges={project.badges}/>
       ))}
    </div>
  );
}
