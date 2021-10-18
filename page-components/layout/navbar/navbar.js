import Link from 'next/link';
import * as S from './navbar.styles';

export default function Navbar() {
  return (
    <S.Navbar>
      <S.Wrapper>
        <S.Link>
          <Link href='/'>
            Home
          </Link>
        </S.Link>
      </S.Wrapper>
    </S.Navbar>
  );
};
