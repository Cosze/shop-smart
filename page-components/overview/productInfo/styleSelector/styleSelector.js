import * as S from './styleSelector.styles';

export default function StyleSelector() {
  return (
    <S.Wrapper className='style-selector'>
      <div>
        <S.Text>Style</S.Text>
        <S.Value>White</S.Value>
      </div>
    </S.Wrapper>
  );
}
