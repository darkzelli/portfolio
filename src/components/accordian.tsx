"use client";
import { useState } from 'react';

export interface accordianInterface {
  title: string;
  description: string;
  dateStarted: number;
  dateFinished: number;
  gpa?: number | null;
  subtext?: string | null;
}

export default function Accordian({ title, description, dateStarted, dateFinished, gpa=null, subtext=null }: accordianInterface) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="button-35 flex flex-col border border-dark-3 mb-2 p-4 rounded-xl cursor-pointer w-full" onClick={toggleAccordion}>
      <div  className="flex justify-between items-center">
        <div className='font-bold'>{title}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      <div
        className={`transition-all duration-200 ease-in-out overflow-hidden ${
          isOpen ? 'h-[200px]' : 'h-[0px]'
        }`}
      >
        {subtext ? <div className="mt-1 text-[#abaeb3]">{subtext}</div> : <></>}
        {gpa ? <div className='text-[#A005FF]'>GPA: {gpa}</div> : <></>}
        <div className='mt-1 text-[#A005FF]'>{dateStarted} - {dateFinished}</div>
        <div className="mt-1 text-[#abaeb3]">{description}</div>
        <a href="https://www.towson.edu/" className='text-[#A005FF]'>Website</a>
      </div>
    </div>
  );
}
