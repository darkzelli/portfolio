import Image from "next/image";
import { Safari } from "@/components/magicui/safari";
import { SafariProps } from "@/components/magicui/safari";
import CustomBadge from "./custombadge";
import { CustomBadgeProps } from "./custombadge";
import { BsGithub } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";


export interface ProjectProps{
projectName: string;
dateStarted?: string;
dateFinished?: string;
description?: string;
urlColor?: string;
gifUrl?: string;
badges?: CustomBadgeProps[];
}
export default function Project({projectName, dateStarted,  dateFinished, description, urlColor, gifUrl, badges, }: ProjectProps) {
  return (
    <div className=" flex flex-col border border-dark-3 p-4 rounded-xl mt-2 button-35">
        <div className="mt-1 text-2xl font-bold">{projectName}</div>
        <div className="mt-1 text-[#A005FF]">{dateStarted} - {dateFinished}</div>
        <div className=" mt-2 text-[#abaeb3]">{description}</div>
        <div className="flex flex-wrap flex-row mt-3">
          {badges?.map((badge, index) => (
            <CustomBadge key={index} text={badge.text} bgColor={badge.bgColor} textColor={badge.textColor}/>
          ))}
        </div>
        <div className="flex flex-row ">
          <a href="https://tailwindcss.com/docs/font-weight" className="mr-3 mt-5 p-[5px] text-white text-1xl flex flex-row items-center justify-evenly  bg-black w-[110px] rounded-sm">
              <CiGlobe/>
              <div>Website</div>
          </a>
          <a href="https://tailwindcss.com/docs/font-weight" className="mt-5 p-[5px] text-white text-1xl flex flex-row items-center justify-evenly  bg-[#A005FF] w-[110px] rounded-sm">
              <BsGithub/>
              <div>Source</div>
          </a>
        </div>
    </div>
  );
}
