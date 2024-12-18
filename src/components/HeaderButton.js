import React from 'react';

const HeaderButton = ({ icon, text }) => {
   return (
      <button className="flex items-center gap-2 shadow-md mr-2 py-2 px-2 text-sm">
         {icon}
         <span>{text}</span>
      </button>
   );
};

export default HeaderButton;
