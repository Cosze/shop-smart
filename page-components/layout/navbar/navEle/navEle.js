import Link from 'next/link';
import * as S from './navEle.styles';

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
};

export default function NavEle({name}) {
  return (
    <S.Link>
      <Link href={name === 'home' ? '/' : name}>
        {capitalize(name)}
      </Link>
    </S.Link>
  );
};
