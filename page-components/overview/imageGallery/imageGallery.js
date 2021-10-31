import * as S from './imageGallery.styles';
import { useState } from 'react';
import Carousel from './carousel';
import Main from './main';

export default function ImageGallery({ style }) {
  const photo_list = style?.photos;
  const [mainPhoto, setMainPhoto] = useState(photo_list[0]);

  return (
    <S.Wrapper className='image-gallery'>
      <Main photo={mainPhoto} />
      <Carousel photos={photo_list} funcs={{ mainPhoto, setMainPhoto }} />
    </S.Wrapper>
  );
}
