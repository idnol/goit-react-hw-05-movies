import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 15px;
`;

export const MoviesItemStyled = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: calc((100% - 60px) / 5);
`;

