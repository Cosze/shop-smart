/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '../../../public/images/logoWhite.png';
import NavEle from './navEle';
import * as S from './navbar.styles';

export default function Navbar() {
  return (
    <S.Navbar>
      <S.Wrapper>
        <S.Logo>
          <Link href='/' passHref>
            <Image src={siteLogo} alt='logo' width={25} height={25}/>
          </Link>
        </S.Logo>
        <NavEle name='home' />
        <NavEle name='about' />
        <NavEle name='favorites' />
        <NavEle name='cart' />
      </S.Wrapper>
    </S.Navbar>
  );
};
