import * as S from './main.styles';
import Image from 'next/image';

export default function Main({ photo }) {
  return (
    <S.Wrapper className='main-image-container'>
      {photo.url ? <Image src={photo.url} layout='fill' objectFit='cover' objectPosition='center' priority='true' /> : 'Placeholder for main image'}
    </S.Wrapper>
  );
}
