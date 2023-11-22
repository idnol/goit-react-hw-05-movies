import axios from 'axios';

const api_key = '77f5d86da7988173fc898620291e1d39';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2Y1ZDg2ZGE3OTg4MTczZmM4OTg2MjAyOTFlMWQzOSIsInN1YiI6IjY1NWI5YjU2ZjY3ODdhMDBjNmNmMGIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YChLMtMnBjBpbwj0Mpvlsgbe_Gsgz5q2WWkVy1JI--w';

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
  console.log(response);
  return response.data;
}
