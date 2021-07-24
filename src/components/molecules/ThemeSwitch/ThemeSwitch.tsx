import './styles.css';
import React, { FC } from 'react';
import classNames from 'classnames';
import { useBoundAction } from 'hooks/useBoundAction';
import { toggleTheme } from 'store/user/userSlice';
import { selectTheme } from 'store/user/userSelectors';
import { useSelector } from 'react-redux';

export const ThemeSwitch: FC = () => {
  const toggleThemeBounded = useBoundAction(toggleTheme);

  const theme = useSelector(selectTheme);

  return (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classNames('theme-switcher__switch')}>
      <input type="checkbox" onChange={toggleThemeBounded.bind(null, null)} checked={theme === 'light'} />
      <span className={classNames(['theme-switcher__slider', 'theme-switcher__slider_round'])} />
    </label>
  );
};
