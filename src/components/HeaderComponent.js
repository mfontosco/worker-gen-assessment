import React from 'react';

const HeaderComponent = ({ icon, text }) => {
   return (
      <div className="flex items-center gap-2 py-2 text-sm">
         {icon}
         <h3 className="text-[#939393] text-xs no-wrap">{text}</h3>
      </div>
   );
};

export default HeaderComponent;