import * as S from './productInfo.styles';

export default function ProductInfo({ product, styles }) {
  return (
    <S.Main>
      <S.Info>{product?.category}</S.Info>
      <S.Name>{product?.name}</S.Name>
      {/* ratings */}
      {/* pricing */}
      {/* style name */}
      {/* style selectors */}
      {/* size name */}
      {/* size selectors */}
      {/* ADD TO BAG */}
      <S.Bold>{product?.slogan}</S.Bold>
      <S.Info>{product?.description}</S.Info>
      <S.Bold>Product Features</S.Bold>
      <S.Features>
        {product?.features.map((feature, index) => <li key={index}>{feature.value + ' ' + feature.feature}</li>)}
      </S.Features>
    </S.Main>
  );
}
