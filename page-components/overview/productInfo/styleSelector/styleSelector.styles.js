import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Text = styled.span`
  font-weight: 500;
  margin-right: 0.7em;
`;

export const Value = styled.span``;

export const Grid = styled.div`
  margin-top: 0.5em;
  display: grid;
  width: 410px;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
  background-color: #000;
`;
