import React from 'react';
import { Button } from './Button';

export const Footer = ({
   totalItems,
   isActive,
   handleClickFilter,
   handleClickClear,
   handleClickReset
}) => {
   return (
      <div className='container flex flex-wrap justify-between items-center mt-3'>
         <div className='text-gray-400 text-sm select-none'>{totalItems} elementos</div>
         <div>
            <Button
               isActive={isActive === 'all'}
               onClick={() => handleClickFilter('all')}
            >
               Todos
            </Button>
            <Button
               isActive={isActive === 'active'}
               onClick={() => handleClickFilter('active')}
            >
               Activos
            </Button>
            <Button
               isActive={isActive === 'complete'}
               onClick={() => handleClickFilter('complete')}
            >
               Completados
            </Button>
         </div>
         <div>
            <Button onClick={handleClickClear}>Limpiar</Button>
            <Button onClick={handleClickReset}>Resetear</Button>
         </div>
      </div>
   );
};
