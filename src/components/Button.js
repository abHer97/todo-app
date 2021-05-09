import React from 'react';

export const Button = ({ isActive, onClick, children }) => {
   return (
      <button
         onClick={onClick}
         className={`text-gray-400 text-sm mr-2 ${isActive && 'border border-gray-300'}`}
      >
         {children}
      </button>
   );
};
