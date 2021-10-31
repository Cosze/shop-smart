import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

export const ImgWrap = styled.div`
  padding-bottom: 0.3em;
  margin-bottom: 0.3em;
  border-bottom: 3px solid transparent;
  ${props => props.current ? 'border-color: #000' : null};
  transition: border-color 0.2s;

  &:hover {
    border-color: #000;
  }
`;
