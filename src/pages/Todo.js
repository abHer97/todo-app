import React from 'react';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { Input } from '../components/Input';
import { Title } from '../components/Title';
import { TodoItem } from '../components/TodoItem';

export const Todo = () => {
   return (
      <div className='container mx-auto'>
         <Title>ToDos</Title>

         <Card width={450}>
            <Input placeholder='¿Que planeas hacer?' />
            <TodoItem text={'Learn hook useContext()'} disabled={true} />
            <TodoItem text={'Learn hook useReducer()'} disabled={false} />

            <Footer totalItems={0} />
         </Card>
      </div>
   );
};
