import styled from 'styled-components';
import { IMarginerProps } from '../../../types';

export const HorizontalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`;

export const VerticalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-height: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`;
