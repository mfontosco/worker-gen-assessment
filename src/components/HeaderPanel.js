import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { TfiMenuAlt } from 'react-icons/tfi';
import HeaderComponent from './HeaderComponent';
import { IoMdAdd } from 'react-icons/io';
import { VscRefresh } from 'react-icons/vsc';
import { FaChartLine } from 'react-icons/fa6';
import { FaRegTrashCan } from 'react-icons/fa6';
import { BsFillCameraReelsFill } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiPieChartAlt } from 'react-icons/bi';
import HeaderButton from './HeaderButton';
import { IoFilter } from 'react-icons/io5';
import { MdEditRoad } from 'react-icons/md';
import { FaShareSquare } from 'react-icons/fa';
import { BsMicrosoftTeams } from 'react-icons/bs';

const HeaderPanel = () => {
   return (
      <headers className="shadow-lg hidden lg:block py-2 border-2 rounded-md">
         <nav className="  px-2 md:flex items-center rounded-md">
            <div className="flex items-center cursor-pointer gap-2 mr-auto">
               <h2 className="font-medium  text-xs no-wrap text-[#939393]">
                  My open leads
               </h2>
               <MdOutlineKeyboardArrowDown
                  size={16}
                  className="text-[#939393]"
               />
            </div>
            <div className="flex gap-4 items-center">
               <HeaderComponent
                  icon={
                     <FaChartLine
                        size={12}
                        className="text-[#a6bae1]  font-medium"
                     />
                  }
                  text={'Show chart'}
               />
               <HeaderComponent
                  icon={
                     <TfiMenuAlt
                        size={12}
                        className="text-[#a6bae1] font-medium"
                     />
                  }
                  text={'Focused View'}
               />
               <HeaderComponent
                  icon={
                     <IoMdAdd
                        size={12}
                        className="text-[#a6bae1]  font-medium"
                     />
                  }
                  text={'New'}
               />
               <HeaderComponent
                  icon={<VscRefresh size={12} className="font-medium" />}
                  text={'Refresh'}
               />
               <HeaderComponent
                  icon={<BsMicrosoftTeams size={12} className="font-medium" />}
                  text={'Collaborate'}
               />
               <HeaderComponent
                  icon={<FaRegTrashCan size={12} className=" font-medium" />}
                  text={'Delete'}
               />
            </div>
            <div className="border-gray-400   border-l flex items-center ml-2 gap-4">
               <MdOutlineKeyboardArrowDown size={12} />
               <BsThreeDotsVertical size={12} />
            </div>
            <div className="flex gap-1">
               <HeaderButton icon={<BiPieChartAlt />} text={'Smart data'} />
               <HeaderButton icon={<IoFilter />} text={'Edit filters'} />
               <HeaderButton icon={<MdEditRoad />} text={'Edit columns'} />
            </div>
            <div className="bg-blue-600 flex items-center rounded-sm   py-2 px-2">
               <FaShareSquare
                  size={12}
                  className="text-white  mr-2 cursor-pointer "
               />
               <MdOutlineKeyboardArrowDown
                  size={16}
                  className="text-white pl-1 cursor-pointer border-5 border-l  "
               />
            </div>
         </nav>
      </headers>
   );
};

export default HeaderPanel;
