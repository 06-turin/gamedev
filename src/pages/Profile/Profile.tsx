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

export type ProfilePageProps = {
  className?: string
}

export const Profile: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const [profile, setProfile] = useState({} as UserResponse);

  const fetchProfile = async () => {
    try {
      const result = await authAPI.getUserInfo();
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

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const pageTitle = t('profile');

  const submitHandler = async (data: SubmitedProfileData) => {
    try {
      await usersAPI.update(data);
      setSuccessMessage(t('updated_successfully'));
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(error.message);
    }
  };

  const backHandler = () => {
    history.goBack();
  };

  return (
    <div className="page">
      <div className="page__header">
        <h1 className="page__title">{pageTitle}</h1>
      </div>
      <FormProfile
        user={profile}
        onSubmit={submitHandler}
        success={successMessage}
        error={errorMessage}
      />
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
