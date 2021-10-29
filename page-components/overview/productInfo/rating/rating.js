import * as S from './rating.styles';
import { FaStar } from 'react-icons/fa';

export default function Rating({rating}) {
  const starGenerator = (type) => {
    const valid = {
      colored: null,
      uncolored: null,
    };
    if (!(type in valid)) return null;
    const color = type === 'colored' ? '#1c1c1c' : '#727272';
    return [1, 2, 3, 4, 5].map(num => (
      <S.Star key={num}>
        <FaStar style={{color}}/>
      </S.Star>
    ));
  };

  const ratingWidth = (rating) => {
    const int = Math.floor(rating);
    return int * 16 + 2 + (rating-int) * 12;
  };

  return (
    <S.Wrapper className='rating'>
      <S.RatingContainer>
        <S.UncoloredStarContainer>
          {starGenerator('uncolored')}
        </S.UncoloredStarContainer>
        <S.ColoredStarContainer data-width={ratingWidth(Number(rating))}>
          {starGenerator('colored')}
        </S.ColoredStarContainer>
      </S.RatingContainer>
      <S.Text>{~~rating * ~~(Math.random() * 100)} ratings</S.Text>
    </S.Wrapper>
  );
}

// TODO: Link to reviews component, handle proper inputs
