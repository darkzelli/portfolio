import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
export default function CustomChatBox() {
  const [mailto, setMailto] = useState("")

  function handleChange(e : React.ChangeEvent<HTMLInputElement>){
    var message = e.target.value
    var encodedMessage = message.replaceAll(" ", "%20")
    setMailto("mailto:zacharyhallellis@gmail.com?subject=Portolfio%20Message&body=" + encodedMessage)
  }

  return (
    <div className="overflow-hidden bg-white flex-col w-[400px] h-[400px] border border-dark-3 p-4  rounded-xl hidden lg:flex  button-35">
      <div className="flex flex-row">
        <div className="w-[50px] h-[50px] bg-[#000] text-white rounded-full flex items-center justify-center mr-3">
          Z
        </div>
        <div>
          <div className="text-base">Zachary Hall</div>
          <div className="text-sm text-[#abaeb3]">zacharyhallellis@gmail.com</div>
        </div>
      </div>
      <div className="flex flex-col">
        <Slide cascade damping={0.2}>
        <div className="w-full flex flex-wrap items-center mt-3 h-[50px]">
        <div className="flex flex-wrap rounded-xl bg-[#A005FF] text-white  p-2.5">Hey, Thank you for checking out my portfolio</div>
        </div>
        <div className="w-full flex flex-wrap items-center mt-3 h-[50px]">
         <div className="flex flex-wrap rounded-xl bg-[#A005FF] text-white  p-2.5">Want to get in contact?</div>
        </div>
        <div className="w-full flex flex-wrap items-center mt-3 h-[50px]">
        <div className="flex flex-wrap rounded-xl bg-[#A005FF] text-white  p-2.5">Send me a message</div>
        </div>
        </Slide>
        <div className="w-full flex flex-wrap items-center justify-end mt-3 h-[50px]">
          <div className="flex flex-fow rounded-xl bg-[#e6e9ed] text-white  p-2.5">
            <span className="ball w-[10px] h-[10px] bg-[#8d8f91] mr-1 rounded-full animation-delay-0"></span>
            <span className="ball w-[10px] h-[10px] bg-[#b0b2b5] mr-1 rounded-full animation-delay-1"></span>
            <span className="ball w-[10px] h-[10px] bg-[#d0d3d6] rounded-full animation-delay-2"></span>
          </div>
        </div>
        <div className="w-full flex flex-row items-center  mt-3 h-[50px]">
        <div className="w-[300px] h-[50px] border border-gray-500 rounded-xl flex items-center px-4 mr-4">
            <input
              className="w-full h-full bg-transparent outline-none text-gray-800 placeholder-gray-500 "
              placeholder="Enter a message"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <a href={mailto} className="w-[50px] h-[50px] border border-dark-5 rounded-xl flex items-center justify-center bg-[#e6e9ed] hover:bg-[#A005FF] cursor-pointer transition-all ease-in" ><IoIosSend/></a>
        </div>
      </div>
    </div>
  );
}
