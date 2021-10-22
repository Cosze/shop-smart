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
};
