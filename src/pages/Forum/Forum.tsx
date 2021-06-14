import { GDButton } from 'components/atoms/GDButton';
import React, { FC } from 'react';
import classNames from 'classnames';
import './Forum.css';
import { GDTextInput } from 'components/atoms/GDTextInput';

export const ForumComponent: FC = () => {
  // TODO: Delete showcaseButtonClick when Forum page is ready
  const showcaseButtonClick = (buttonId: number) => () => {
    console.log(`click ${buttonId}`);
  };

  return (
    <div>
      <h1>Forum</h1>

      <div className={classNames('form-container')}>
        <GDTextInput id="login" title="login" placeholder="type your login" />

        <GDButton
          type="button"
          title="submit"
          styleOption="primary"
          onClick={showcaseButtonClick(1)}
        />

        <GDButton
          type="button"
          title="back"
          styleOption="secondary"
          onClick={showcaseButtonClick(2)}
        />
      </div>

    </div>
  );
};
