import { useHttp } from 'Hook/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'servise/themoviedb-api';
import css from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews] = useHttp(getMoviesReviews, [], movieId);

  return (
    <>
      {reviews.length === 0 ? (
        <h3>We don't have any information about the cast of this movie.</h3>
      ) : (
        <ul className={css.list}>
          {reviews.map(({ id, author, content }) => (
            <li className={css.item} key={id}>
              <h3>{`Author: ${author}`}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Reviews;
