/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import ProductCard from '../page-components/productCard';
import * as S from '../styles/page.styles';

const mapProducts = ({products}) => {
  if (products) {
    return products.map((product, index) => {
      return (
        <ProductCard
          product={product}
          key={index}
          featured={index === 0}
        />
      );
    })
  }
};

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>ShopSmart App Home Page</title>
      </Head>
      <main>
        <h1>
          ShopSmart App
        </h1>
        <S.Grid>
          {mapProducts(props)}
        </S.Grid>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', {
    headers: {
      'Authorization': process.env.API_KEY,
    }
  });
  const products = await response.json();
  return {
    props: {
      products,
    }
  };
}
