import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GDButton } from 'components/atoms/GDButton/GDButton';

type GameContentContinueProps = {
  onContinue : ()=>void
}
export const GameContentContinue: FC<GameContentContinueProps> = ({ onContinue }) => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('victory')}</p>
      <GDButton
        title={t('continue')}
        size="m"
        onClick={onContinue}
      />
    </>
  );
};
