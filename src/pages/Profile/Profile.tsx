import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Profile: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('profile')}</h1>
    </div>
  );
};
