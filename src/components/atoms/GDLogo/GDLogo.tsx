import React, { FC } from 'react';
import logoImage from 'assets/images/logo_img_base.png';
import './styles.css';

export const GDLogo: FC = () => (
  <div className="logo">
    <span className="logo__text logo__text_big">
      B
      <img className="logo__image" src={logoImage} alt="logo" />
      MB
    </span>
    <span className="logo__text logo__text_small">ATTACK</span>
  </div>
);
