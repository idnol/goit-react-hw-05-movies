import { searchMovies } from '../../api';
import { useEffect, useState } from 'react';
import { MovieItem } from '../MovieItem/MovieItem';
import { MoviesItemStyled, MoviesListStyled } from '../MovieList/MovieList.styled';


export const SearchMovieList = ({query}) => {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await searchMovies(query);
        setSearchList(movies);
      } catch (e) {
        console.error(e);
      }
    }
    getMovies();
  }, [query]);

  return <MoviesListStyled>
    {searchList.map(item => {
      return <MoviesItemStyled key={item.id} >
        <MovieItem id={item.id} title={item.title} img={item.poster_path} avg={item.vote_average} />
      </MoviesItemStyled>
    })}
  </MoviesListStyled>
}
