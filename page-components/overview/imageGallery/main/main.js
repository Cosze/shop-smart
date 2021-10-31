import * as S from './main.styles';
import Image from 'next/image';

export default function Main({ photo }) {
  return (
    <S.Wrapper className='main-image-container'>
      {photo.url ? photo.url : 'Placeholder for main image'}
    </S.Wrapper>
  );
}
