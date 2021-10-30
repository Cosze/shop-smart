import * as S from './productInfo.styles';
import AddToBag from './addToBag';
import Description from './description';
import Features from './features';
import Price from './price';
import Rating from'./rating';
import SizeSelector from './sizeSelector';
import StyleSelector from './styleSelector';

export default function ProductInfo({ product, styles }) {
  return (
    <S.Main>
      <S.Info>{product?.category}</S.Info>
      <S.Name>{product?.name}</S.Name>
      <Rating rating='3.5' />
      <Price style={styles?.[2]} />
      <StyleSelector styles={styles} />
      <SizeSelector skus={styles?.[2]['skus']} />
      <AddToBag />
      <Description product={product} />
      <Features product={product} />
    </S.Main>
  );
}
