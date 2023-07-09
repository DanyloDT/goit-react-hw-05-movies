import { useState } from 'react';
import css from './Search.module.css';

const Search = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const handleInputValue = e => {
    setValue(e.target.value);
  };
  const handleSubmitBtn = e => {
    e.preventDefault();
    if (value.trim() === '') {
      return alert('Please fill out the search field!');
    }
    onSubmit(value.trim());
    setValue('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmitBtn}>
      <input
        className={css.input}
        type="text"
        placeholder="Movies name"
        name="search"
        value={value}
        onChange={handleInputValue}
      ></input>
      <button className={css.btn}>Search</button>
    </form>
  );
};

export default Search;
