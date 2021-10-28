import * as S from './sizeSelector.styles';
import { useState } from 'react';

export default function SizeSelector({ skus }) {
  const [size, setSize] = useState();

  return (
    <S.Wrapper className='size-selector'>
      <div>
        <S.Text>Size</S.Text>
        <S.Number>2</S.Number>
      </div>
      <S.Grid>
        <S.Size>1</S.Size>
        <S.Size>1.5</S.Size>
        <S.Size current>2</S.Size>
        <S.Size>2.5</S.Size>
        <S.Size>3</S.Size>
        <S.Size>3.5</S.Size>
        <S.Size>4</S.Size>
        <S.Size>14.5</S.Size>
      </S.Grid>
    </S.Wrapper>
  );
}
