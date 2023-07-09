import { Layout } from 'components/Layout/Layout';

import Homepage from 'pages/Homepage/Homepage';

import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

const Moviespage = lazy(() => import('pages/Moviespage/Moviespage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<Moviespage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
