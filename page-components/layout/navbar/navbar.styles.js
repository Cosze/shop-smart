import styled from 'styled-components';

export const Navbar = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3E3E3E;
  height: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
`;

export const Link = styled.div`
  color: #ECECEC;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;
