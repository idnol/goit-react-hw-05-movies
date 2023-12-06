import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";
import { ButtonStyled } from './BackButton.styled';

export const BackButton = ({loc}) => {
  return (
      <NavLink to={loc.current.pathname} >
        <IconContext.Provider value={{ color: "rgb(0, 0, 0)",  size: "32" }}>
          <ButtonStyled>
            <BsArrowLeftCircleFill /> Back to movie list
          </ButtonStyled>
        </IconContext.Provider>
      </NavLink>
  )
}
