import './styles.css';
import React, { FC, useMemo } from 'react';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { SubmitFormMethod } from 'components/molecules/Form/types';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form } from 'components/molecules/Form/Form';
import { useSelector } from 'react-redux';
import { getUserState } from 'redux/user/userSlice';
import { useBoundAction } from 'hooks/useBoundAction';
import { registerAsync } from 'redux/user/userActions';
import { useFormMessages } from 'hooks/useFormMessages';
import { Modal } from 'components/molecules/Modal/Modal';
import { useModal } from 'components/molecules/Modal/useModal';
import { registerFormFields } from './constants';
import { RefistrationFormFields } from './types';

export const Registration: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const modal = useModal();

  const { error, isLoading } = useSelector(getUserState);
  const registerAsyncBounded = useBoundAction(registerAsync);

  const { message, status, buildMessage } = useFormMessages();

  const submitHandler: SubmitFormMethod<RefistrationFormFields> = async (data) => {
    registerAsyncBounded(data);
  };

  useMemo(() => {
    if (isLoading) {
      modal.show(t('loading...'), 'banner');
    } else if (error) {
      modal.show(error.message ?? '');
    } else {
      modal.hide();
    }
  }, [error, isLoading, buildMessage, t]);

  const registerForm = (
    <Form
      className="register-form"
      fields={registerFormFields}
      textSubmitButton={t('submit')}
      onSubmit={submitHandler}
      message={message}
      messageClass={status}
    />
  );

  const pageTitle = t('registration');

  const backHandler = () => {
    history.goBack();
  };
  return (
    <div className="page">
      <Modal {...modal.bind} />
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
