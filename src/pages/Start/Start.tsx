import './styles.css';
import React, { FC } from 'react';
import logoImage from 'assets/images/logo_img_base.png';
import { GDLogo } from 'components/atoms/GDLogo/GDLogo';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Menu } from 'components/molecules/Menu/Menu';
import { useHistory } from 'react-router-dom';
import { DefaultPageProps } from 'components/organisms/App/types';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

export type StartPageProps = DefaultPageProps;

export const Start: FC<StartPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const onPlayClickHandler = () => history.push('/game');

  const items = [
    { title: 'settings', onClick: () => null },
    { title: 'profile', onClick: () => null },
    { title: 'leaderboard', onClick: () => null },
    { title: 'forum', onClick: () => null },
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
        onClick={() => null}
      />
    </div>
  );
};
