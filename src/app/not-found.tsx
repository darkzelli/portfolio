import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa';

export default async function NotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center w-full flex-col'>
       <div className='flex flex-row items-center justify-center w-[1000px] h-[700px] overflow-scroll noscroll gap-5'>
        Nothing to see here...
      </div>
          <a href='/' className='flex left-5 top-5 w-full items-center justify-center text-2xl text-[#A005FF]'>
            <FaArrowLeft/>
          </a>
      </div>
  );

}
