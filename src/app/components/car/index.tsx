import { FC } from 'react';
import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICarProps } from '../../../types';
import {
  CarContainer,
  CarDetail,
  CarDetailsContainer,
  CarInfo,
  CarName,
  CarThumbnail,
  DailyPrice,
  MonthlyPrice,
  PricesContainer,
  RentButton,
  Separator,
  SmallIcon,
  SmallText,
} from './car.styled';

export const Car: FC<ICarProps> = (props: ICarProps) => {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
    monthlyPrice,
    mileage,
    gearType,
    gas,
  } = props;

  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} alt={name} />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          $ {dailyPrice}
          <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          $ {monthlyPrice}
          <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PricesContainer>

      <Separator />

      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text='Rent Now' />
    </CarContainer>
  );
};
