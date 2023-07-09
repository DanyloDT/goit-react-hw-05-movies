import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import { TbMoodSad } from 'react-icons/tb';
import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.container}>
      <TbMoodSad size={100} />
      <h1>Not Found ...</h1>
      <Link to="/" className={css.link}>
        <MdKeyboardBackspace />
        Go to home
      </Link>
    </div>
  );
};

export default NotFound;
