"use client";
import { Safari } from "./magicui/safari";
import ProjectInfo, { ProjectInfoProps } from "./projectInfo";
export interface ProjectProps extends ProjectInfoProps{
  gifUrl: string;
}

export default function Project({ projectName, dateStarted,  dateFinished, description,badges, github, website, gifUrl, accentColor}: ProjectProps) {
  return (
    <div className="flex flex-col justify-start w-[320px] lg:w-[400px] h-auto mb-2">
            <Safari url={website} className="w-[320px] lg:w-[400px] h-[251px] button-35" imageSrc={gifUrl}/>
            <ProjectInfo  projectName={projectName} description={description} dateStarted={dateStarted} dateFinished={dateFinished} badges={badges} github={github} website={website} accentColor={accentColor}/>
    </div>
  );
}
