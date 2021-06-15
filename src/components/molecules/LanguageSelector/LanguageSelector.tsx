import React, { FC } from 'react';

export const LanguageSelector: FC = () => {
  const changeLanguage = (lang: 'en' | 'ru') => () => {
    // eslint-disable-next-line no-console
    console.log(lang);
  };

  return (
    <div>
      <button type="button" onClick={changeLanguage('en')}>
        <span>en</span>
      </button>

      <button type="button" onClick={changeLanguage('ru')}>
        <span>ru</span>
      </button>
    </div>
  );
};
