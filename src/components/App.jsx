import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import NotFound from '../pages/NotFound';
import { AppLayout } from './AppLayout/AppLayout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

// const HomePage = lazy(() => import('pages/HomePage'));
// const MoviesPage = lazy(() => import('pages/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
