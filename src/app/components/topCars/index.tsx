import { FC, useState } from 'react';
import { Car } from '../car';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import { CarsContainer, TopCarsContainer } from './topCars.styled';
import { Title } from '../bookingSteps/bookingSteps.styled';
import { data } from './data';

export const TopCars: FC = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const cars = [
    <Car {...data[0]} />,
    <Car {...data[1]} />,
    <Car {...data[2]} />,
    <Car {...data[3]} />,
    <Car {...data[4]} />,
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 2);

  return (
    <TopCarsContainer id='cars'>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            'clickToChange',
            { resolve: slidesToShowPlugin, options: { numberOfSlides: 3 } },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
};
