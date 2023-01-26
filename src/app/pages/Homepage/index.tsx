import { FC } from 'react';
import { AboutUs } from '../../components/aboutUs';
import { BookCard } from '../../components/bookCard';
import { BookingSteps } from '../../components/bookingSteps';
import Marginer from '../../components/marginer';
import { TopCars } from '../../components/topCars';
import { TopSection } from '../../components/topSection';

const HomePage: FC = () => {
  return (
    <>
      <TopSection />
      <Marginer direction='vertical' margin='4em' />
      <BookCard />
      <Marginer direction='vertical' margin='10em' />
      <BookingSteps />
      <Marginer direction='vertical' margin='8em' />
      <AboutUs />
      <Marginer direction='vertical' margin='8em' />
      <TopCars />
    </>
  );
};

export default HomePage;
