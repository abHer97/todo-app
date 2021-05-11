import React from 'react';

export const Button = ({ isActive, onClick, children }) => {
   return (
      <button
         onClick={onClick}
         className={`text-gray-400 text-sm mr-2 px-1 ${
            isActive && 'border border-gray-300'
         }`}
         style={{ outline: 'none' }}
      >
         {children}
      </button>
   );
};
