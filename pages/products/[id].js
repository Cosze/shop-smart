/* eslint-disable react/react-in-jsx-scope */
import Overview from '../../page-components/overview';
import Qa from '../../page-components/qa';
import Related from '../../page-components/related';
import Reviews from '../../page-components/reviews';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Product(props) {
  return (
    <Page>
      <Overview product={props?.product} styles={props?.styles} />
      <Qa />
      <Related />
      <Reviews />
    </Page>
  );
}


export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          id: '48432',
        },
      },
      {
        params: {
          id: '48433',
        },
      },
      {
        params: {
          id: '48434',
        },
      },
      {
        params: {
          id: '48435',
        },
      },
      {
        params: {
          id: '48436',
        },
      },
    ]
  }
}

export async function getStaticProps(context) {
  const product_id = context.params.id;
  // fetch product info
  const fetchProduct = await fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${product_id}`, {
    headers: {
      'Authorization': process.env.API_KEY,
    }
  });
  const product = await fetchProduct.json();
  const fetchStyles = await fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${product_id}/styles`, {
    headers: {
      'Authorization': process.env.API_KEY,
    }
  });
  const styles = await fetchStyles.json();
  return {
    props: {
      product,
      styles: styles.results,
    },
    revalidate: 600,
  };
}
