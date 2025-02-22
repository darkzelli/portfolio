"use client";
import { Suspense, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Loading from "./loading";






export interface socialCardInterface{
  url?: string;
  icon?: string;
}
export default function SocialCard({url, icon}: socialCardInterface) {
  const [selectedIcon, setSelectedIcon] = useState<React.ReactNode>( <Loading/>);


  useEffect(() => {
    switch (icon) {
      case "github":
        setSelectedIcon(<><FaGithub/></>)
        break;
      case "discord":
        setSelectedIcon(<><FaDiscord/></>)
        break;
      case "gmail":
        setSelectedIcon(<><SiGmail/></>)
        break;
      case "linkedIn":
        setSelectedIcon(<><FaLinkedinIn/></>)
        break;
      case "youtube":
        setSelectedIcon(<><FaYoutube/></>)
        break;
      default:
        setSelectedIcon(<><FaGithub/></>)
        break;
    }
  }, [icon])

  return (
    <a href={url} className=" button-35 flex items-center hover:text-2xl justify-center w-[50px] h-[50px] border border-dark-5 rounded-xl mr-2 hover:w-[70px] hover:h-[70px] transition-all duration-[1s] ease-in">
        {selectedIcon}
    </a>
  );
}
