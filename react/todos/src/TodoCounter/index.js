import React from 'react';
<<<<<<< HEAD
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
=======
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
>>>>>>> 9cedac019881a83087342ae7aec8697dc957bf8d
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
