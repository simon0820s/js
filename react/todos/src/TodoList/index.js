import React from 'react';
import './TodoList.css'

function TodoList(props) {
<<<<<<< HEAD
  const renderFunc = props.children || props.render;
  
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {props.searchedTodos.map(renderFunc)}
=======
  return (
    <section>
      <ul>
        {props.children}
      </ul>
>>>>>>> 9cedac019881a83087342ae7aec8697dc957bf8d
    </section>
  );
}

export { TodoList };
