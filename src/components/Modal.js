import React from 'react';
import Image from 'next/image';
import woman1 from '../../public/images/woman1.jpg';
import { BsLinkedin } from 'react-icons/bs';
import { MdOutlineModeEdit } from 'react-icons/md';
import { IoSendOutline } from 'react-icons/io5';
import star from '../../public/images/Stars.svg';
import Tabs from './Tabs';
import progress from '../../public/images/progress.png';
import round from '../../public/images/round.png';
import medal from '../../public/images/medal.png';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';
import Step from './StepIndicator';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { GiPieChart } from 'react-icons/gi';
import { IoMedalSharp } from 'react-icons/io5';

const Modal = ({ isOpen, onClose }) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 z-50 mt-10 flex items-center justify-center  ">
         <div className="bg-white rounded-lg shadow-xl w-full border-3  shadow-[#bb9bde]  max-w-3xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b px-6 py-4">
               <div className="flex items-center gap-1">
                  <div className="border bg-[#d4c2d3] p-1 shadow-md flex items-center justify-center">
                     <div className="bg-blue-700 rounded-full border  h-2 w-2"></div>
                  </div>
                  <h2 className="text-xs font-semibold ">
                     Engage with Jane Reyes
                  </h2>
               </div>
               <button
                  className="text-gray-400 hover:text-gray-600"
                  onClick={onClose}
               >
                  ✕
               </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-4 space-y-4">
               <div className="flex items-center gap-2 shadow-md p-2">
                  <Image
                     src={woman1}
                     alt="selfie-pics"
                     className="rounded-full h-8 w-8"
                  />
                  <div>
                     <h2 className="text-xs">Jane Rayes</h2>
                     <div className="flex items-center gap-2">
                        <BsLinkedin size={12} className=" text-[#317a9f]" />
                        <div className="border-2  h-3 border-[#b8b8b88]"></div>
                        <h2 className="text-[10px]">COO Northwind Traders</h2>
                     </div>
                  </div>
               </div>
               <div className="text-xs flex items-center bg-[#ebecfe] rounded-md shadow-md p-2 text-[#3a55d1] ">
                  <p className="mr-auto flex items-center gap-1 text-[10px]">
                     <Image src={star} alt="stars" />
                     Jane may be interested in upgrading espresso machines for
                     her in-store coffee shops.
                  </p>
                  <div className="flex items-center gap-2">
                     <button className="bg-white gap-1 px-2 py-1 flex items-center rounded-md">
                        <MdOutlineModeEdit />
                        Edit
                     </button>
                     <button className="bg-[#3a55d1] flex items-center gap-1 text-white text-[10px] px-2 py-1 rounded-md">
                        <IoSendOutline />
                        Approve and send
                     </button>
                  </div>
               </div>
               <div className="flex space-x-4 shadow-md">
                  <Tabs />
               </div>
               {/* Why I Picked This Lead Section */}
               <div className="relative shadow-md py-2 bg-white px-2 ">
                  <div className="bg-white p-2 absolute -right-2 -top-2  rounded-full">
                     <Image src={star} alt="stars" className="mx-auto" />
                  </div>
                  <div className="bg-white p-2 absolute -right-10 top-1/2 rounded-full">
                     <MdOutlineKeyboardArrowRight className=" text-[#6279b3]" />
                  </div>
                  <div className=" p-4 bg-[#f1f5ff] rounded-md rounded-tr-3xl  ">
                     <div className=" ">
                        <h3 className="font-semibold text-xs mb-2">
                           Why I picked this lead
                        </h3>
                        <ul className="list-disc pl-5 text-[10px] text-gray-700 space-y-1">
                           <li>
                              Jane is a key decision maker and was browsing
                              espresso machines on First Coffees website.
                           </li>
                           <li>
                              Multiple people at her company have reported
                              slowness during service requests.
                           </li>
                           <li>
                              Northwind Traders currently see $200M in revenue
                              from their in-store coffee shops.
                           </li>
                        </ul>
                     </div>

                     {/* Key Metrics */}
                     <div className="flex gap-2 text-[10px] mt-2 w-[70%]">
                        <div className="p-2 border flex rounded-xl bg-white items-center flex-1 gap-2 ">
                           <div className="p-2 flex items-center justify-center rounded-md shadow-sm">
                              <Image
                                 src={progress}
                                 width={30}
                                 alt="progress-bar"
                              />
                           </div>
                           <div>
                              <p className="font-semibold">Decision Maker</p>
                              <p className="text-green-500">Yes</p>
                           </div>
                        </div>
                        <div className="p-2 border flex rounded-xl bg-white items-center flex-1 gap-2 ">
                           <div className='className="p-2 flex items-center justify-center rounded-md shadow-sm"'>
                              <Image
                                 src={medal}
                                 width={30}
                                 alt="progress-bar"
                              />
                           </div>

                           <div className="flex flex-col justify-start border-1 border-black">
                              <p className="font-semibold">
                                 Potential Deal Value
                              </p>
                              <p className="text-blue-500">$1M</p>
                           </div>
                        </div>
                        <div className="p-2 border flex rounded-xl bg-white items-center flex-1 gap-2 ">
                           <div className="flex items-center p-2 bg-[#daecf0] rounded-md justify-center">
                              <Image
                                 src={round}
                                 width={30}
                                 alt="progress-bar"
                              />
                           </div>
                           <div>
                              <p className="font-semibold">Intent</p>
                              <p className="text-orange-500">High</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className=" mt-2 flex justify-between  ">
                     <div className="flex items-center gap-1 ">
                        <div className="bg-[#e9e9e9] p-1 rounded-md">
                           <IoMedalSharp
                              size={12}
                              className="text-yellow-500"
                           />
                        </div>
                        <div className="bg-[#e9e9e9] p-1 flex items-center  rounded-md">
                           <p className="border-r border text-[10px]">1</p>
                           <GiPieChart size={10} className="text-blue-500" />
                           <p className="text-[10px] ml-1 ">D365 Sales</p>
                        </div>
                        <div className="bg-[#e9e9e9] p-1 text-[10px] rounded-md">
                           +2
                        </div>
                     </div>
                     <div className="flex items-center gap-2">
                        <div>
                           <p className="text-[10px]">
                              Ai generated content maybe incorrect
                           </p>
                        </div>
                        <div className="flex items-center gap-2 ">
                           <AiOutlineLike size={10} />
                           <AiOutlineDislike size={10} />
                        </div>
                     </div>
                  </div>
               </div>

               {/* About Jane */}
               <div className="bg-[#e8e8e8] p-4 rounded-md border">
                  <div className="flex justify-between items-center">
                     <h3 className="font-semibold text-xs mb-2">About Jane</h3>
                     <IoIosArrowDown size={10} />
                  </div>
                  <p className="text-[10px] text-gray-700">
                     Jane Reyes, the Chief Operating Officer of Northwind
                     Traders, is a dynamic leader with a proven track record in
                     optimizing operations and enhancing customer experiences.
                     Under her guidance, Northwind Traders’ in-store coffee
                     shops have flourished, becoming a hallmark of quality and
                     innovation. Jane’s commitment to excellence makes her an
                     ideal partner for First Coffee. She is always seeking
                     top-tier equipment to elevate her coffee shops’ offerings,
                     ensuring consistent, high-quality service.
                  </p>
               </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between text-xs items-center  border-t px-6 py-4">
               <div className="flex items-center gap-2">
                  <p className="text-[#7e8ba2]">showing 1 of 9</p>
                  <div className="border h-2"></div>
                  <p className="text-[#7e8ba2]">show all</p>
               </div>
               <div className="w-16  rounded h-1 flex overflow-hidden">
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
               <div className="flex items-center gap-2 ">
                  <AiOutlineLike />
                  <AiOutlineDislike />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;
