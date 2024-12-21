import React from 'react';

const HeaderComponent = ({ icon, text }) => {
   return (
      <div className="flex items-center cursor-pointer gap-2 py-2 ">
         {icon}
         <h3 className="text-[#939393] text-xs text-no-wrap">{text}</h3>
      </div>
   );
};

export default HeaderComponent;
