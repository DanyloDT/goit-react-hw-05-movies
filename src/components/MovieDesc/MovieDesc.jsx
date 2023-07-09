import PropTypes from 'prop-types';
import date from 'servise/date';
import img from '../../images/defaultImg.png';
import css from './MovieDesc.module.css';

function MovieDesc({ movie }) {
  const { poster_path, title, vote_average, genres, release_date, overview } =
    movie;

  const rating = info => {
    return Number.parseInt((info * 100) / 10);
  };

  return (
    <div className={css.container}>
      <img
        src={
          poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : img
        }
        alt={title}
        width="300"
      />
      <div className={css.containerInfo}>
        <h1>
          {title} ({date(release_date)})
        </h1>
        <p>{`User Score: ${rating(vote_average)}%`}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={css.list}>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDesc;

MovieDesc.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }).isRequired
    ).isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
