import Image from 'next/image';
import woman1 from '../../public/images/woman1.jpg';
import woman2 from '../../public/images/woman2.jpg';
import { RiMailUnreadLine } from 'react-icons/ri';
import { PiStarFourFill } from 'react-icons/pi';
import Star from '../../public/images/Stars.svg';
import group from '../../public/images/Group.svg';
export default function OtherKeyActivities({ profile }) {
   return (
      <div className=" border shadow-md rounded-lg px-2">
         <div className="flex items-center  gap-1 ">
            <div>
               <Image
                  src={profile}
                  alt="selfie-pics"
                  className="rounded-full  h-4 w-4"
               />
            </div>
            <div className="flex flex-col leading-none gap-1">
               <h2 className="text-[8px] font-bold ">
                  Cafe A100 for Woodland Bank
               </h2>
               <p className="text-[8px]  ">
                  Woodland Bank . $280,000 . 8 days to close
               </p>
            </div>
         </div>
         <div className="relative">
            <div className="absolute -top-2 right-0">
               <div className="w-4 flex justify-center items-center h-4 rounded-full bg-white ">
                  <Image src={Star} alt="start-icon" />
               </div>
            </div>
            <div className="bg-[#f1f5ff] rounded-tr-5xl p-2 rounded-lg rounded-tr-[30px] shadow">
               <div className="flex gap-2 items-center leading-none">
                  <RiMailUnreadLine />
                  <h2 className="font-semibold text-[8px] text-gray-700">
                     Review draft and reply to Chris Naido
                  </h2>
               </div>
            </div>
            {/* <div className="flex items-center text-[10px] gap-2">
               <p>Expand Business </p>
               <span className="text-xs">.</span>
               <p>High Buying intent</p>
            </div> */}
         </div>
      </div>
   );
}
