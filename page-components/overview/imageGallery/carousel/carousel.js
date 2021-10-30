import * as S from './carousel.styles';
import Thumbnail from './thumbnail';

export default function Carousel({ urls, setter }) {
  const url_list = urls;

  const handleClick = (url) => {
    return () => setter(url);
  };

  const getThumbnails = (collection) => {
    return collection.map((url, index) => (
      <div onClick={handleClick(url)} key={index}>
        <Thumbnail url={url} />
      </div>
    ));
  };

  return (
    <S.Wrapper className='main-image-selector'>
      <S.Container>
        {url_list && getThumbnails(url_list)}
      </S.Container>
    </S.Wrapper>
  );
}
