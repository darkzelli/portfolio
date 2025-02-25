"use client";
import { FaArrowRight } from "react-icons/fa";

export default function BlogButton() {
  return (
    <a href="/blog" className="font-bold text-white  button-35 flex flex-row justify-between border border-dark-3 mb-2 p-4 rounded-xl cursor-pointer w-full bg-[#A005FF] ">
      <div>Blog</div>
      <div><FaArrowRight/></div>
    </a>
  );
}
