import './styles.css';
import React, { FC } from 'react';
import classnames from 'classnames';

type GDTextInputProps = {
  id: string
  title: string
  className?: string
  placeholder?: string
}

export const GDTextInput: FC<GDTextInputProps> = ({
  className, placeholder, title, id,
}) => {
  const titleString = `${title}:`;
  return (
    <label htmlFor={id} className={classnames('input-label')}>
      {titleString}
      <input
        placeholder={placeholder}
        className={classnames(['input-field_standard', className])}
        type="text"
        id={id}
        name={title}
      />

    </label>
  );
};
