import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as console from 'console';
import { getMovie } from '../api';

export default function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getDetails() {
      try {
        const movie = await getMovie(params.movieId);
        console.log(movie);
      } catch (e) {
        // console.error(e);
      }
    }
    getDetails();
  }, []);
}
