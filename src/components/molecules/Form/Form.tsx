import './styles.css';
import React, {
  FC, FormEventHandler, useEffect, useState,
} from 'react';
import { GDTextInput, GDTextInputProps } from 'components/atoms/GDTextInput';
import { GDButton } from 'components/atoms/GDButton';
import classnames from 'classnames';
import { FormFields, SubmitFormMethod } from './types';

const getFormData = (formData: FormData) => [...formData.entries()]
  .reduce(
    (obj, pair) => Object.assign(obj, { [pair[0]]: pair[1] }), {},
  );

type FormProps = {
  fields: FormFields,
  className?: string,
  textSubmitButton?: string,
  onSubmit?: SubmitFormMethod<any>,
  error?: string,
}

export const Form: FC<FormProps> = ({
  fields, className, textSubmitButton, onSubmit, error,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);

  // calculate form valid or not
  useEffect(() => {
    setIsInvalid(false);
    Object.values(fields).forEach((field) => {
      if (field.isInvalid) {
        setIsInvalid(true);
      }
    });
  }, [fields]);

  const fieldsList = Object.values(fields)
    .map((props: GDTextInputProps) => (
      <GDTextInput
        {...props}
        name={props.name ?? props.id}
        key={props.id}
      />
    ));

  const errorMessage = error ? <span className="form__error-label">{error}</span> : '';

  const submitButton = textSubmitButton
    ? (
      <GDButton
        className="form_submit__button"
        title={textSubmitButton}
        styleOption="primary"
        size="l"
        type="submit"
      />
    ) : '';

  const submitHandler: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    if (onSubmit) {
      const form = new FormData(e.target as HTMLFormElement);
      const formValues = getFormData(form);
      onSubmit(formValues);
    }
  };

  return (
    <form
      className={classnames(['form', className, isInvalid ? 'is-invalid' : ''])}
      onSubmit={submitHandler}
    >
      {fieldsList}
      {errorMessage}
      {submitButton}
    </form>
  );
};
