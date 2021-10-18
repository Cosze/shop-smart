import Head from 'next/head';
import Link from 'next/link';

export default function Products() {
  return (
    <div>
      <Head>
        Products Page
      </Head>
      <main>
        <div>Products</div>
        <Link href='/products/3'>to 3</Link>
      </main>
    </div>
  );
};