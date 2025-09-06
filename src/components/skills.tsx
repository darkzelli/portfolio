"use client";

import { CustomBadgeProps } from "./custombadge";
import CustomBadge from "./custombadge";
import { nodeBadge, nextBadge, typescriptBadge, pythonBadge, cppBadge, javaBadge} from "@/app/badges";


const languages: CustomBadgeProps[] = [
  typescriptBadge,
  pythonBadge,
  cppBadge,
  javaBadge,
]

const other: CustomBadgeProps[] = [
    { "text": "HTML", bgColor: "#e6e9ed",textColor: "#000"},
    { "text": "CSS", bgColor: "#e6e9ed",textColor: "#000" },
    { "text": "ReactJS", bgColor: "#e6e9ed",textColor: "#000" },
    { "text": "Git", bgColor: "#e6e9ed",textColor: "#000" },
    { "text": "NodeJS", bgColor: "#e6e9ed",textColor: "#000" },
    { "text": "Supabase", bgColor: "#e6e9ed",textColor: "#000" },
    { "text": "Nextjs", bgColor: "#e6e9ed",textColor: "#000" },
    { "text": "React Query", bgColor: "#e6e9ed",textColor: "#000" },
    { "text": "AWS SES", bgColor: "#e6e9ed",textColor: "#000" },
    { "text": "Coolify", bgColor: "#e6e9ed",textColor: "#000" }

]

const interests: CustomBadgeProps[] = [
  { "text": "Graphic Design", bgColor: "#e6e9ed",textColor: "#000"},
  { "text": "Youtube", bgColor: "#e6e9ed",textColor: "#000"},
  { "text": "Twitch", bgColor: "#e6e9ed",textColor: "#000"},
  { "text": "Drawing", bgColor: "#e6e9ed",textColor: "#000"},
  { "text": "Creating", bgColor: "#e6e9ed",textColor: "#000"},
]
export default function Skills() {
  return (
    <div className="noscroll p-3 flex flex-col  border border-dark-3 lg:w-[235px] w-[320px] scrollbar-none rounded-xl button-35 overflow-scroll">
        <div className="mb-3 tracking-widest">Languages:</div>
        <div className="flex flex-wrap mb-3">
          {languages?.map((badge, index) => (
                      <CustomBadge key={index} text={badge.text} bgColor={badge.bgColor} textColor={badge.textColor} mr="5px"/>
          ))}
        </div>
        <div className="mb-3 tracking-widest">Other:</div>
        <div className="flex flex-wrap mb-3">
          {other?.map((badge, index) => (
                      <CustomBadge key={index} text={badge.text} bgColor={badge.bgColor} textColor={badge.textColor} mr="5px"/>
          ))}
        </div>
        <div className="mb-3 tracking-widest">Interests:</div>
        <div className="flex flex-wrap mb-3">
          {interests?.map((badge, index) => (
                      <CustomBadge key={index} text={badge.text} bgColor={badge.bgColor} textColor={badge.textColor} mr="5px"/>
          ))}
        </div>

    </div>
  );
}
