import React, { FC } from 'react';
import classNames from 'classnames';
import { GDButtonProps } from './types';
import './styles.css';

export const GDButtonComponent: FC<GDButtonProps> = (props) => {
  const {
    title, onClick, styleOption, className,
  } = props;

  const buttonClassNames = classNames(['btn', `btn-${styleOption}`, className]);

  return (
    <button type="button" onClick={onClick} className={buttonClassNames}>
      {title}
    </button>
  );
};
