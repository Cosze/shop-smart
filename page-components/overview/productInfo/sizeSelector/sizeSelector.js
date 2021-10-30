import * as S from './sizeSelector.styles';
import { useState } from 'react';

export default function SizeSelector({ skus }) {
  const arrayOfSkus = skus && Object.keys(skus);
  const [size, setSize] = useState(arrayOfSkus?.[0]);

  const handleClick = (e) => {
    const sku = e.target.getAttribute('data-sku');
    setSize(sku);
  };

  const generateSizeBoxes = skus => {
    return arrayOfSkus?.map(sku_id => {
      return <S.Size key={sku_id} data-sku={sku_id}  onClick={handleClick} current={sku_id === size}>{skus[sku_id]['size']}</S.Size>;
    });
  };

  return (
    <>
      {
        size !== 'null' ? (
          <S.Wrapper className='size-selector'>
            <div>
              <S.Text>Size</S.Text>
              <S.Value>{skus?.[size]?.size}</S.Value>
            </div>
            <S.Grid>
              {generateSizeBoxes(skus)}
            </S.Grid>
          </S.Wrapper>
        ) : null
      }
    </>
  );
}
