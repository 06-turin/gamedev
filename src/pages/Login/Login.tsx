import './styles.css';
import React, { FC, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GDLogo } from 'components/atoms/GDLogo/GDLogo';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import logoImage from 'assets/images/logo_img_base.png';
import { useTranslation } from 'react-i18next';
import { TSubmitFormMethod } from 'components/molecules/GDFormikForm/types';
import { authAPI } from 'api/auth';
import { useApiRequestFactory } from 'utils/api-factory';
import { useMountEffect } from 'utils/useMountEffect';
import { GDFormikForm } from 'components/molecules/GDFormikForm/GDFormikForm';
import { Modal } from 'components/molecules/Modal/Modal';
import { TModalDisplayStatus } from 'components/molecules/Modal/types';
import * as yup from 'yup';
import { LoginFormFields } from './types';
import { loginFormFields } from './constants';

export const Login: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  useMountEffect(() => {
    if (authAPI.isAuth()) {
      history.replace('/');
    }
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [modalDisplay, setModalDisplay] = useState('hidden' as TModalDisplayStatus);

  const validationSchema = yup.object().shape({
    login: yup.string().required(t('required')),
    password: yup.string().required(t('required')),
  });

  const { request: login } = useApiRequestFactory(authAPI.login);

  const submitHandler: TSubmitFormMethod<LoginFormFields> = async (data) => {
    try {
      await login(data);
      setErrorMessage('');
      // TODO store user
      history.replace('/');
    } catch (error) {
      setErrorMessage(error.message);
      setModalDisplay('active');
    }
  };

  const textNoAccount = t('no_account_?');
  const textRegister = t('register_!');
  const textJustPlay = t('just_play_!');
  const textBoom = `${t('boom')} !`;
  const textOr = t('or');

  const actionComponent = (
    <div className="login-page__signup-container">
      <span className="login-page__text-label">{textNoAccount}</span>
      <div className="login-page__link-container">
        <Link to="/registration">
          <GDButton
            className="login-page__link"
            title={textRegister}
            styleOption="secondary"
            size="l"
          />
        </Link>
        <span className="login-page__text-label">{textOr}</span>
        <Link to="/game">
          <GDButton
            className="login-page__link"
            title={textJustPlay}
            styleOption="secondary"
            size="l"
          />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="page login-page">
      <Modal title={errorMessage} display={modalDisplay} setDisplay={setModalDisplay} />
      <GDLogo logoImage={logoImage} />
      <GDFormikForm
        fields={Object.values(loginFormFields)}
        validationSchema={validationSchema}
        textSubmitButton={textBoom}
        onSubmit={submitHandler}
      />
      {actionComponent}
    </div>
  );
};
