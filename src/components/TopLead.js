import React from 'react';
import HorizontalProgressBarWithLabels from './HorizontalProgressBar';
import CopilotInsights from './EngagementCard';
import copilotIcon from '../../public/images/copilot.png';
import Image from 'next/image';
import OtherKeyActivities from './OtherKeyActivities';
import Star from '../../public/images/Stars.svg';
import group from '../../public/images/Group.svg';
import colorProfile from '../../public/images/prof.svg';
export const TopLead = () => {
   return (
      <div className="shadow-lg rounded-md py-4 px-4 border-10 w-full border-black mt-2 h-[300px]">
         <div className="flex  items-center 2xl:items-start mb-4">
            <Image
               src={copilotIcon}
               className="mr-2"
               width={20}
               alt="copilotIcon"
            />
            <h1 className="w-1/2 no-wrap 2xl:text-xl text-xs font-bold">
               Hi Mona,68% of gal achieved and rest can be achieved by focusing
               on 20 top leads.
            </h1>
            <div className="w-1/2">
               <HorizontalProgressBarWithLabels />
            </div>
         </div>
         <div className="w-full flex text-sm mr-1 mt-4">
            <div className="w-[70%] ">
               <h2 className="text-xs text-[#939295]  my-4">
                  Copilot hasa pinpointed 20 key leads that show strong purchase
                  intent and are actively engaging.These leads needs your focus
               </h2>
               <div className=" w-full flex gap-2">
                  <div className="w-1/2">
                     <CopilotInsights />
                  </div>
                  <div className="w-1/2">
                     <CopilotInsights />
                  </div>
               </div>
            </div>
            <div className="w-[30%] border-l ml-2 pl-2 border-[#93929546] ">
               <div className="">
                  <h2 className="mt-2 text-[#939295]">Other Key Activities</h2>
               </div>
               <div className="mb-2 mt-2 pl-2">
                  <OtherKeyActivities profile={colorProfile} />
               </div>
               <div className="mt-4 pl-2">
                  <OtherKeyActivities profile={group} />
               </div>
            </div>
         </div>
      </div>
   );
};
