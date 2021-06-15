import './styles.css';
import React, { FC, MouseEventHandler } from 'react';
import classnames from 'classnames';

type GDButtonProps = {
  title: string
  styleOption: 'primary' | 'secondary'
  onClick: MouseEventHandler<HTMLButtonElement>
  className?: string
  size?: 's' | 'm' | 'l' | 'h',
  isSubmit?: boolean,
}

export const GDButton: FC<GDButtonProps> = ({
  title,
  onClick,
  styleOption,
  className,
  size = 'm',
  isSubmit = false,
}) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
    onClick={onClick}
    className={classnames(['btn', `btn-${styleOption}`, `size_${size}`, className])}
  >
    {title}
  </button>
);
