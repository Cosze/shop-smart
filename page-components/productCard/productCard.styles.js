import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  ${props => props.featured && `grid-column: span 4;`}
`;
