import './styles.css';
import React, {
  ChangeEventHandler, FC, useEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { authAPI } from 'api/auth';
import { useHistory, Link } from 'react-router-dom';
import { UserResponse } from 'api/types';
import { usersAPI } from 'api/users';
import { useApiRequestFactory } from 'utils/api-factory';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import classNames from 'classnames';
import { useMountEffect } from 'utils/useMountEffect';
import { TModalDisplayStatus, TModalType } from 'components/molecules/Modal/types';
import { Modal } from 'components/molecules/Modal/Modal';
import { GDFormikForm } from 'components/molecules/GDFormikForm/GDFormikForm';
import { editProfileFields } from 'pages/ProfileEdit/constants';
import { TProfileFormFields } from 'pages/ProfileEdit/types';
import { TSubmitFormMethod } from 'components/molecules/GDFormikForm/types';
import * as yup from 'yup';

export const ProfileEdit: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const {
    request: getUserInfo, isLoading: isUserLoading,
  } = useApiRequestFactory(authAPI.getUserInfo);
  const {
    request: updateUser, isLoading: isUserUpdating,
  } = useApiRequestFactory(usersAPI.update);
  const {
    request: uploadAvatar, isLoading: isAvatarUploading,
  } = useApiRequestFactory(usersAPI.changeAvatar);

  const isLoading = isUserLoading || isUserUpdating || isAvatarUploading;

  const [profile, setProfile] = useState({} as UserResponse);
  const [modalMessage, setModalMessage] = useState('');
  const [modalDisplay, setModalDisplay] = useState('hidden' as TModalDisplayStatus);
  const [modalType, setModalType] = useState('info' as TModalType);

  const showModal = (message: string, type: TModalType): void => {
    setModalMessage(message);
    setModalType(type);
    setModalDisplay('active');
  };

  const hideModal = () => setModalDisplay('hidden');

  const fetchProfile = async () => {
    try {
      const result = await getUserInfo();
      setProfile(() => result);
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler: TSubmitFormMethod<TProfileFormFields> = async (data) => {
    const requestData = { ...data, login: profile.login };
    try {
      await updateUser(requestData);
      showModal(t('updated_successfully'), 'info');
    } catch (error) {
      showModal(error.message, 'info');
    }
  };

  useMountEffect(() => {
    if (!authAPI.isAuth()) {
      history.replace('/login');
    }
    fetchProfile();
  });

  useEffect(() => {
    if (isLoading) {
      showModal(t('loading...'), 'banner');
    } else {
      hideModal();
    }
  }, [isLoading, t]);

  const formAvatar = useRef<HTMLFormElement>(null);

  const changeAvatarHandler: ChangeEventHandler<HTMLInputElement> = async () => {
    if (formAvatar?.current) {
      const formData = new FormData(formAvatar.current);
      try {
        await uploadAvatar(formData);
        showModal(t('updated_successfully'), 'info');
      } catch (error) {
        showModal(error.message, 'info');
      }
    }
  };

  const phoneRegExp = /^((\+[1-9]{1,4}[\\-]*)|(\([0-9]{2,3}\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[\\-]*[0-9]{3,4}?$/;

  const validationSchema = yup.object().shape({
    email: yup.string()
      .required(t('required'))
      .email(t('invalid_format')),
    first_name: yup.string()
      .typeError(t('letters_only'))
      .required(t('required'))
      .max(25, t('too_long')),
    second_name: yup.string()
      .typeError(t('letters_only'))
      .required(t('required'))
      .max(25, t('too_long')),
    phone: yup.string()
      .required(t('required'))
      .matches(phoneRegExp, t('invalid_format')),
  });

  return (
    <div className="page">
      <Modal
        title={modalMessage}
        display={modalDisplay}
        type={modalType}
        setDisplay={setModalDisplay}
      />
      <div className="page__header">
        <h1 className="page__title">{t('profile')}</h1>
      </div>
      <GDFormikForm
        fields={Object.values(editProfileFields)}
        validationSchema={validationSchema}
        textSubmitButton={t('submit')}
        onSubmit={submitHandler}
      />
      <div className="profile-edit-actions">
        <form ref={formAvatar}>
          <label htmlFor="avatar" className={classNames(['btn', 'btn-secondary', 'size_l', 'profile__upload_avatar__label'])}>
            {t('upload_avatar')}
            <input type="file" name="avatar" id="avatar" onChange={changeAvatarHandler} />
          </label>

          <Link to="/profile-password-edit">
            <GDButton title={t('change_password')} size="l" styleOption="secondary" />
          </Link>
        </form>
      </div>
      <div className="page__footer-buttons">
        <BackButton />
      </div>
    </div>
  );
};
