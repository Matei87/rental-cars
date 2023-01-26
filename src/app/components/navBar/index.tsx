import { FC } from 'react';
import { Logo } from '../logo';
import { NavItems } from './navitems';
import { NavBarContainer } from './navBar.styled';

export const Navbar: FC = () => {
  return (
    <NavBarContainer>
      <div>
        <Logo />
      </div>
      <NavItems />
    </NavBarContainer>
  );
};
