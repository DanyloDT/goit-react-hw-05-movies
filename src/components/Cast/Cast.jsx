import { useHttp } from 'Hook/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'servise/themoviedb-api';
import img from '../../images/defaultImg.png';
import css from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast] = useHttp(getMoviesCredits, [], movieId);

  return (
    <>
      {cast.length === 0 ? (
        <h3>We don't have any reviews for this movie.</h3>
      ) : (
        <ul className={css.castList}>
          {cast.map(({ id, profile_path, character, name }) => (
            <li key={id} className={css.castItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : img
                }
                alt={name}
              />
              <div className={css.blockName}>
                <h3>{name}</h3>
                <p>{character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cast;
