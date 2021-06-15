import React, { FC } from 'react';
import { GDTextInput, GDTextInputProps } from 'components/atoms/GDTextInput/GDTextInput';
import './styles.css';

type FormProps = {
  fields: GDTextInputProps[];
}

export const Form: FC<FormProps> = ({ fields }) => (
  <form className="form">
    {fields.map((field) => <GDTextInput id={field.id} title={field.title} />)}
  </form>
);
