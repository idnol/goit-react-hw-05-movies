import { useEffect, useState } from 'react';
import { getReviews } from '../../api';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { ReviewItemStyled } from './Reviews.styled';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getMovieReviews() {
      try {
        const data = await getReviews(params.movieId);
        setReviews(data.results)
      } catch (e) {
        console.log(e)
      }
    }
    getMovieReviews();
  }, [])
  return <>
    {reviews.length !== 0 && <ul>
      {reviews.map(item => {
        return <ReviewItemStyled key={item.id}>
          <ReviewItem author={item.author} content={item.content} />
        </ReviewItemStyled>
      })}
    </ul>}
    {reviews.length === 0 && <h3>Not reviews</h3>}
  </>

}
