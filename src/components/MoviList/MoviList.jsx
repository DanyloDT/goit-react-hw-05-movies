import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviList.module.css';

export const MoviList = ({ movies }) => {
  const location = useLocation();

  return (
    <ol className={css.list}>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link
            className={css.link}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title ? title : name}
          </Link>
        </li>
      ))}
    </ol>
  );
};

MoviList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};
