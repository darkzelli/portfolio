import Link from 'next/link'
import projects from '../data';
import Project from "@/components/project";
import { FaArrowLeft } from 'react-icons/fa';
export default async function ProjectsPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen overflow-hidden">
      <div className='flex flex-col lg:flex-row lg:justify-start lg:w-[1000px] lg:h-[700px] overflow-scroll noscroll gap-5'>
      {projects?.map((project, index) => (
           <Project
              key={index}
              projectName={project.projectName}
              dateStarted={project.dateStarted}
              dateFinished={project.dateFinished}
              description={project.description}
              badges={project.badges}
              github={project.github}
              website={project.website}
              gifUrl={project.gifUrl}
              accentColor={project.accentColor}
              />
      ))}
      </div>
      <a href='/' className='flex left-5 top-5 w-full items-center justify-center text-2xl text-[#A005FF]'>
        <FaArrowLeft/>
      </a>

    </div>
  );

}
