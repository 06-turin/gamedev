import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { GDButton } from 'components/atoms/GDButton';
import { Form } from 'components/molecules/Form';
import { SubmitFormMethod } from 'components/molecules/Form/types';
import { useTranslation } from 'react-i18next';
import { auth } from 'api/auth';
import { useHistory } from 'react-router-dom';
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

  useEffect(() => {
    if (auth.isAuth()) {
      history.replace('/start');
    }
  });

  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler: SubmitFormMethod<RefistrationFormFields> = async (data) => {
    try {
      const response = await auth.register(data);
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
      error={errorMessage}
    />
  );

  const backHandler = () => {
    history.goBack();
  };
  return (
    <div className="page">
      <div className="page__header">
        <h1 className="page__title">registration</h1>
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
