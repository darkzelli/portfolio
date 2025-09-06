"use client";
import { useState } from 'react';

export interface accordianInterface {
  title: string;
  img: string;
  website: string;
  description: string;
  dateStarted: string;
  dateFinished: string;
  gpa?: number | null;
  subtext?: string | null;
}

export default function Accordian({ title, img="", website="", description, dateStarted, dateFinished, gpa=null, subtext=null }: accordianInterface) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="button-35 flex flex-col border border-dark-3 mb-2 p-4 rounded-xl cursor-pointer w-full transition-all duration-200 ease-in" onClick={toggleAccordion}>
      <div  className="flex justify-between items-center">
        <div className='flex flex-row justify-between items-center gap-2'>
          {img != "" ? <div className='w-[50px] h-full rounded-3xl overflow-hidden'>
           <img src={img}/>
          </div> : ""}
          <div className='font-bold'>{title}</div>
        </div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      <div
        className={`transition-all duration-200 ease-in-out overflow-scroll doscroll ${
          isOpen ? 'h-[200px]' : 'h-[0px]'
        }`}
      >
        {subtext ? <div className="mt-1 text-[#abaeb3]">{subtext}</div> : <></>}
        {gpa ? <div className='text-[#A005FF]'>GPA: {gpa}</div> : <></>}
        <div className='mt-1 text-[#A005FF]'>{dateStarted} - {dateFinished}</div>
        <div className="mt-1 text-[#abaeb3]">{description}</div>
        {website != "" ? <a href={website} className='text-[#A005FF]'>Website</a> : ""}
      </div>
    </div>
  );
}
