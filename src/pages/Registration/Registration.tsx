import './styles.css';
import React, { FC, useState } from 'react';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { SubmitFormMethod } from 'components/molecules/GDFormikForm/types';
import { useTranslation } from 'react-i18next';
import { authAPI } from 'api/auth';
import { useHistory } from 'react-router-dom';
import { useApiRequestFactory } from 'utils/api-factory';
import { useMountEffect } from 'utils/useMountEffect';
import { ModalDisplayStatus } from 'components/molecules/Modal/types';
import { Modal } from 'components/molecules/Modal/Modal';
import { GDFormikForm } from 'components/molecules/GDFormikForm/GDFormikForm';
import * as yup from 'yup';
import { registerFormFields } from './constants';
import { RefistrationFormFields } from './types';

export const Registration: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { request: register } = useApiRequestFactory(authAPI.register);

  useMountEffect(() => {
    if (authAPI.isAuth()) {
      history.replace('/');
    }
  });

  const [modalMessage, setModalMessage] = useState('');
  const [modalDisplay, setModalDisplay] = useState('hidden' as ModalDisplayStatus);

  const phoneRegExp = /^((\+[1-9]{1,4}[\\-]*)|(\([0-9]{2,3}\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[\\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object().shape({
    login: yup.string()
      .required(t('required'))
      .min(5, t('too_short'))
      .max(15, t('too_long')),
    email: yup.string()
      .required(t('required'))
      .email(t('invalid_format')),
    first_name: yup.string()
      .typeError(t('letters_only'))
      .required(t('required'))
      .max(25, t('too_long')),
    second_name: yup.string()
      .typeError(t('letters_only'))
      .required(t('required'))
      .max(25, t('too_long')),
    phone: yup.string()
      .required(t('required'))
      .matches(phoneRegExp, t('invalid_format')),
    password: yup.string()
      .required(t('required'))
      .min(8, t('too_short'))
      .max(25, t('too_long')),
    verify_password: yup.string()
      .required(t('required'))
      .oneOf([yup.ref('password')], t('passwords_not_matches'))
      .min(8, t('too_short'))
      .max(25, t('too_long')),
  });

  const submitHandler: SubmitFormMethod<RefistrationFormFields> = async (data) => {
    try {
      const response = await register(data);
      if (response.id) {
        setModalMessage('');
        // TODO store user
        history.replace('/');
      }
    } catch (error) {
      setModalMessage(error.message);
      setModalDisplay('active');
    }
  };

  const pageTitle = t('registration');
  const submitButtonText = t('submit');

  const backHandler = () => {
    history.goBack();
  };
  return (
    <div className="page">
      <Modal title={modalMessage} display={modalDisplay} setDisplay={setModalDisplay} />
      <div className="page__header">
        <h1 className="page__title">{pageTitle}</h1>
      </div>
      <GDFormikForm
        fields={Object.values(registerFormFields)}
        validationSchema={validationSchema}
        textSubmitButton={submitButtonText}
        onSubmit={submitHandler}
      />
      <div className="page__footer">
        <GDButton
          className="page__footer-item"
          title="back"
          styleOption="secondary"
          size="l"
          onClick={backHandler}
        />
      </div>
    </div>
  );
};
