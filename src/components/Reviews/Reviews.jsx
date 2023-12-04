import { useEffect, useState } from 'react';
import { getReviews } from '../../api';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { ReviewItemStyled } from './Reviews.styled';

export const Reviews = ({id}) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getMovieReviews() {
      try {
        const data = await getReviews(id);
        setReviews(data.results)
      } catch (e) {
        console.log(e)
      }
    }
    getMovieReviews();
  }, [])
  return <ul>
    {reviews.map(item => {
      return <ReviewItemStyled key={item.id}>
        <ReviewItem author={item.author} content={item.content} />
      </ReviewItemStyled>
    })}
  </ul>
}
