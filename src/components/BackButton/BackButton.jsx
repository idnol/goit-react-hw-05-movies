import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";
import { AvgWrapperStyled } from '../MovieItem/MovieItem.styled';
import { ButtonStyled } from './BackButton.styled';

export const BackButton = () => {
  return (

      <NavLink to={`/`}>
        <IconContext.Provider value={{ color: "rgb(0, 0, 0)",  size: "32" }}>
          <ButtonStyled>
            <BsArrowLeftCircleFill /> Back to movie list
          </ButtonStyled>
        </IconContext.Provider>
      </NavLink>
  )
}
