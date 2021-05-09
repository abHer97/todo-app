import React from 'react';

export const Card = ({ children, width }) => {
   return (
      <div
         className='bg-white mx-auto shadow-md p-3 rounded'
         style={{ width: `${width}px` }}
      >
         {children}
      </div>
   );
};
