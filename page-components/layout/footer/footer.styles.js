import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: gray;
  padding: 1em;
`;

export const Text = styled.p`
  width: max-content;
  margin: 0 auto;
  padding: 0;
  font-weight: 600;
`;

export const Link = styled.a`
  font-weight: 900;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;
