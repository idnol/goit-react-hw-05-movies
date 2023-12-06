import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovie } from '../../api';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { MovieInfoHead } from '../MovieInfoHead/MovieInfoHead';
import { ButtonBlock, ButtonWrapper, ContentWrapper } from './MovieInfo.styled';
import { BackButton } from '../BackButton/BackButton';

export const MovieInfo = () => {
  const params = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getDetails() {
      try {
        const item =  await getMovie(params.movieId);
        setMovieInfo(item);
      } catch (e) {
        console.error(e);
      }
    }
    getDetails();
  }, []);
  return <div className="container">
    <BackButton loc={backLinkRef} />
    <MovieInfoHead poster={movieInfo.poster_path} title={movieInfo.title} avg={movieInfo.vote_average} text={movieInfo.overview} />
    <ContentWrapper>
      <ButtonWrapper>
        <Link to="cast"><ButtonBlock>Cast</ButtonBlock></Link>
        <Link to="reviews"><ButtonBlock>Reviews</ButtonBlock></Link>
      </ButtonWrapper>
    </ContentWrapper>
    <Outlet />
  </div>
}
