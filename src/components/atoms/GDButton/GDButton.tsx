import './styles.css';
import React, { FC, EventHandler } from 'react';
import classNames from 'classnames';
import { GDButtonStyleOption, GDSizeOption } from 'components/organisms/App/types';

export type GDButtonProps = {
  title: string
  styleOption?: GDButtonStyleOption
  onClick?: EventHandler<any>
  className?: string
  size?: GDSizeOption
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
}

export const GDButton: FC<GDButtonProps> = ({
  title,
  onClick,
  styleOption = 'primary',
  className,
  size = 'm',
  type = 'button',
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={classNames(['btn', `btn-${styleOption}`, `size_${size}`, className])}
  >
    {title}
  </button>
);
