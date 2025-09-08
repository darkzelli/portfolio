"use client";

import { CustomBadgeProps } from "./custombadge";
import CustomBadge from "./custombadge";
import { nodeBadge, nextBadge, typescriptBadge, pythonBadge, cppBadge, javaBadge, csharpBadge, javaScriptBadge, dartBadge } from "@/app/badges";
import {
  htmlBadge,
  cssBadge,
  reactjsBadge,
  gitBadge,
  nodejsBadge,
  supabaseLightBadge,
  nextjsLightBadge,
  reactQueryLightBadge,
  awsSesLightBadge,
  coolifyLightBadge
} from "@/app/badges";

const languages: CustomBadgeProps[] = [
  javaScriptBadge,
  typescriptBadge,
  pythonBadge,
  javaBadge,
  csharpBadge,
  dartBadge
]

const other: CustomBadgeProps[] = [
  htmlBadge,
  cssBadge,
  reactjsBadge,
  gitBadge,
  nodejsBadge,
  supabaseLightBadge,
  nextjsLightBadge,
  reactQueryLightBadge,
  awsSesLightBadge,
  coolifyLightBadge
];

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
