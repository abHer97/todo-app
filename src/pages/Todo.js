import React, { useReducer } from 'react';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { Input } from '../components/Input';
import { Title } from '../components/Title';
import { TodoItem } from '../components/TodoItem';
import {
   addItem,
   clearCompleted,
   handleChangeInput,
   resetInput,
   resetState,
   setActiveFilter,
   toggleItem
} from '../reducer/actions';
import { init, initialState, todoReducer } from '../reducer/TodoReducer';

export const Todo = () => {
   const [state, dispatch] = useReducer(todoReducer, initialState, init);

   const { text, activeFilter, items } = state;

   const filteredData = () => {
      return items.filter((item) =>
         state.activeFilter === 'all'
            ? true
            : state.activeFilter === 'active'
            ? item.active
            : !item.active
      );
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addItem());
      dispatch(resetInput());
   };

   return (
      <div className='container mx-auto'>
         <Title>Pendientes</Title>

         <Card width={450}>
            <form onSubmit={handleSubmit}>
               <Input
                  placeholder='¿Que planeas hacer?'
                  value={text}
                  onChange={(e) => dispatch(handleChangeInput(e.target.value))}
               />
            </form>

            {filteredData().map((item) => (
               <TodoItem
                  text={item.text}
                  disabled={!item.active}
                  handleClickItem={() => {
                     dispatch(toggleItem(item.id));
                  }}
               />
            ))}

            <Footer
               totalItems={items.filter((item) => item.active).length}
               handleClickFilter={(filter) => dispatch(setActiveFilter(filter))}
               active={activeFilter}
               handleClickClear={() => dispatch(clearCompleted())}
               handleClickReset={() => dispatch(resetState())}
            />
         </Card>

         <pre>{JSON.stringify(state, null, 1)}</pre>
      </div>
   );
};
