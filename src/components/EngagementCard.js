import Image from 'next/image';
import woman1 from '../../public/images/woman1.jpg';
import woman2 from '../../public/images/woman2.jpg';

import { PiStarFourFill } from 'react-icons/pi';
import Star from '../../public/images/Stars.svg';
export default function CopilotInsights({
   setModalOpen,
   icon,
   name,
   title,
   content,
   company,
   subTitle,
   subtopic,
}) {
   return (
      <div
         onClick={setModalOpen}
         className=" border cursor-pointer shadow-md rounded-lg px-2"
      >
         <div className="flex items-center gap-2">
            <Image
               src={woman1}
               alt="selfie-pics"
               className="rounded-full h-6 w-6"
            />
            <div>
               <h2 className="text-xs">{name}</h2>
               <h2 className="text-[10px]">{company}</h2>
            </div>
         </div>
         <div className="relative">
            <div className="absolute -top-2 right-0">
               <div className="w-8 flex justify-center items-center h-8 rounded-full bg-white ">
                  <Image src={Star} alt="start-icon" />
               </div>
            </div>
            <div className="bg-[#f1f5ff] min-h-[70px] border-black rounded-tr-5xl p-2 rounded-lg rounded-tr-[30px] shadow">
               <div className="flex gap-2">
                  {icon}
                  <h2 className="font-semibold text-xs text-gray-700">
                     {title}
                  </h2>
               </div>
               <p className="text-[10px]   text-gray-600">{content}</p>
            </div>
            <div className="flex items-center text-[10px] gap-2">
               <p>{subTitle} </p>
               <span className="text-xs">.</span>
               <p>{subtopic}</p>
            </div>
         </div>
      </div>
   );
}
