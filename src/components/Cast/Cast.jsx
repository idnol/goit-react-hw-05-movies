import { useEffect, useState } from 'react';
import { getCast, getReviews } from '../../api';
import { CastItem } from '../CastItem/CastItem';
import { CastItemWrapper, CastList } from './Cast.styled';
import { useParams } from 'react-router-dom';

export const Cast = ({id}) => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  console.log(movieId);
  useEffect(() => {
    async function getMovieCast() {
      try {
        const data = await getCast(id);
        setCast(data)
      } catch (e) {
        console.log(e)
      }
    }
    getMovieCast();
  }, [])
  return <CastList>
    {cast.map((item, index) => {
      return <CastItemWrapper key={item.id}>
        <CastItem name={item.name} character={item.character} img={item.profile_path} />
      </CastItemWrapper>
    })}
  </CastList>
}
