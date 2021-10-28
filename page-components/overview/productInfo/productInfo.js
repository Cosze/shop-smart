import * as S from './productInfo.styles';
import Description from './description';

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
      <Description product={product} />
      <S.Bold>Product Features</S.Bold>
      <S.Features>
        {product?.features.map((feature, index) => <li key={index}>{feature.value + ' ' + feature.feature}</li>)}
      </S.Features>
    </S.Main>
  );
}
