import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 200px;
  min-width: 200px;
  height: 300px;
`;

export const MoviePoster = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeadWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 30px;
`;

export const HeadTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
