import React, { FC } from 'react';
import { GDTextInput, GDTextInputProps } from 'components/atoms/GDTextInput/GDTextInput';
import classnames from 'classnames';
import './styles.css';

type FormProps = {
  fields: GDTextInputProps[]
  className?: string
}

export const Form: FC<FormProps> = ({ fields, className }) => (
  <form className={classnames(['form', className])}>
    {fields.map((field) => <GDTextInput id={field.id} title={field.title} />)}
    <label className="form__error-label">validation error !</label>
  </form>
);
