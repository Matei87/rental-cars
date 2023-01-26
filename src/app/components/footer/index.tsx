import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from '../logo';
import {
  AboutContainer,
  AboutText,
  BottomContainer,
  CallContainer,
  CopyrightText,
  FooterContainer,
  HeaderTitle,
  HorizontalContainer,
  InnerContainer,
  LinksList,
  ListItem,
  MailContainer,
  RedIcon,
  SectionContainer,
  SmallText,
} from './footer.styled.';

export const Footer: FC = () => {
  return (
    <FooterContainer id='contact'>
      <InnerContainer>
        <AboutContainer>
          <NavLink to='#home' reloadDocument>
            <Logo color='white' bgColor='dark' />
          </NavLink>
          <AboutText>
            Rentalcars is a car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <Link to='#home' reloadDocument>
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link to='#about' reloadDocument>
                About Us
              </Link>
            </ListItem>
            <ListItem>
              <Link to='#services' reloadDocument>
                Services
              </Link>
            </ListItem>
            <ListItem>
              <Link to='#cars' reloadDocument>
                Models
              </Link>
            </ListItem>
            <ListItem>
              <Link to='#blog' reloadDocument>
                Blog
              </Link>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <Link to='/faq'>FAQ</Link>
            </ListItem>
            <ListItem>
              <Link to='#contact' reloadDocument>
                Contact Us
              </Link>
            </ListItem>
            <ListItem>
              <Link to='#support' reloadDocument>
                Support
              </Link>
            </ListItem>
            <ListItem>
              <Link to='/privacy-policy'>Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link to='/terms-and-conditions'>Terms &amp; Conditions</Link>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <CallContainer>
            <HeaderTitle>Call Now</HeaderTitle>
            <HorizontalContainer>
              <RedIcon>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </RedIcon>
              <SmallText>+91 555-434-2581</SmallText>
            </HorizontalContainer>
          </CallContainer>
          <MailContainer>
            <HeaderTitle>Mail</HeaderTitle>
            <HorizontalContainer>
              <RedIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </RedIcon>
              <SmallText>contact@rentalcars.net</SmallText>
            </HorizontalContainer>
          </MailContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Rentalcars. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
};
