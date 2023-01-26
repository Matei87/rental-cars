import { FC } from 'react';
import MclarenCarImg from '../../../assets/images/mclaren-orange-big.png';
import BlobImg from '../../../assets/images/blob.svg';
import { Button } from '../button';
import {
  BlobContainer,
  ButtonsContainer,
  Description,
  LeftContainer,
  RightContainer,
  Slogan,
  StandaloneCar,
  TopSectionContainer,
} from './topSection.styked';

export const TopSection: FC = () => {
  return (
    <TopSectionContainer id='home'>
      <LeftContainer>
        <Slogan>Rent The Best Quality Car's With Us</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like
        </Description>
        <ButtonsContainer>
          <Button text='Book Your Ride' />
          <Button text='Sell Your Car' theme='filled' />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt='blob' />
        </BlobContainer>
        <StandaloneCar>
          <img src={MclarenCarImg} alt='car' />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
};
