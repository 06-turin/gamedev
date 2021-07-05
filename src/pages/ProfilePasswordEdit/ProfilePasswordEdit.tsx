import React, { FC, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import { Form } from 'components/molecules/Form/Form';
import { editProfilePasswordFields } from 'pages/ProfilePasswordEdit/constants';
import { SubmitFormMethod } from 'components/molecules/Form/types';
import { ChangePasswordRequest } from 'api/types';
import { useBoundAction } from 'hooks/useBoundAction';
import { changePasswordAsync } from 'redux/user/userActions';
import { useSelector } from 'react-redux';
import { getUserState, userActions } from 'redux/user/userSlice';
import { useFormMessages } from 'hooks/useFormMessages';
import { useModal } from 'components/molecules/Modal/useModal';
import { Modal } from 'components/molecules/Modal/Modal';
import { PasswordFormFields } from './types';

export type ProfilePasswordPageProps = {
  className?: string
}

export const ProfilePasswordEdit: FC<ProfilePasswordPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const modal = useModal();

  const { message, status, buildMessage } = useFormMessages();

  const changePassAsyncBounded = useBoundAction(changePasswordAsync);
  const clearRequestBounded = useBoundAction(userActions.clearRequestState);

  const { isLoading, isUpdatedSuccessful, error } = useSelector(getUserState);

  const submitHandler: SubmitFormMethod<PasswordFormFields> = async (data) => {
    const requestData: ChangePasswordRequest = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };

    changePassAsyncBounded(requestData);
  };

  useMemo(() => {
    if (isUpdatedSuccessful) {
      modal.show(t('updated_successfully'));
    } else if (isLoading) {
      modal.show(t('loading...'), 'banner');
    } else if (error) {
      modal.show(error.message ?? '');
    } else {
      modal.hide();
    }
  }, [isUpdatedSuccessful, error, isLoading, buildMessage, t]);

  useEffect(() => () => { clearRequestBounded(); }, [clearRequestBounded]);

  const formComponent = (
    <Form
      fields={editProfilePasswordFields}
      textSubmitButton={t('boom !')}
      onSubmit={submitHandler}
      message={message}
      messageClass={status}
    />
  );

  return (
    <div className={classnames(['page', className])}>
      <Modal {...modal.bind} />

      <h1 className="page__title">{t('password_edit')}</h1>

      <div className="page__content">
        {formComponent}
      </div>

      <div className="page__footer-buttons">
        <BackButton />
      </div>
    </div>
  );
};
