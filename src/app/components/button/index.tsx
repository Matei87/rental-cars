import { FC } from 'react';
import { IButtonProps } from '../../../types';
import { FilledButton, OutlineButton } from './button.styled';
import { NavLink } from 'react-router-dom';

export const Button: FC<IButtonProps> = (props: IButtonProps) => {
  const { theme, text, className } = props;

  return (
    <>
      {theme === 'filled' ? (
        <NavLink to='#home' reloadDocument>
          <FilledButton className={className}>{text}</FilledButton>
        </NavLink>
      ) : (
        <NavLink to='#home' reloadDocument>
          <OutlineButton className={className}>{text}</OutlineButton>
        </NavLink>
      )}
    </>
  );
};
