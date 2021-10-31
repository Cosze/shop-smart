import * as S from './carousel.styles';
import Thumbnail from './thumbnail';

export default function Carousel({ photos, funcs }) {
  const { mainPhoto, setMainPhoto } = funcs;

  const handleClick = (photo) => {
    return () => setMainPhoto(photo);
  };

  const getThumbnails = (collection) => {
    return collection.map((photo, index) => (
      <S.ImgWrap onClick={handleClick(photo)} key={index} current={photo === mainPhoto}>
        <Thumbnail url={photo.thumbnail_url}/>
      </S.ImgWrap>
    ));
  };

  return (
    <S.Wrapper className='main-image-selector'>
      <S.Container>
        {photos && getThumbnails(photos)}
      </S.Container>
    </S.Wrapper>
  );
}
