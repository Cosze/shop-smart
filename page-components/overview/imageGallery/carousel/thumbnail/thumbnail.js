import * as S from './thumbnail.styles';

export default function Thumbnail({ url }) {
  return (
    <S.Wrapper className='image-thumbnail'>
      {url ? <S.Test>{url}</S.Test> : <S.Test>Fail</S.Test>}
    </S.Wrapper>
  );
}
