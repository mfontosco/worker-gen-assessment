'use client';
import React, { useState } from 'react';
import AgentSkillModal from '@/components/AgentSkillModal';

const page = () => {
   const [isModalOpen, setIsModalOpen] = useState(true);

   return (
      <div className="p-8">
         {/* <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => setIsModalOpen(true)}
         >
            Open Modal
         </button> */}
         <AgentSkillModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
         />
      </div>
   );
};

export default page;
