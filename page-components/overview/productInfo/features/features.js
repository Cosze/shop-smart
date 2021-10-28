import * as S from './features.styles';

export default function Features({ product }) {
  return (
    <S.Wrapper className='features'>
      <S.Title>Product Features</S.Title>
      <S.List>
        {product?.features.map((feature, index) => <li key={index}>{feature.value + ' ' + feature.feature}</li>)}
      </S.List>
    </S.Wrapper>
  );
}
