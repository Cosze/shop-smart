import * as S from './overview.styles';
import ProductInfo from './productInfo';

export default function Overview({ product, styles }) {
  return (
    <S.Main>
      <S.ImageContainer></S.ImageContainer>
      <S.InfoContainer>
        <ProductInfo product={product} styles={styles}/>
      </S.InfoContainer>
    </S.Main>
  );
};
