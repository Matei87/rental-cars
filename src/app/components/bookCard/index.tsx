import { FC, useState } from 'react';
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../button';
import Marginer from '../marginer';
import 'react-calendar/dist/Calendar.css';
import {
  CardContainer,
  DateCalendar,
  Icon,
  ItemContainer,
  LineSeparator,
  Name,
  SmallIcon,
} from './bookCard.styled';

export const BookCard: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, seReturnCalendarOpen] = useState(false);

  return (
    <CardContainer id='bookCard'>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name
          onClick={() => {
            setStartCalendarOpen(!isStartCalendarOpen);
            isReturnCalendarOpen && seReturnCalendarOpen(false);
          }}
        >
          Pick Up Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name
          onClick={() => {
            seReturnCalendarOpen(!isReturnCalendarOpen);
            isStartCalendarOpen && setStartCalendarOpen(false);
          }}
        >
          Return Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar offset value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction='horizontal' margin='2em' />
      <Button text='Book Your Ride' />
    </CardContainer>
  );
};
