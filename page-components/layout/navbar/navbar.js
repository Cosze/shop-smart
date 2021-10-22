import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '../../../public/images/logoWhite.png';
import NavEle from './navEle';
import * as S from './navbar.styles';

export default function Navbar() {
  return (
    <S.Navbar>
      <S.Wrapper>
        <Image src={siteLogo} alt='logo' width={25} height={25}/>
        <NavEle name='Home' />
      </S.Wrapper>
    </S.Navbar>
  );
};
