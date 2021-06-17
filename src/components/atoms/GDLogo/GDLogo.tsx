import './styles.css';
import React, { FC } from 'react';

type GDLogoProps = {
  logImage: string
}

export const GDLogo: FC<GDLogoProps> = ({ logImage }) => (
  <div className="logo">
    <span className="logo__text logo__text_big">
      B
      <img className="logo__image" src={logImage} alt="logo" />
      MB
    </span>
    <span className="logo__text logo__text_small">ATTACK</span>
  </div>
);
