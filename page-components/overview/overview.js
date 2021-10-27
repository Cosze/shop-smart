import * as S from './overview.styles';

export default function Overview({ product, styles }) {
  return (
    <S.Main>
      <S.ImageContainer></S.ImageContainer>
      <S.InfoContainer>
        <S.Info>{product?.name}</S.Info>
        <S.Info>{product?.description}</S.Info>
        <S.Info>{product?.category}</S.Info>
        <S.Info>{product?.default_price}</S.Info>
        {styles?.map(style => <S.Info key={style.style_id}>{style.name}</S.Info>)}
      </S.InfoContainer>
    </S.Main>
  );
};
