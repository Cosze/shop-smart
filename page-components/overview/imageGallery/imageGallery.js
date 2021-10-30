import * as S from './imageGallery.styles';
import { useState } from 'react';
import Carousel from './carousel';
import Main from './main';

export default function ImageGallery() {
  const url_list = ['1', '2', '3', '4', '5'];
  const [mainURL, setMainURL] = useState(url_list[0]);

  return (
    <S.Wrapper className='image-gallery'>
      <Main url={mainURL} />
      <Carousel urls={url_list} setter={setMainURL} />
    </S.Wrapper>
  );
}
