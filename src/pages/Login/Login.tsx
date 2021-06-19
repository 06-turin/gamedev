import './styles.css';
import React, { FC } from 'react';
import { GDLogo } from 'components/atoms/GDLogo/GDLogo';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Form } from 'components/molecules/Form/Form';
import logoImage from 'assets/images/logo_img_base.png';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const loginFormFields = [
  { id: 'login', title: 'login' },
  { id: 'password', title: 'password' },
];

export const Login: FC<{className?: string}> = ({ className }) => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div className={classnames(['page', 'login-page', className])}>
      <GDLogo logoImage={logoImage} />
      <Form fields={loginFormFields} />
      <GDButton
        title={`${t('boom')} !`}
        styleOption="primary"
        size="l"
        type="submit"
        onClick={() => history.push('/main')}
      />
      <div className="login-page__signup-container">
        <span className="login-page__text-label">no account ?</span>
        <div className="login-page__link-container">
          <GDButton
            className="login-page__link"
            title={`${t('register')} !`}
            styleOption="secondary"
            size="l"
            onClick={() => history.push('/registration')}
          />
          <span className="login-page__text-label">{t('or')}</span>
          <GDButton
            className="login-page__link"
            title={`${t('just_play')} !`}
            styleOption="secondary"
            size="l"
            onClick={() => history.push('/main')}
          />
        </div>
      </div>
    </div>
  );
};
