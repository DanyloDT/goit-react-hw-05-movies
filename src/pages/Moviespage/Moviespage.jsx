import { useHttp } from 'Hook/useHttp';
import { MoviList } from 'components/MoviList/MoviList';
import Search from 'components/Search/Search';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'servise/themoviedb-api';

const Moviespage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [movies] = useHttp(getSearchMovies, [], query);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };
  if (!movies) return;
  return (
    <>
      <Search onSubmit={handleSubmit} />
      {query && <MoviList movies={movies} />}
    </>
  );
};

export default Moviespage;
