import * as S from './productInfo.styles';

export default function ProductInfo({ product, styles }) {
  return (
    <S.Main>
      <S.Info>{product?.category}</S.Info>
      <S.Info>{product?.name}</S.Info>
      {/* ratings */}
      {/* pricing */}
      {/* style name */}
      {/* style selectors */}
      {/* size name */}
      {/* size selectors */}
      {/* ADD TO BAG */}
      <S.Info>{product?.slogan}</S.Info>
      <S.Info>{product?.description}</S.Info>
      <S.Info>Product Features</S.Info>
      <ul>
        {product?.features.map((feature, index) => <li key={index}>{feature.value + ' ' + feature.feature}</li>)}
      </ul>
    </S.Main>
  );
}
