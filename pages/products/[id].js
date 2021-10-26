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

export default function Product() {
  return (
    <Page>
      <Overview />
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
          id: '12412',
        },
      },
      {
        params: {
          id: '12312',
        },
      },
    ]
  }
}

export async function getStaticProps(context) {
  const product_id = context.params.id;
  console.log(product_id);
  // fetch product info
  return {
    props: {},
    revalidate: 600,
  };
}
