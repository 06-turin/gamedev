import './styles.css';
import React, { FC, useEffect } from 'react';
import logoImage from 'assets/images/logo_img_base.png';
import { GDLogo } from 'components/atoms/GDLogo/GDLogo';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Menu } from 'components/molecules/Menu/Menu';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { authAPI } from 'api/auth';

export type MainPageProps = {
  className?: string
}

export const Main: FC<MainPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    if (!authAPI.isAuth()) {
      history.replace('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPlayClickHandler = () => history.push('/game');

  const logoutHandler = async () => {
    try {
      await authAPI.logout();
      history.replace('/login');
    } catch (error) {
      console.error('~ error', error);
    }
  };

  const items = [
    { title: 'settings', onClick: () => history.push('/') },
    { title: 'profile', onClick: () => history.push('/profile') },
    { title: 'leaderboard', onClick: () => history.push('/leaderboard') },
    { title: 'forum', onClick: () => history.push('/') },
  ];

  items.forEach((item) => {
    item.title = t(item.title);
  });

  return (
    <div className={classnames(['page', 'start-page', className])}>
      <GDLogo logoImage={logoImage} />
      <GDButton
        title={`${t('play')} !`}
        size="h"
        styleOption="secondary"
        onClick={onPlayClickHandler}
      />
      <Menu
        className="start-page__menu"
        items={items}
        itemsStyleOption="secondary"
        itemsSize="l"
        itemsClassName="start-page__menu-item"
      />
      <GDButton
        title={t('logout')}
        styleOption="secondary"
        size="l"
        onClick={logoutHandler}
      />
    </div>
  );
};
