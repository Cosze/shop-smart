import * as S from './overview.styles';
import ImageGallery from './ImageGallery';
import ProductInfo from './productInfo';

export default function Overview({ product, styles }) {
  return (
    <S.Main>
      <S.ImageContainer>
        <ImageGallery style={styles[0]} />
      </S.ImageContainer>
      <S.InfoContainer>
        <ProductInfo product={product} styles={styles} />
      </S.InfoContainer>
    </S.Main>
  );
}
