import React from 'react';
<<<<<<< HEAD
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
=======
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
>>>>>>> 9cedac019881a83087342ae7aec8697dc957bf8d
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
