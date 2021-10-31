import * as S from './main.styles';
import Image from 'next/image';

export default function Main({ url }) {
  return (
    <S.Wrapper className='main-image-container'>
      {url.url ? url.url : 'Placeholder for main image'}
    </S.Wrapper>
  );
}
