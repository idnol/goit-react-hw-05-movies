import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovie } from '../../api';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { MovieInfoHead } from '../MovieInfoHead/MovieInfoHead';
import { ButtonBlock, ButtonWrapper, ContentWrapper } from './MovieInfo.styled';
import { BackButton } from '../BackButton/BackButton';

export const MovieInfo = () => {
  const params = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const handleCastClick = (e) => {
    setShowCast(true);
    setShowReviews(false);
    e.target.classList.add('active')
    e.target.nextElementSibling.classList.remove('active')
  }

  const handleReviewsClick = (e) => {
    setShowCast(false);
    setShowReviews(true);
    e.target.classList.add('active')
    e.target.previousElementSibling.classList.remove('active')
  }

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
    <BackButton />
    <MovieInfoHead poster={movieInfo.poster_path} title={movieInfo.title} avg={movieInfo.vote_average} text={movieInfo.overview} />
    <ContentWrapper>
      <ButtonWrapper>
        <ButtonBlock onClick={handleCastClick}>Cast</ButtonBlock>
        <ButtonBlock onClick={handleReviewsClick}>Reviews</ButtonBlock>
      </ButtonWrapper>
      {/*{showCast && <Cast id={params.movieId} />}*/}
      {/*{showReviews && <Reviews id={params.movieId} />}*/}
      {showCast && <Link to="cast" />}
      {showReviews && <Link to="reviews" />}
    </ContentWrapper>
  </div>
}
