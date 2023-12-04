import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  width: 200px;
  min-width: 200px;
  background: #e9e9e9;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  height: max-content;
`;

export const ButtonBlock = styled.span`
  width: 100%;
  display: block;
  padding: 5px 10px;
  cursor: pointer;
  transition: 500ms ease;
  &:hover, &:focus, &.active {
    background: #f5f5f5;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 50px;
`;
