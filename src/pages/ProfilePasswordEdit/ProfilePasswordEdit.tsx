import React, { FC, useState } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import { editProfilePasswordFields } from 'pages/ProfilePasswordEdit/constants';
import { TSubmitFormMethod } from 'components/molecules/GDFormikForm/types';
import { useApiRequestFactory } from 'utils/api-factory';
import { usersAPI } from 'api/users';
import { ChangePasswordRequest } from 'api/types';
import { TModalDisplayStatus } from 'components/molecules/Modal/types';
import { GDFormikForm } from 'components/molecules/GDFormikForm/GDFormikForm';
import { Modal } from 'components/molecules/Modal/Modal';
import * as yup from 'yup';
import { PasswordFormFields } from './types';

export type ProfilePasswordPageProps = {
  className?: string
}

export const ProfilePasswordEdit: FC<ProfilePasswordPageProps> = ({ className }) => {
  const { t } = useTranslation();

  const [modalMessage, setModalMessage] = useState('');
  const [modalDisplay, setModalDisplay] = useState('hidden' as TModalDisplayStatus);

  const validationSchema = yup.object().shape({
    password: yup.string()
      .required(t('required'))
      .min(5, t('too_short'))
      .max(15, t('too_long')),
    new_password: yup.string()
      .required(t('required'))
      .min(8, t('too_short'))
      .max(25, t('too_long')),
    repeat: yup.string()
      .required(t('required'))
      .oneOf([yup.ref('new_password')], t('passwords_not_matches'))
      .min(8, t('too_short'))
      .max(25, t('too_long')),
  });

  const { request: updatePassword } = useApiRequestFactory(usersAPI.changePassword);

  const submitHandler: TSubmitFormMethod<PasswordFormFields> = async (data) => {
    // TODO verify data
    const requestData: ChangePasswordRequest = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    };

    try {
      await updatePassword(requestData);
      setModalMessage(t('updated_successfully'));
    } catch (error) {
      setModalMessage(error.message);
    }
  };

  return (
    <div className={classnames(['page', className])}>
      <Modal title={modalMessage} display={modalDisplay} setDisplay={setModalDisplay} />
      <h1 className="page__title">{t('password_edit')}</h1>

      <div className="page__content">
        <GDFormikForm
          fields={Object.values(editProfilePasswordFields)}
          validationSchema={validationSchema}
          textSubmitButton={t('submit')}
          onSubmit={submitHandler}
        />
      </div>

      <div className="page__footer-buttons">
        <BackButton />
      </div>
    </div>
  );
};
