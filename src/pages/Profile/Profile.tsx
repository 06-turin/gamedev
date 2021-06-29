import './styles.css';
import React, { FC, useMemo } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import avatarDummy from 'assets/images/logo_img_base.png';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { useHistory } from 'react-router-dom';
import { authAPI } from 'api/auth';
import { resourcesAPI } from 'api/resources';
import { useMountEffect } from 'utils/useMountEffect';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/user/userSlice';
import { getUserInfoAsync } from 'redux/user/thunks';

export type ProfilePageProps = {
  className?: string
}

export const Profile: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();

  const userInfo = useSelector(selectUserInfo);

  useMountEffect(() => {
    if (!authAPI.isAuth()) {
      history.replace('/login');
    }

    dispatch(getUserInfoAsync());
  });

  const avatarSrc = useMemo(() => (
    userInfo.avatar ? resourcesAPI.getResourceURL(userInfo.avatar) : avatarDummy
  ), [userInfo]);

  return (
    <div className={classnames(['page', className])}>
      <h1 className="page__title">{t('profile')}</h1>

      <div className="page__content">
        <div className="profile-page__info">
          <div className="profile-page__avatar-container">
            <img className="profile-page__avatar" src={avatarSrc} alt={t('avatar')} />
          </div>
          <div className="profile-page__info-container">
            <span className="profile-page__nick-name">{userInfo.login}</span>
            <span className="profile-page__name">{userInfo.first_name}</span>
            <span className="profile-page__last-name">{userInfo.second_name}</span>
            <span className="profile-page__phone">{userInfo.phone}</span>
            <span className="profile-page__email">{userInfo.email}</span>
          </div>
        </div>

        <GDButton title={t('edit')} styleOption="primary" onClick={() => history.push('/profile-edit')} />
      </div>

      <div className="page__footer-buttons">
        <BackButton />
      </div>
    </div>
  );
};
