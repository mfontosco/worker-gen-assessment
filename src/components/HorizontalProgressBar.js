import React from 'react';
import { FiClock } from 'react-icons/fi';
const HorizontalProgressBarWithLabels = () => {
   const sections = [
      {
         label: 'Won $18m',
         width: '20%',
         color: 'bg-green-500',
         dotColor: 'bg-[#a6c7a5]',
      },
      {
         label: 'Committed $8m',
         width: '15%',
         color: 'bg-blue-500',
         dotColor: 'bg-[#85b3f2]',
      },
      {
         label: 'Best Case $7m',
         width: '10%',
         color: 'bg-pink-500',
         dotColor: 'bg-[#dcabf7]',
      },
      {
         label: 'Qualified $3m',
         width: '5%',
         color: 'bg-orange-500',
         dotColor: 'bg-[#ffcb86]',
      },
      {
         label: 'Leads $75m',
         width: '50%',
         color: 'bg-gray-500',
         dotColor: 'bg-[#f1f1f6]',
      },
   ];

   return (
      <div className="relative w-full space-y-1 p-1">
         {/* Progress Bar */}
         <div className="flex">
            <div className="flex items-center gap-1 mr-auto">
               <FiClock size={12} />
               <p className="text-[9px] text-[#939295]">
                  {' '}
                  1 month until Q4 ends
               </p>
            </div>
            <div className="flex ">
               <div className="h-6 absolute bottom-8 lg:bottom-5  mr-1 border border-[#939295]"></div>
               <div className="flex gap-4 text-[9px] ml-1">
                  <h2 className="">
                     <span className="text-[#939295]">Target</span> $45 million
                  </h2>
                  <h2 className="text-[#939295]">68% of target achieved</h2>
               </div>
            </div>
         </div>
         <div className="w-full bg-gray-300  rounded h-1 flex overflow-hidden">
            <section className="w-[18%] bg-[#a6c7a5]"></section>
            <section className="w-[8%] bg-[#85b3f2]"> </section>
            <section className="w-[5%] bg-[#dcabf7]"></section>
            <section className="w-[3%] bg-[#ffcb86]"></section>
            <section className="w-[66%] bg-[#f1f1f6]"></section>
         </div>

         {/* Labels */}
         <div className="flex gap-2">
            {sections.map((section, index) => (
               <div key={index} className="flex items-center space-x-1">
                  <span
                     className={`h-2 w-2 rounded-full bordr-current ${section.dotColor}`}
                  ></span>
                  <span className="text-[9px] text-[#939295]">
                     {section.label}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default HorizontalProgressBarWithLabels;
