import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { GDButton } from 'components/atoms/GDButton';
import { FormMessageStatus, SubmitFormMethod } from 'components/molecules/Form/types';
import { useTranslation } from 'react-i18next';
import { authAPI } from 'api/auth';
import { useHistory } from 'react-router-dom';
import { useApiRequestFactory } from 'utils/api-factory';
import { Form } from 'components/molecules/Form/Form';
import { RefistrationFormFields } from './types';

const registerFormFields: RefistrationFormFields = {
  login: { id: 'login', title: 'login' },
  email: { id: 'email', title: 'e-mail', type: 'email' },
  first_name: { id: 'first_name', title: 'first name' },
  second_name: { id: 'second_name', title: 'last name' },
  phone: { id: 'phone', title: 'phone', type: 'tel' },
  password: { id: 'password', title: 'password', type: 'password' },
  verify_password: { id: 'verify_password', title: 'repeat', type: 'password' },
};

export const Registration: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { request: register } = useApiRequestFactory(authAPI.register);

  useEffect(() => {
    if (authAPI.isAuth()) {
      history.replace('/start');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler: SubmitFormMethod<RefistrationFormFields> = async (data) => {
    try {
      const response = await register(data);
      if (response.id) {
        setErrorMessage('');
        // TODO store user
        history.replace('/start');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const registerForm = (
    <Form
      className="register-form"
      fields={registerFormFields}
      textSubmitButton={t('submit')}
      onSubmit={submitHandler}
      message={errorMessage}
      messageClass={FormMessageStatus.error}
    />
  );

  const pageTitle = t('registration');

  const backHandler = () => {
    history.goBack();
  };
  return (
    <div className="page">
      <div className="page__header">
        <h1 className="page__title">{pageTitle}</h1>
      </div>
      {registerForm}
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
