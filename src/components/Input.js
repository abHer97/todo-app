import React from 'react';

// import './input.css';

export const Input = ({ placeholder = '', onChange, value, ...inputProps }) => {
   return (
      <input
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         {...inputProps}
         className='w-full border-b border-gray-200 focus:border-cyan-500 transition-colors ease-in-out duration-200 outline-none p-2'
      />
   );
};
