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
}) => {
  let content;

  if (type === 'header') {
    content = <span className="bar__title">{title}</span>;
  } else {
    content = children;
  }

  return (
    <div className={classnames('bar', `bar-${type}`, className)}>
      {content}
    </div>
  );
};
