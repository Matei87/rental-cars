import { FC } from 'react';
import JeepImg from '../../../assets/images/jeep.png';
import {
  AboutUsContainer,
  CarContainer,
  InfoContainer,
  InfoText,
  Title,
} from './aboutUs.styled';

export const AboutUs: FC = () => {
  return (
    <AboutUsContainer id='about'>
      <CarContainer>
        <img src={JeepImg} alt='car' />
      </CarContainer>
      <InfoContainer>
        <Title>Fell The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Get a Personalised Car and see the interest rate and terms you may be
          offered, without affecting your credit rating. Your needs aren’t the
          same as everyone else’s….because you are unique. Our private bankers
          get to know you personally and professionally to tailor precise
          financial strategies.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};
