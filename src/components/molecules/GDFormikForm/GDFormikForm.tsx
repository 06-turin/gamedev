import './styles.css';
import React, { FC, useState } from 'react';
import { Formik, FormikValues } from 'formik';
import { GDTextInput } from 'components/atoms/GDTextInput/GDTextInput';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import * as yup from 'yup';
import classnames from 'classnames';
import { GDFormikFormFields, SubmitFormMethod } from './types';

type GDFormikFormProps = {
  fields: GDFormikFormFields,
  validationSchema?: yup.ObjectSchema<any>
  textSubmitButton?: string,
  onSubmit: SubmitFormMethod<any>,
}

export const GDFormikForm: FC<GDFormikFormProps> = ({
  fields,
  textSubmitButton = 'submit',
  onSubmit,
}) => {
  const initialValues = fields.reduce((values: FormikValues, field) => {
    values[field.id] = field.value;
    return values;
  }, {});

  const [activeInputID, setActiveInputID] = useState('');

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={onSubmit}
      validationSchema={null}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
      }) => (
        <form className={classnames('form')}>
          {fields.map(({
            id,
            name,
            title,
            type,
            placeholder,
            className,
          }) => (
            <GDTextInput
              id={id}
              name={name}
              title={title}
              type={type}
              placeholder={placeholder}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={className}
              isInvalid={!!(touched[id] && errors[id])}
              onFocus={(event) => setActiveInputID(event.target.id)}
            />
          ))}
          <p className="form__error-label">{touched[activeInputID] && errors[activeInputID]}</p>
          <GDButton
            className="form__submit-button"
            title={textSubmitButton}
            styleOption="primary"
            size="l"
            type="submit"
            onClick={handleSubmit}
            disabled={!isValid}
          />
        </form>
      )}
    </Formik>
  );
};
