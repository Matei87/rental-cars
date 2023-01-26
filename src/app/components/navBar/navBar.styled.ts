import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
`};
`;

export const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
`};

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
  text-white
  text-xl
  mb-3
  focus:text-white
`};
    `};
`;

export const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
`};
`;
