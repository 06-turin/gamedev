import './styles.css';
import React, { FC, useEffect, useState } from 'react';
import { GDButton } from 'components/atoms/GDButton';
import { useTranslation } from 'react-i18next';
import { authAPI } from 'api/auth';
import { useHistory } from 'react-router-dom';
import { UserResponse } from 'api/types';
import { FormProfile } from 'components/organisms/FormProfile/FormProfile';
import { usersAPI } from 'api/users';
import { SubmitedProfileData } from 'components/organisms/FormProfile/types';
import { useApiRequestFactory } from 'utils/api-factory';
import { FormMessageStatus } from 'components/molecules/Form/types';
import classNames from 'classnames';

export type ProfilePageProps = {
  className?: string
}

export const Profile: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const [profile, setProfile] = useState({} as UserResponse);

  const { request: getUserInfo, isLoading } = useApiRequestFactory(authAPI.getUserInfo);
  const { request: updateUser, isLoading: isUpdating } = useApiRequestFactory(usersAPI.update);

  const fetchProfile = async () => {
    try {
      const result = await getUserInfo();
      setProfile(() => result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!authAPI.isAuth()) {
      history.replace('/start');
    }
    fetchProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formMessage, setFormMessage] = useState('');
  const [formMessageStatus, setFormMessageStatus] = useState(FormMessageStatus.default);

  const pageTitle = t('profile');

  const submitHandler = async (data: SubmitedProfileData) => {
    setFormMessage('');
    try {
      await updateUser(data);
      setFormMessage(t('updated_successfully'));
      setFormMessageStatus(FormMessageStatus.success);
    } catch (error) {
      setFormMessage(error.message);
      setFormMessageStatus(FormMessageStatus.error);
    }
  };

  const backHandler = () => {
    history.goBack();
  };

  const loader = isLoading || isUpdating ? <span className={classNames(['form__label', 'form__label__warning'])}>{t('loading...')}</span> : '';

  return (
    <div className="page">
      <div className="page__header">
        <h1 className="page__title">{pageTitle}</h1>
      </div>
      <FormProfile
        user={profile}
        onSubmit={submitHandler}
        message={formMessage}
        messageClass={formMessageStatus}
      />
      {loader}
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
