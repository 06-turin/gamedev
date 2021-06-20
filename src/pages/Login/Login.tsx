import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GDLogo } from 'components/atoms/GDLogo';
import { GDButton } from 'components/atoms/GDButton';
import { Form } from 'components/molecules/Form';
import logoImage from 'assets/images/logo_img_base.png';
import { useTranslation } from 'react-i18next';
import { SubmitFormMethod } from 'components/molecules/Form/types';
import { authAPI } from 'api/auth';
import { LoginFormFields } from './types';

const loginFormFields: LoginFormFields = {
  login: { id: 'login', title: 'login' },
  password: { id: 'password', title: 'password', type: 'password' },
};

export const Login: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    if (authAPI.isAuth()) {
      history.replace('/start');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler: SubmitFormMethod<LoginFormFields> = async (data) => {
    try {
      await authAPI.login(data);
      setErrorMessage('');
      // TODO store user
      history.replace('/start');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const formComponent = (
    <Form
      fields={loginFormFields}
      textSubmitButton={t('boom !')}
      onSubmit={submitHandler}
      error={errorMessage}
    />
  );

  const actionComponent = (
    <div className="login-page__signup-container">
      <span className="login-page__text-label">no account ?</span>
      <div className="login-page__link-container">
        <Link to="/registration">
          <GDButton
            className="login-page__link"
            title="register !"
            styleOption="secondary"
            size="l"
          />
        </Link>
        <span className="login-page__text-label">or</span>
        <Link to="/game">
          <GDButton
            className="login-page__link"
            title="just play !"
            styleOption="secondary"
            size="l"
          />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="page login-page">
      <GDLogo logoImage={logoImage} />
      {formComponent}
      {actionComponent}
    </div>
  );
};
