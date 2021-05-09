import React from 'react';

export const TodoItem = ({ text, disabled, handleClickItem }) => {
   return (
      <div
         onClick={handleClickItem}
         className={`py-1 text-xl border-b border-gray-200 cursor-pointer transition-all ease-in-out ${
            disabled ? 'line-through text-gray-200' : 'no-underline text-black'
         }`}
      >
         {text}
      </div>
   );
};
