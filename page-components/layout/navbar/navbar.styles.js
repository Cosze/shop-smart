import styled from 'styled-components';

export const Navbar = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: gray;
  height: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Link = styled.div`
  font-weight: 700;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;
