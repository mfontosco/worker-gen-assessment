import React from 'react';
import copilot from '../../public/images/copilotIcon.svg';
import Image from 'next/image';
const AgentSkillModal = ({ isOpen, onClose }) => {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
            {/* Header */}
            <div className="flex justify-between items-center  p-4">
               <div className="flex gap-2 justify-between">
                  <Image src={copilot} alt="" width={20} />
                  <h2 className="text-xs font-semibold text-[#2a2a2a]">
                     Agent Skill
                  </h2>
               </div>
               <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={onClose}
               >
                  ✕
               </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 ">
               {/* Main description */}
               <p className="text-black text-xs">
                  Check if on-hand inventory will allow all sales orders to ship
                  without delay
               </p>
               <div className="space-y-4 p-4 text-[10px] shadow-lg">
                  <p>
                     When{' '}
                     <span className="text-blue-500 bg-[#e3f7fc] rounded-md p-1 text-[10px] leading-6 no-underline cursor-pointer">
                        any vendor
                     </span>{' '}
                     sends an email with changes to{' '}
                     <span className="text-blue-500 bg-[#e3f7fc] rounded-md p-1 text-[10px] leading-6 no-underline cursor-pointer">
                        confirmed purchase orders
                     </span>
                     , check if the resulting{' '}
                     <span className="text-blue-500 bg-[#e3f7fc] rounded-md p-1 text-[10px] leading-6 no-underline cursor-pointer">
                        on-hand inventory
                     </span>{' '}
                     will allow{' '}
                     <span className="text-blue-500 bg-[#e3f7fc] rounded-md p-1 text-[10px] leading-6 no-underline cursor-pointer">
                        all sales orders
                     </span>{' '}
                     to{' '}
                     <span className="text-blue-500 bg-[#e3f7fc] rounded-md p-1 text-[10px] leading-6 no-underline cursor-pointer">
                        ship without delay
                     </span>
                     . If so,{' '}
                     <span className="text-blue-500 bg-[#e3f7fc] rounded-md p-1 text-[10px] leading-6 no-underline cursor-pointer">
                        update the purchase order
                     </span>{' '}
                     to reflect the change.
                  </p>
               </div>
               {/* Details */}
               <div className="">
                  {/* Enable email access section */}
                  <div className="text-xs  ">
                     <h3 className="font-medium">Enable email access</h3>
                     <p className="text-xs text-gray-600 mt-2">
                        Allow the agent to access email inboxes to read mail
                        from known vendors
                     </p>
                     <div className="flex items-center    mt-4 space-x-2">
                        <div className=" mr-auto border w-[80%] px-4 py-1  rounded-md text-xs">
                           purchasing@contoso.com
                           <button className="text-gray-400 p-1 ml-2 hover:text-gray-600">
                              ✕
                           </button>
                        </div>
                        <button className="px-2 py-2 bg-[#3167d0]  text-white rounded-md hover:bg-blue-600">
                           Allow access
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Footer */}
            <div className="flex text-xs justify-end border-t p-4 space-x-4">
               <button className="px-2 py-1 bg-gray-600  text-white rounded-md hover:bg-blue-600">
                  Activate
               </button>
               <button
                  className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={onClose}
               >
                  Close
               </button>
            </div>
         </div>
      </div>
   );
};

export default AgentSkillModal;
