import * as S from './carousel.styles';
import Thumbnail from './thumbnail';

export default function Carousel({ urls, funcs }) {
  const { mainURL, setMainURL } = funcs;
  const url_list = urls;

  const handleClick = (url) => {
    return () => setMainURL(url);
  };

  const getThumbnails = (collection) => {
    return collection.map((url, index) => (
      <S.ImgWrap onClick={handleClick(url)} key={index} current={url === mainURL}>
        <Thumbnail url={url.thumbnail_url}/>
      </S.ImgWrap>
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
