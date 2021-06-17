import './styles.css';
import React, { FC } from 'react';
import logoImage from 'assets/images/logo_img_base.png';
import { GDLogo } from 'components/atoms/GDLogo';
import { GDButton } from 'components/atoms/GDButton';

export const Start: FC = () => (
  <section className="page start-page">
    <GDLogo logImage={logoImage} />
    <GDButton className="main-font-family play-button" title="play !" size="h" styleOption="secondary" onClick={() => null} />
    <div className="menu__container">
      <GDButton className="menu__item" title="settings" styleOption="secondary" size="l" onClick={() => null} />
      <GDButton className="menu__item" title="profile" styleOption="secondary" size="l" onClick={() => null} />
      <GDButton className="menu__item" title="leaderboard" styleOption="secondary" size="l" onClick={() => null} />
      <GDButton className="menu__item" title="forum" styleOption="secondary" size="l" onClick={() => null} />
    </div>
    <GDButton className="main-font-family" title="logout" styleOption="secondary" size="l" onClick={() => null} />
  </section>
);
