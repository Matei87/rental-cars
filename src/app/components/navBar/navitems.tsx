import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import { menuStyles } from './menuStyles';
import { ListContainer, NavItem } from './navBar.styled';

export const NavItems: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <NavLink to='rental-cars#home' reloadDocument>
              Home
            </NavLink>
          </NavItem>
          <NavItem menu>
            <NavLink to='rental-cars#cars' reloadDocument>
              Cars
            </NavLink>
          </NavItem>
          <NavItem menu>
            <NavLink to='rental-cars#services' reloadDocument>
              Services
            </NavLink>
          </NavItem>
          <NavItem menu>
            <NavLink to='rental-cars#contact' reloadDocument>
              Contact Us
            </NavLink>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }

  return (
    <ListContainer>
      <NavItem>
        <NavLink to='rental-cars#home' reloadDocument>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='rental-cars#cars' reloadDocument>
          Cars
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='rental-cars#services' reloadDocument>
          Services
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='rental-cars#contact' reloadDocument>
          Contact Us
        </NavLink>
      </NavItem>
    </ListContainer>
  );
};
