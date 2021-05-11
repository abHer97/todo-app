import React from 'react';
import { Button } from './Button';

export const Footer = ({
   totalItems,
   active,
   handleClickFilter,
   handleClickClear,
   handleClickReset
}) => {
   return (
      <div className='container flex flex-wrap justify-between items-center mt-3'>
         <div className='text-gray-400 text-sm select-none'>
            {totalItems} elementos pendientes
         </div>
         <div>
            <Button isActive={active === 'all'} onClick={() => handleClickFilter('all')}>
               Todos
            </Button>
            <Button
               isActive={active === 'active'}
               onClick={() => handleClickFilter('active')}
            >
               Activos
            </Button>
            <Button
               isActive={active === 'complete'}
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
