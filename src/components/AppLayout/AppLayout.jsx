import { NavLink, Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { FooterStyled, HeaderStyled, MainStyled, MenuListStyled, TextStyled } from './AppLayout.styled';
import { Suspense } from 'react';

export const AppLayout = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return (
    <>
      <GlobalStyle />
      <HeaderStyled>
        <div className='container'>
          <MenuListStyled>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </MenuListStyled>
        </div>
      </HeaderStyled>
      <MainStyled>
        <div className='container'>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </div>
      </MainStyled>
      <FooterStyled>
        <div className='container'>
          <TextStyled>all right received  {currentYear}</TextStyled>
        </div>
      </FooterStyled>
    </>
  )
}
