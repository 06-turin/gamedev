import './styles.css';
import React, { FC, useEffect } from 'react';
import logoImage from 'assets/images/logo_img_base.png';
import { GDLogo } from 'components/atoms/GDLogo/GDLogo';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Menu } from 'components/molecules/Menu/Menu';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useBoundAction } from 'hooks/useBoundAction';
import { logoutAsync } from 'redux/user/userActions';
import { useSelector } from 'react-redux';
import { getUserState } from 'redux/user/userSlice';
// import { useMountEffect } from 'hooks/useMountEffect';

export type MainPageProps = {
  className?: string
}

export const Main: FC<MainPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const history = useHistory();

  const logoutAsyncBounded = useBoundAction(logoutAsync);
  const { isAuth } = useSelector(getUserState);

  // useMountEffect(() => {
  //   if (!authAPI.isAuth()) {
  //     history.replace('/login');
  //   }
  // });

  const onPlayClickHandler = () => history.push('/game');

  const logoutHandler = async () => {
    logoutAsyncBounded();
  };

  useEffect(() => {
    if (!isAuth) history.replace('/login');
  }, [isAuth, history]);

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
