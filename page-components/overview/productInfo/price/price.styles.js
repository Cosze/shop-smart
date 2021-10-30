import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Price = styled.span`
  color: ${props => props.sale ? '#c32525' : 'black'};
  font-weight: ${props => props.sale ? '500' : '400'};
  font-size: 1.2rem;
`;

export const OldPrice = styled.s`
  text-decoration: line-through;
  margin-left: 0.7em;
  font=size: 1.2rem;
`;
