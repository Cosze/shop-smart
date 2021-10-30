import * as S from './imageGallery.styles';
import Carousel from './carousel';
import Main from './main';

export default function ImageGallery() {
  return (
    <S.Wrapper className='image-gallery'>
      <Main />
      <Carousel />
    </S.Wrapper>
  );
}
