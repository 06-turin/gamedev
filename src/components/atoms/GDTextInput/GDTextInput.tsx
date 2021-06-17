import './styles.css';
import React, { ChangeEventHandler, FC, FocusEventHandler } from 'react';
import classnames from 'classnames';

export type GDTextInputProps = {
  id: string
  title: string
  name?: string
  type?: string
  className?: string
  placeholder?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
}

export const GDTextInput: FC<GDTextInputProps> = ({
  className, placeholder, title, id, name, type, value, onChange, onBlur,
}) => {
  const titleString = `${title}:`;
  return (
    <label htmlFor={id} className={classnames('input-label')}>
      {titleString}
      <input
        placeholder={placeholder}
        className={classnames(['input-field_standard', className])}
        type={type}
        id={id}
        name={name || title}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </label>
  );
};
