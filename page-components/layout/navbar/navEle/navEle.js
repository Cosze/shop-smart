import Link from 'next/link';
import * as S from './navEle.styles';

export default function NavEle({name}) {
  return (
    <S.Link>
      <Link href={name === 'Home' ? '/' : name}>
        {name}
      </Link>
    </S.Link>
  );
};
