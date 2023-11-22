import styled from 'styled-components';

export const ImageWrapperStyled = styled.div`
  position: relative;
  padding-bottom: 150%;
  margin-bottom: 10px;
`;

export const ImageStyled = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export const InfoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleStyled = styled.h4`
  margin: 0;
  color: #333333;
`;

export const AvgStyled = styled.span`
  color: rgba(0, 0, 0, .4);
  text-decoration: none;
`;

export const AvgWrapperStyled = styled.span`
  display: flex;
  width: fit-content;
  gap: 5px;
  align-items: center;
`;
