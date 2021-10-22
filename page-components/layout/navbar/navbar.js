import Link from 'next/link';
import Image from 'next/image';
// import siteLogo from '../../../public/images/logoWhite.png';
import * as S from './navbar.styles';

export default function Navbar() {
  return (
    <S.Navbar>
      <S.Wrapper>
        {/* <Image src='' alt='logo' width={25} height={25}/> */}
        <S.Link>
          <Link href='/'>
            Home
          </Link>
        </S.Link>
      </S.Wrapper>
    </S.Navbar>
  );
};
