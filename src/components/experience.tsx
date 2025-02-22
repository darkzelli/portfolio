import { accordians } from "@/app/data";
import Accordian from "./accordian";
export default function Experience(){
  return(
    <div className="w-[320px] lg:w-[400px]">
      {accordians.map((accordian, index) => (
             <Accordian key={index} title={accordian.title} description={accordian.description} dateStarted={accordian.dateStarted} dateFinished={accordian.dateFinished}/>
       ))}
    </div>

  );
}
