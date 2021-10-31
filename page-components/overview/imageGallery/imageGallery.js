import * as S from './imageGallery.styles';
import { useState } from 'react';
import Carousel from './carousel';
import Main from './main';

export default function ImageGallery({ style }) {
  const url_list = style?.photos;
  const [mainURL, setMainURL] = useState(url_list[0]);

  return (
    <S.Wrapper className='image-gallery'>
      <Main url={mainURL} />
      <Carousel urls={url_list} funcs={{ mainURL, setMainURL }} />
    </S.Wrapper>
  );
}
