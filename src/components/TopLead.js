import React from 'react';
import HorizontalProgressBarWithLabels from './HorizontalProgressBar';
import CopilotInsights from './EngagementCard';
import copilotIcon from '../../public/images/copilot.png';
import Image from 'next/image';
import OtherKeyActivities from './OtherKeyActivities';
import Star from '../../public/images/Stars.svg';
import group from '../../public/images/Group.svg';
import colorProfile from '../../public/images/prof.svg';
import { RiMailUnreadLine } from 'react-icons/ri';
import { LuCalendarDays } from 'react-icons/lu';
export const TopLead = ({ setModalOpen }) => {
   return (
      <div className="shadow-lg rounded-md py-4 px-4 border-10 w-full mt-2 min-h-[300px]">
         <div className="flex flex-col md:flex-row  items-center 2xl:items-start mb-4">
            <div className="flex  lg:w-1/2 items-center gap-2">
               <Image
                  src={copilotIcon}
                  className="mr-2"
                  width={20}
                  alt="copilotIcon"
               />
               <h1 className="w-full    lg:no-wrap 2xl:text-xl text-xs font-bold">
                  Hi Mona,68% of gal achieved and rest can be achieved by
                  focusing on 20 top leads.
               </h1>
            </div>
            <div className="w-full lg:w-1/2">
               <HorizontalProgressBarWithLabels />
            </div>
         </div>
         <div className="w-full flex flex-col lg:flex-row text-sm mr-1 mt-4">
            <div className="w-full lg:w-[70%] ">
               <h2 className="text-xs text-[#939295]  my-4">
                  Copilot hasa pinpointed 20 key leads that show strong purchase
                  intent and are actively engaging.These leads needs your focus
               </h2>
               <div className=" w-full flex flex-col lg:flex-row gap-2">
                  <div className="w-full lg:w-1/2">
                     <CopilotInsights
                        setModalOpen={setModalOpen}
                        icon={<RiMailUnreadLine />}
                        name={'Jane Reyes'}
                        company={'COO Northwind Traders'}
                        title={'Engage with Jane Reyes'}
                        content={
                           'Jane maybe interested in upgrading expresso for her in-store coffee shop'
                        }
                        subTitle={'Expand Business'}
                        subtopic={'High buying Intent'}
                     />
                  </div>
                  <div className="w-full lg:w-1/2">
                     <CopilotInsights
                        icon={<LuCalendarDays />}
                        setModalOpen={setModalOpen}
                        name={'Alian Munger'}
                        company={
                           'Head of Real Estate Development Contoso Coffee'
                        }
                        title={'Prepare for meeting with Alian'}
                        content={
                           'Prepare for high-buying intent meeting Copilot scheduled for 2PM regarding upgrading service contract'
                        }
                        subTitle={'Upcoming meeting'}
                        subtopic={'Due today'}
                     />
                  </div>
               </div>
               <div className="w-16 mx-auto mt-4 rounded h-1 flex overflow-hidden">
                  <section className="w-[48%] bg-blue-700"></section>
                  <section className="w-[5%] "> </section>
                  <section className="w-[5%] bg-gray-300 rounded-full">
                     {' '}
                  </section>
                  <section className="w-[5%] "> </section>
                  <section className="w-[5%] bg-gray-300 rounded-full"></section>
                  <section className="w-[5%] "> </section>
                  <section className="w-[5%] bg-gray-300 rounded-full"></section>
                  <section className="w-[5%] "> </section>
                  <section className="w-[5%] bg-gray-300 rounded-full"></section>
               </div>
            </div>
            <div className="lg:w-[30%] lg:border-l ml-2 lg:pl-2 lg:border-[#93929546] ">
               <div className="">
                  <h2 className="mt-2 text-[#939295]">Other Key Activities</h2>
               </div>
               <div className="mb-2 w-full  mt-2 lg:pl-2">
                  <OtherKeyActivities
                     profile={colorProfile}
                     icon={<RiMailUnreadLine />}
                     title={'Cafe A100 for Woodland Bank'}
                     subtitle={'Woodland Bank . $280,000 . 8 days to go'}
                     content={'Review draft and reply to Chris Naido'}
                  />
               </div>
               <div className="mt-4 w-full lg:pl-2">
                  <OtherKeyActivities
                     profile={group}
                     icon={<LuCalendarDays />}
                     title={'Partnership opportunity for Fabrikam'}
                     subtitle={'Fabrikam . %5,000,000 12 days to go'}
                     content={
                        'Prepare me for Fabrikam&aposs key stakeholder meeting'
                     }
                  />
               </div>
               <div>
                  <h3 className="text-[#7387ba] text-[10px] mt-2">
                     Show all key activities
                  </h3>
               </div>
            </div>
         </div>
      </div>
   );
};
