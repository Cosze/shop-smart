import * as S from './carousel.styles';
import Thumbnail from './thumbnail';

export default function Carousel() {
  const tests = [1, 2, 3];
  const getThumbnails = (collection) => {
    return collection.map(url => <Thumbnail url={url} />);
  };

  return (
    <S.Wrapper className='main-image-selector'>
      <S.Container>
        {getThumbnails(tests)}
      </S.Container>
    </S.Wrapper>
  );
}
