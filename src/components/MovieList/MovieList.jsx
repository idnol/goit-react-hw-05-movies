import { getTrending } from '../../api';
import { useEffect, useState } from 'react';
import { MovieItem } from '../MovieItem/MovieItem';
import { MoviesItemStyled, MoviesListStyled } from './MovieList.styled';

export const MovieList = () => {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const trends = await getTrending();
        setTrendList(trends.results);
      } catch (e) {
        console.error(e);
      }
    }
    getMovies();
  }, []);
  console.log(trendList);

  return <MoviesListStyled>
    {trendList.map(item => {
      return <MoviesItemStyled key={item.id} >
        <MovieItem id={item.id} title={item.title} img={item.poster_path} avg={item.vote_average} />
      </MoviesItemStyled>
    })}
  </MoviesListStyled>
}
