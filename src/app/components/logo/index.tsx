import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ILogoProps } from '../../../types';
import CarLogoImg from '../../../assets/images/car-logo.png';
import CarLogoDarkImg from '../../../assets/images/car-logo-dark.png';
import { LogoContainer, LogoText, Image } from './logo.styled';

export const Logo: FC<ILogoProps> = (props: ILogoProps) => {
  const { color, bgColor } = props;
  return (
    <NavLink to='rental-cars' reloadDocument>
      <LogoContainer>
        <Image>
          <img
            src={bgColor === 'dark' ? CarLogoDarkImg : CarLogoImg}
            alt='car-logo'
          />
        </Image>
        <LogoText color={color || 'dark'}>Rentalcars</LogoText>
      </LogoContainer>
    </NavLink>
  );
};
