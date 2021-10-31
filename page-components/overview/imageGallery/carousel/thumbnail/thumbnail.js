import * as S from './thumbnail.styles';
import Image from 'next/image';

export default function Thumbnail({ url }) {
  return (
    <S.Wrapper className='image-thumbnail'>
      {url ? <Image src={url} layout='fill' objectFit='cover' /> : <S.Test>Fail</S.Test>}
    </S.Wrapper>
  );
}
