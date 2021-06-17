import './styles.css';
import React, { FC } from 'react';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Form } from 'components/molecules/Form/Form';
import { GDBar } from 'components/atoms/GDBar/GDBar';
import { DefaultPageProps } from 'components/organisms/App/types';
import classnames from 'classnames';

export type RegistrationPageProps = DefaultPageProps;

const loginFormFields = [
  { id: 'first_name', title: 'name' },
  { id: 'second_name', title: 'last name' },
  { id: 'email', title: 'e-mail', type: 'email' },
  { id: 'phone', title: 'phone', type: 'tel' },
  { id: 'login', title: 'login' },
  { id: 'password', title: 'password', type: 'password' },
  { id: 'verify_password', title: 'repeat', type: 'password' },
];

export const Registration: FC<RegistrationPageProps> = ({ className }) => (
  <div className={classnames(['page', className])}>
    <GDBar title="registration" type="header" />
    <Form className="register-form" fields={loginFormFields} />
    <GDButton
      className="page__footer-item"
      title="submit"
      styleOption="primary"
      size="l"
      onClick={() => null}
    />
    <GDBar type="footer">
      <GDButton
        className="page__footer-item"
        title="back"
        styleOption="secondary"
        size="l"
        onClick={() => null}
      />
    </GDBar>
  </div>
);
