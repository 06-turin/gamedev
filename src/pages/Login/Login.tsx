import './styles.css';
import React, { FC } from 'react';
import { GDLogo } from 'components/atoms/GDLogo/GDLogo';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Form } from 'components/molecules/Form/Form';
import logoImage from 'assets/images/logo_img_base.png';
import { DefaultPageProps } from 'components/organisms/App/types';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

const loginFormFields = [
  { id: 'login', title: 'login' },
  { id: 'password', title: 'password' },
];

export type LoginPageProps = DefaultPageProps;

export const Login: FC<LoginPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classnames(['page', 'login-page', className])}>
      <GDLogo logoImage={logoImage} />
      <Form fields={loginFormFields} />
      <GDButton
        title={`${t('boom')} !`}
        styleOption="primary"
        size="l"
        type="submit"
        onClick={() => null}
      />
      <div className="login-page__signup-container">
        <span className="login-page__text-label">no account ?</span>
        <div className="login-page__link-container">
          <GDButton
            className="login-page__link"
            title={`${t('register')} !`}
            styleOption="secondary"
            size="l"
            onClick={() => null}
          />
          <span className="login-page__text-label">{t('or')}</span>
          <GDButton
            className="login-page__link"
            title={`${t('just_play')} !`}
            styleOption="secondary"
            size="l"
            onClick={() => null}
          />
        </div>
      </div>
    </div>
  );
};
