import './styles.css';
import React, { FC } from 'react';
import logoImage from 'assets/images/logo_img_base.png';
import { GDLogo } from 'components/atoms/GDLogo/GDLogo';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Menu } from 'components/molecules/Menu/Menu';
import { useHistory } from 'react-router-dom';
import { DefaultPageProps } from 'components/organisms/App/types';
import classnames from 'classnames';

export type StartPageProps = DefaultPageProps;

export const Start: FC<StartPageProps> = ({ className }) => {
  const history = useHistory();
  const onPlayClickHandler = () => history.push('/game');

  const items = [
    { title: 'settings', onClick: () => null },
    { title: 'profile', onClick: () => null },
    { title: 'leaderboard', onClick: () => null },
    { title: 'forum', onClick: () => null },
  ];

  return (
    <div className={classnames(['page', 'start-page', className])}>
      <GDLogo logoImage={logoImage} />
      <GDButton
        className="main-font-family"
        title="play !"
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
        className="main-font-family"
        title="logout"
        styleOption="secondary"
        size="l"
        onClick={() => null}
      />
    </div>
  );
};
