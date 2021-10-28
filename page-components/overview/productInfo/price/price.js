import * as S from './price.styles';

export default function Price({ style }) {
  return (
    <S.Wrapper className='price'>
      {style?.sale_price ? (
      <div>
        <S.Price sale>${style.sale_price}</S.Price>
        <S.OldPrice>${style.original_price}</S.OldPrice>
      </div>
      ) : <S.Price>${style?.original_price}</S.Price>}
    </S.Wrapper>
  )
}
