import * as S from './productInfo.styles';
import Description from './description';
import Features from './features';
import Price from './price';
import Rating from'./rating';
import SizeSelector from './sizeSelector';

export default function ProductInfo({ product, styles }) {
  return (
    <S.Main>
      <S.Info>{product?.category}</S.Info>
      <S.Name>{product?.name}</S.Name>
      <Rating rating='3.5'/>
      <Price style={styles?.[2]}/>
      {/* style selectors */}
      <SizeSelector skus={styles?.[2]['skus']} />
      {/* ADD TO BAG */}
      <Description product={product} />
      <Features product={product} />
    </S.Main>
  );
}
