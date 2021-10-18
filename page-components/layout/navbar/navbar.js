import Link from 'next/link';
import * as S from './navbar.styles';

export default function Navbar() {
  return (
    <S.Navbar>
      This is the Navbar.{' '}
      <Link href='/'>
        <a>Return Home</a>
      </Link>
    </S.Navbar>
  );
};
