import React from 'react';

const Name = ({children}) => {
  return (
    <div className="tracking-wider w-[120px] text-black">
      {children}
    </div>
  );
};

export default Name;
