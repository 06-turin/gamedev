import './styles.css';
import React, { FC } from 'react';
import { GDLogo } from 'components/atoms/GDLogo';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Form } from 'components/molecules/Form';
import logoImage from 'assets/images/logo_img_base.png';

const loginFormFields = [
  { id: 'login', title: 'login' },
  { id: 'password', title: 'password' },
];

export const LoginComponent: FC = () => (
  <section className="page login-page">
    <GDLogo logImage={logoImage} />
    <Form fields={loginFormFields} />
    <GDButton className="button" title="boom !" styleOption="primary" size="l" isSubmit onClick={() => null} />
    <div className="container">
      <span className="text-label">no account ?</span>
      <div className="link-container">
        <GDButton className="link" title="register !" styleOption="secondary" size="l" onClick={() => null} />
        <span className="text-label">or</span>
        <GDButton className="link" title="just play !" styleOption="secondary" size="l" onClick={() => null} />
      </div>
    </div>
  </section>
);
