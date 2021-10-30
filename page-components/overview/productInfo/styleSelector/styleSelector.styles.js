import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 2em;
`;

export const TextWrapper = styled.div`
  margin-bottom: 1em;
`;

export const Text = styled.span`
  font-weight: 500;
  margin-right: 0.7em;
`;

export const Value = styled.span``;

export const Grid = styled.div`
  margin-top: 0.5em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

export const ImageContainer = styled.div`
  user-select: none;
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
  background-color: #000;
`;
