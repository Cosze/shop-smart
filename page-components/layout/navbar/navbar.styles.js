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
  justify-content: space-between;
  width: 70%;
`;

export const Logo = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

