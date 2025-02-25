"use client";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectButtons() {
  return (
      <a href="/projects" className="flex flex-row w-full">
              <div className="text-white cursor-pointer font-bold  button-35 flex items-center justify-between border border-dark-3 p-4 rounded-xl button-35 w-full bg-[#A005FF]">More Projects<FaArrowRight/></div>
      </a>
  );
}




