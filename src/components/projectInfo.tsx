import CustomBadge from "./custombadge";
import { CustomBadgeProps } from "./custombadge";
import { BsGithub } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";


export interface ProjectInfoProps{
projectName: string;
dateStarted?: string;
dateFinished?: string;
description?: string;
badges?: CustomBadgeProps[];
github?: string;
website?: string;
accentColor?: string;

}
export default function ProjectInfo({projectName, dateStarted,  dateFinished, description,badges, github, website, accentColor}: ProjectInfoProps) {
  return (
    <div className=" flex flex-col border border-dark-3 p-4 rounded-xl mt-2 button-35 h-[400px]">
        <div className="mt-1 text-2xl font-bold">{projectName}</div>
        <div className="mt-1 " style={{color: accentColor}}>{dateStarted} - {dateFinished}</div>
        <div className=" mt-2 text-[#abaeb3] h-[200px] overflow-scroll doscroll" style={{ scrollbarColor: `${accentColor} transparent` }}>{description}</div>
        <div
          className="flex flex-wrap flex-row mt-3 h-auto overflow-scroll noscroll">
          {badges?.map((badge, index) => (
            <CustomBadge key={index} text={badge.text} bgColor={badge.bgColor} textColor={badge.textColor}/>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row ">
          
          <a href={github}className="mt-5 p-[5px] text-white text-1xl flex flex-row items-center justify-evenly w-[110px] rounded-sm" style={{backgroundColor: accentColor}}>
              <BsGithub/>
              <div>Source</div>
          </a>
          </div>
        </div>
    </div>
  );
}
