import { useHttp } from 'Hook/useHttp';
import MovieDesc from 'components/MovieDesc/MovieDesc';
import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesDetails } from 'servise/themoviedb-api';
import { MdKeyboardBackspace } from 'react-icons/md';
import css from './MovieDetails.module.css';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie] = useHttp(getMoviesDetails, null, movieId);
  const location = useLocation();
  const locationRef = useRef(location?.state?.from);

  if (!movie) return;

  return (
    <>
      <button className={css.btn} type="button">
        <Link className={css.btnLink} to={locationRef?.current || '/'}>
          <MdKeyboardBackspace />
          Go back
        </Link>
      </button>
      <MovieDesc movie={movie} />
      <div>
        <h3 className={css.title}>Additional information</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <Link className={css.itemLink} to="cast">
              Cast
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.itemLink} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
