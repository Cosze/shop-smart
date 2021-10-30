import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 0.7em;
`;

export const RatingContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 25px;
  width: 80px;
  cursor: pointer;
`;

export const Text = styled.a`
  display: inline-block;
  margin-left: 0.7em;
  color: #238CA3;
  cursor: pointer;

  &:hover {
    color: #127b92;
    text-decoration: underline;
  }
`;

export const Star = styled.div`
  display: inline-block;
  width: max-content;
  height: max-content;
`;

export const UncoloredStarContainer = styled.div`
  display: flex;
  position: absolute;
  top: 5%;
`;

export const ColoredStarContainer = styled(UncoloredStarContainer)`
  overflow: hidden;
  width: ${props => (props['data-width'] || 0) + 'px'};
`;
