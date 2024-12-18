import React from 'react';

const HeaderButton = ({ icon, text }) => {
   return (
      <button className="flex text-[#939393] items-center gap-2 shadow-sm mr-2 py-2 px-2 text-sm">
         {icon}
         <span className="text-[#939393] text-xs no-wrap">{text}</span>
      </button>
   );
};

export default HeaderButton;
