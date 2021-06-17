import './styles.css';
import React, { FC } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { DefaultPageProps } from 'components/organisms/App/types';
import { GDBar } from 'components/atoms/GDBar/GDBar';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import avatarDummy from 'assets/images/logo_img_base.png';
import { GDButton } from 'components/atoms/GDButton/GDButton';

export type ProfilePageProps = DefaultPageProps;

export const Profile: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classnames(['page', className])}>
      <GDBar type="header" title={t('profile')} />

      <div className="page__content">
        <div className="profile-page__info">
          <div className="profile-page__avatar-container">
            <img className="profile-page__avatar" src={avatarDummy} alt={t('avatar')} />
          </div>
          <div className="profile-page__info-container">
            <span className="profile-page__nick-name">nick</span>
            <span className="profile-page__name">name</span>
            <span className="profile-page__last-name">last-name</span>
            <span className="profile-page__phone">1-234-567-890</span>
            <span className="profile-page__email">e-mail@mail.com</span>
          </div>
        </div>

        <GDButton title={t('edit')} styleOption="primary" onClick={() => null} />
      </div>

      <GDBar type="footer">
        <BackButton />
      </GDBar>
    </div>
  );
};
