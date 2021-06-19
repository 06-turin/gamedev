import './styles.css';
import React, { FC } from 'react';
import classnames from 'classnames';
import { GDBarType } from 'components/organisms/App/types';

export type GDBarProps = {
  title?: string
  type: GDBarType
  className?: string
}

export const GDBar: FC<GDBarProps> = ({
  type,
  className,
  title = '',
  children,
}) => (
  <div className={classnames('bar', `bar-${type}`, className)}>
    {type === 'header' ? <span className="bar__title">{title}</span> : children}
  </div>
);
