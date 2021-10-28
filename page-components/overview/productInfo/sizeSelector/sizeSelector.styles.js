import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Text = styled.span`
  font-weight: 500;
  margin-right: 0.7em;
`;

export const Number = styled.span``;

export const Grid = styled.div`
  margin-top: 0.5em;
  display: grid;
  width: 410px;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 10px;
`;

export const Size = styled.div`
  background-color: ${props => props.current ? '#313131' : '#eaeaea'};
  color: ${props => props.current ? '#fff' : '#000'};
  border: 2px solid transparent;
  border-radius: 4px;
  width: 60px;
  text-align: center;
  padding: 0.5em 0;
  transition: border 0.2s ease-in;

  &:hover {
    cursor: pointer;
    border: 2px solid #313131;
  }
`;
