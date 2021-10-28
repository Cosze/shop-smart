import * as S from './description.styles';

export default function Description({ product }) {
  return (
    <S.Wrapper className='description'>
      <S.Header>{product?.slogan}</S.Header>
      <S.Paragraph>{product?.description}</S.Paragraph>
    </S.Wrapper>
  );
}
