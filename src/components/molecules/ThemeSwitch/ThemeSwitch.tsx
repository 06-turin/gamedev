import './styles.css';
import React, { FC } from 'react';

export const ThemeSwitch: FC = () => {
  const switchTheme = () => {
    const element = document.getElementById('root');
    element?.classList.toggle('alt-theme');
  };

  return (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="switch">
      <input type="checkbox" onClick={switchTheme} />
      <span className="slider round" />
    </label>
  );
};
