import * as S from './styleSelector.styles';
import { useState } from 'react';
import Image from 'next/image';

export default function StyleSelector({ styles }) {
  const [style, setStyle] = useState(styles?.[0]);

  const handleClick = (style) => {
    return () => {
      setStyle(style);
    }
  };

  const generateStyles = () => {
    return styles?.map((styleObj, index) => {
      const thumbnail_url = styleObj?.photos?.[0]?.thumbnail_url;
      return (
        <S.ImageContainer className={`style-thumbnail ${styleObj === style ? 'current' : ''}`} onClick={handleClick(styleObj)} key={index}>
          {thumbnail_url &&
          <Image
            src={thumbnail_url}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />}
        </S.ImageContainer>
      );
    })
  };

  return (
    <S.Wrapper className='style-selector'>
      <S.TextWrapper>
        <S.Text>Style</S.Text>
        <S.Value>{style?.name}</S.Value>
      </S.TextWrapper>
      <S.Grid>
        {generateStyles()}
      </S.Grid>
    </S.Wrapper>
  );
}

// TODO: fix image dimensions
// images should load faster
