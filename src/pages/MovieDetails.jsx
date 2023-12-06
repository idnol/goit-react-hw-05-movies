
import { MovieInfo } from '../components/MovieInfo/MovieInfo';
import { useLocation } from 'react-router-dom';

export default function MovieDetails() {
  const location = useLocation();

  return <MovieInfo />
}
