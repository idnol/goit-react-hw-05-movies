import axios from 'axios';

const api_key = '77f5d86da7988173fc898620291e1d39';

const BASE_URL = "https://api.themoviedb.org/3";
const api = axios.create({ baseURL: BASE_URL });

export const getTrending = async () => {
  const response = await api.get('trending/movie/day', {
    params: { api_key }
  });
  return response.data;
}

export const getMovie = async (movie_id) => {
  const response = await api.get(`movie/${movie_id}`, {
    params: { api_key }
  });
  return response.data;
}
export const getReviews = async (movie_id) => {
  const response = await api.get(`movie/${movie_id}/reviews`, {
    params: { api_key }
  });
  return response.data;
}

export const getCast = async (movie_id) => {
  const response = await api.get(`movie/${movie_id}/credits`, {
    params: { api_key }
  });
  return response.data.cast;
}

export const searchMovies = async (query) => {
  const response = await api.get(`search/movie?query=${query}`, {
    params: { api_key }
  });
  return response.data.results;
}
