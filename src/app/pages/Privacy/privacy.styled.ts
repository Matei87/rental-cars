import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  display: grid;
  grid-row-gap: 1.5rem;
  padding: 0 0.5rem;
  margin: 8rem auto 4rem;
  width: 1140px;

  h2::before {
    border: none;
  }
`;

export const FirstTitle = styled.h1`
  font-size: 24px;
  color: #080134;
`;
export const SecondTitle = styled.h2`
  font-size: 20px;
`;

export const UnorderedList = styled.ul`
  padding-left: 50px;
  list-style: disc;
`;

export const List = styled.li`
  margin: 0.5rem 0;
  color: #080134;
`;

export const Paragraph = styled.p``;

export const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

export const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    h-full
    items-center
    overflow-x-hidden
`};
`;
