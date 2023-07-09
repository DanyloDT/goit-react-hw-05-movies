import axios from 'axios';
const API_KEY = 'b839a339e6403065af3bc248bb23e5e8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMoviesTrending = async () => {
  const { data } = await axios.get(`/trending/all/day`, {
    params: { api_key: API_KEY },
  });

  return data.results;
};

export const getSearchMovies = async query => {
  const { data } = await axios.get(`/search/movie`, {
    params: { api_key: API_KEY, query },
  });

  return data.results;
};

export const getMoviesDetails = async id => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: { api_key: API_KEY },
  });

  return data;
};

export const getMoviesCredits = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: { api_key: API_KEY },
  });

  return data.cast;
};

export const getMoviesReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: { api_key: API_KEY },
  });

  return data.results;
};
