import React, { FC } from 'react';
import classNames from 'classnames';
import './styles.css';
import { GDTextInputProps } from './types';

export const GDTextInputComponent: FC<GDTextInputProps> = (props) => {
  const {
    className, placeholder, title, id,
  } = props;

  const inputClassName = classNames(['input-field_standard', className]);
  const titleString = `${title}:`;

  return (
    <label htmlFor={id} className={classNames('input-label')}>
      {titleString}
      <input placeholder={placeholder} className={inputClassName} type="text" id={id} name={title} />

    </label>
  );
};
