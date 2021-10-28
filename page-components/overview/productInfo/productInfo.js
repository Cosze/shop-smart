import * as S from './productInfo.styles';
import Description from './description';
import Features from './features';
import Price from './price';

export default function ProductInfo({ product, styles }) {
  return (
    <S.Main>
      <S.Info>{product?.category}</S.Info>
      <S.Name>{product?.name}</S.Name>
      {/* ratings */}
      {/* pricing */}
      <Price style={styles?.[2]}/>
      {/* style name */}
      {/* style selectors */}
      {/* size name */}
      {/* size selectors */}
      {/* ADD TO BAG */}
      <Description product={product} />
      <Features product={product} />
    </S.Main>
  );
}
