import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ShopSmart App Home Page</title>
      </Head>

      <main>
        <h1>
          ShopSmart App Home Page
        </h1>
        <div>
          <Link href='/products'>
            <a>View Product</a>
          </Link>
        </div>
      </main>

      <footer>
        Created by <a href='https://github.com/Cosze'>me</a>
      </footer>
    </div>
  )
};
