import { Link, useLocation } from 'react-router-dom';
import { IconContext } from "react-icons";
import {
  AvgStyled,
  AvgWrapperStyled,
  ImageStyled,
  ImageWrapperStyled,
  InfoWrapperStyled,
  TitleStyled,
} from './MovieItem.styled';
import { FaStarHalfAlt } from 'react-icons/fa';

const PATH = 'https://image.tmdb.org/t/p/w500'

export const MovieItem = ({id, title, img, avg}) => {
  const location = useLocation();

  return <Link to={`/movies/${id}`} state={{ from: location }}>
    <ImageWrapperStyled>
      <ImageStyled src={PATH + img} alt='{title}' />
    </ImageWrapperStyled>
    <InfoWrapperStyled>
      <TitleStyled>{title}</TitleStyled>
      <IconContext.Provider value={{ color: "rgba(0, 0, 0, .4)" }}>
        <AvgWrapperStyled>
          <FaStarHalfAlt /><AvgStyled>{avg}</AvgStyled>
        </AvgWrapperStyled>
      </IconContext.Provider>
    </InfoWrapperStyled>
  </Link>
}
