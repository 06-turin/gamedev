import './styles.css';
import React, { FC } from 'react';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Form } from 'components/molecules/Form';

const loginFormFields = [
  { id: 'first_name', title: 'name' },
  { id: 'second_name', title: 'last name' },
  { id: 'email', title: 'e-mail', type: 'email' },
  { id: 'phone', title: 'phone', type: 'tel' },
  { id: 'login', title: 'login' },
  { id: 'password', title: 'password', type: 'password' },
  { id: 'verify_password', title: 'repeat', type: 'password' },
];

export const RegistrationComponent: FC = () => (
  <section className="page">
    <header className="page__header">
      <h1 className="page__title">registration</h1>
    </header>
    <Form className="register-form" fields={loginFormFields} />
    <GDButton className="page__footer-item" title="submit" styleOption="primary" size="l" onClick={() => null} />
    <footer className="page__footer">
      <GDButton className="page__footer-item" title="back" styleOption="secondary" size="l" onClick={() => null} />
    </footer>
  </section>
);
