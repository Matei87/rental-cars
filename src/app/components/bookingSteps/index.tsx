import { FC } from 'react';
import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
  Step,
  StepContainer,
  StepDescription,
  StepIcon,
  StepsContainer,
  StepTitle,
  Title,
} from './bookingSteps.styled';

export const BookingSteps: FC = () => {
  return (
    <Container id='services'>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            It doesn’t matter what your arrival or departure city is. We will
            take care of everything, transfers, bringing you the cars and their
            return. You won’t have to think about anything.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pickup the Best Date to rent a car for you with a single point of
            contact, you’ll get the prompt personal service from a team of
            experts, each working together to accomplish your financial and
            personal goals.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDescription>
            You will be assisted by your dedicated Manager for the entire
            duration of the service with 24h availability for any need. During
            the Tours we will be your guide to facilitate your travel, traffic
            and parking.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};
