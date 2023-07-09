import { useHttp } from 'Hook/useHttp';
import { MoviList } from 'components/MoviList/MoviList';
import { getMoviesTrending } from 'servise/themoviedb-api';
import css from './Homepage.module.css';

const Homepage = () => {
  const [movies] = useHttp(getMoviesTrending, []);

  return (
    <>
      <h1 className={css.title}> Trending today</h1>
      <MoviList movies={movies} />
    </>
  );
};
export default Homepage;
