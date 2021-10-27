import Link from 'next/link';
import * as S from './productCard.styles';

export default function ProductCard({ product, featured }) {
  return (
    <S.Card featured={featured}>
      <Link href={`/products/${product?.id}`}>{product?.name}</Link>
      <p>{product?.description}</p>
    </S.Card>
  );
}
