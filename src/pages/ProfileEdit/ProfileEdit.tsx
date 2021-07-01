import './styles.css';
import React, {
  ChangeEventHandler,
  FC, useCallback, useEffect, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, Link } from 'react-router-dom';
import { FormProfile } from 'components/organisms/FormProfile/FormProfile';
import { SubmitedProfileData } from 'components/organisms/FormProfile/types';
import { FormMessageStatus } from 'components/molecules/Form/types';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import classNames from 'classnames';
import { useMountEffect } from 'hooks/useMountEffect';
import { useBoundAction } from 'hooks/useBoundAction';
import { getUserInfoAsync, updateUserAsync } from 'redux/user/userActions';
import { useSelector } from 'react-redux';
import { getUserState, userActions } from 'redux/user/userSlice';
import { useFormMessages } from 'hooks/useFormMessages';

export const ProfileEdit: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const getUserInfoAsyncBounded = useBoundAction(getUserInfoAsync);
  const updateUserInfoBounded = useBoundAction(userActions.update);
  const clearRequestBounded = useBoundAction(userActions.clearRequestState);
  const updateUserInfoAsyncBounded = useBoundAction(updateUserAsync);

  const {
    userInfo: profile, isLoading, isUpdatedSuccessful, error,
  } = useSelector(getUserState);

  useMountEffect(() => {
    getUserInfoAsyncBounded();
  });

  const { message, status, buildMessage } = useFormMessages();

  const submitHandler = async (data: SubmitedProfileData) => {
    const requestData = { ...data, login: profile.login };
    updateUserInfoAsyncBounded(requestData);
  };

  useEffect(() => {
    if (isUpdatedSuccessful) {
      buildMessage(t('updated_successfully'), FormMessageStatus.success);
    } else if (isLoading) {
      buildMessage(t('loading...'), FormMessageStatus.warning);
    } else if (error) {
      buildMessage(error.message ?? '', FormMessageStatus.error);
    } else {
      buildMessage('');
    }
  }, [isUpdatedSuccessful, error, isLoading, history, buildMessage, t]);

  useEffect(() => () => { clearRequestBounded(); }, [clearRequestBounded]);

  const formAvatar = useRef<HTMLFormElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const changeAvatarHandler: ChangeEventHandler<HTMLInputElement> = async () => {};

  const changeInputHandler = useCallback(
    (key: string): ChangeEventHandler<HTMLInputElement> => (e) => {
      const newProfile = {
        ...profile,
        [key]: e.target.value,
      };
      updateUserInfoBounded(newProfile);
    }, [profile, updateUserInfoBounded],
  );

  const pageTitle = t('profile');

  return (
    <div className="page">
      <div className="page__header">
        <h1 className="page__title">{pageTitle}</h1>
      </div>
      <FormProfile
        user={profile}
        onSubmit={submitHandler}
        onChangeInput={changeInputHandler}
        message={message}
        messageClass={status}
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
