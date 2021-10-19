import Overview from '../../page-components/overview';
import Qa from '../../page-components/qa';
import Related from '../../page-components/related';
import Reviews from '../../page-components/reviews';

export default function Product() {
  return (
    <div>
      <Overview />
      <Qa />
      <Related />
      <Reviews />
    </div>
  );
};
