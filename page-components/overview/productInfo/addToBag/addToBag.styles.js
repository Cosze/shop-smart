import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 2em;
`;

export const Button = styled.button`
  color: #fff;
  font-size: 1.2rem;
  background-color: #313131;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  padding: 0.7em 6em;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: #282828;
  }
`;
