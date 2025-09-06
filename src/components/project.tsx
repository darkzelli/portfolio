"use client";
import projects from "@/app/data";
import { Safari } from "./magicui/safari";
import ProjectInfo, { ProjectInfoProps } from "./projectInfo";
import { useEffect, useState } from "react";

export interface ProjectProps extends ProjectInfoProps{
  gifUrl: string;
}

export default function Project({ id: initialId }: { id: number }) {
  const [id, setId] = useState(initialId);
  const [projectData, setProjectData] = useState<ProjectProps | null>(null);

  useEffect(() => {
    setProjectData(projects[id]);
  }, [id]);

  if (!projectData) return null; // or a loading spinner

  return (
    <div className="flex flex-col justify-start w-[320px] lg:w-[400px] h-auto mb-2">
      <Safari
        key={id}
        url={projectData.website}
        className="w-[320px] lg:w-[400px] h-[251px] button-35"
        imageSrc={projectData.gifUrl}
      />
      <ProjectInfo
        projectName={projectData.projectName}
        description={projectData.description}
        dateStarted={projectData.dateStarted}
        dateFinished={projectData.dateFinished}
        badges={projectData.badges}
        github={projectData.github}
        website={projectData.website}
        accentColor={projectData.accentColor}
      />
      <div className="flex flex-row rounded-xl mt-5 justify-center items-center text-white p-2.5">
        {projects.map((project, index) => (
          <span
            key={index}
            onClick={() => setId(index)}
            style={{
              background: index === id ? projectData.accentColor : '#8d8f91'
            }}
            className="w-[20px] h-[20px] mr-1 rounded-full cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
