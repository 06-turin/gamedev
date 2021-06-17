import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GDButton } from 'components/atoms/GDButton/GDButton';

type GameContentGameOverProps = {
  onStartAgain : ()=>void
}
export const GameContentGameOver: FC<GameContentGameOverProps> = ({ onStartAgain }) => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('game_over')}</p>
      <GDButton
        title={t('play_again')}
        size="m"
        onClick={onStartAgain}
      />
    </>
  );
};
