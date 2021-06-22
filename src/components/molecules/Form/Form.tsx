import './styles.css';
import React, {
  FC, FormEventHandler, useEffect, useState,
} from 'react';
import { GDTextInput, GDTextInputProps } from 'components/atoms/GDTextInput/GDTextInput';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { getFormData } from 'utils/getFormData';
import classNames from 'classnames';
import { FormFields, FormMessageStatus, SubmitFormMethod } from './types';

type FormProps = {
  fields: FormFields,
  className?: string,
  textSubmitButton?: string,
  onSubmit?: SubmitFormMethod<any>,
  message?: string,
  messageClass?: FormMessageStatus
}

export const Form: FC<FormProps> = ({
  fields, className, textSubmitButton, onSubmit, message, messageClass = FormMessageStatus.default,
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

  const messageComp = message ? <span className={classNames(['form__label', `form__label__${messageClass}`])}>{message}</span> : '';

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
      className={classNames(['form', className, isInvalid ? 'is-invalid' : ''])}
      onSubmit={submitHandler}
    >
      {fieldsList}
      {submitButton}
      {messageComp}
    </form>
  );
};
