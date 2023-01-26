import { FC } from 'react';
import { IMarginerProps } from '../../../types';
import { HorizontalMargin, VerticalMargin } from './marginer.styled';

const Marginer: FC<IMarginerProps> = (props: IMarginerProps) => {
  const { direction } = props;

  return (
    <>
      {direction === 'horizontal' ? (
        <HorizontalMargin {...props} />
      ) : (
        <VerticalMargin {...props} />
      )}
    </>
  );
};

Marginer.defaultProps = {
  direction: 'horizontal',
};

export default Marginer;
