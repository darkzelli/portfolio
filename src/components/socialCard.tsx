"use client";
import { Suspense, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import Loading from "./loading";

export interface socialCardInterface{
  type?: string;
  url?: string;
  icon?: string;
}
export default function SocialCard({url, icon, type}: socialCardInterface) {
  const [selectedIcon, setSelectedIcon] = useState<React.ReactNode>( <Loading/>);
  const [hoverColor, setHoverColor] = useState<string>("hover:text-[#A005FF]");

  useEffect(() => {
    switch (icon) {
      case "github":
        setSelectedIcon(<><FaGithub/></>);
        setHoverColor("hover:text-[#A005FF]");
        break;
      case "discord":
        setSelectedIcon(<><FaDiscord/></>);
        setHoverColor("hover:text-[#5865F2]");
        break;
      case "gmail":
        setSelectedIcon(<><SiGmail/></>);
        setHoverColor("hover:text-[#D44638]");
        break;
      case "linkedIn":
        setSelectedIcon(<><FaLinkedinIn/></>);
        setHoverColor("hover:text-[#0A66C2]");
        break;
      case "youtube":
        setSelectedIcon(<><FaYoutube/></>);
        setHoverColor("hover:text-[#FF0000]");
        break;
      case "resume":
        setSelectedIcon(<><FaAddressCard/></>);
        setHoverColor("hover:text-[#438a56]");
        break;
      default:
        setSelectedIcon(<><FaGithub/></>);
        setHoverColor("hover:text-[#A005FF]");
        break;
    }
  }, [icon]);

  return (
    <a
      type={type}
      href={url}
      className={`button-35  flex items-center justify-center w-[50px] h-[50px] border border-dark-5 rounded-xl mr-2 hover:w-[70px] hover:h-[70px] transition-all duration-100 ease-in ${hoverColor}`}
    >
      {selectedIcon}
    </a>
  );
}
