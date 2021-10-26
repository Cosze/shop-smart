import Link from 'next/link';
import * as S from './productCard.styles';

export default function ProductCard({ product }) {
  return (
    <div>
      <Link href={`/products/${product?.id}`}>{product?.name}</Link>
      <p>{product?.description}</p>
    </div>
  );
}
