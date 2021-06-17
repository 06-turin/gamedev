import React, { FC } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { DefaultPageProps } from 'components/organisms/App/types';
import { GDBar } from 'components/atoms/GDBar/GDBar';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Form } from 'components/molecules/Form/Form';

export type ProfilePasswordEditPageProps = DefaultPageProps;

const editProfilePasswordFields = [
  { id: 'password', title: 'password', type: 'password' },
  { id: 'password', title: 'new_password', type: 'password' },
  { id: 'verify_password', title: 'repeat', type: 'password' },
];

export const ProfilePasswordEdit: FC<ProfilePasswordEditPageProps> = ({ className }) => {
  const { t } = useTranslation();

  editProfilePasswordFields.forEach((field) => {
    field.title = t(field.title);
  });

  return (
    <div className={classnames(['page', className])}>
      <GDBar type="header" title={t('password_edit')} />

      <div className="page__content">
        <Form fields={editProfilePasswordFields} />
        <GDButton title={t('submit')} styleOption="primary" onClick={() => null} />
      </div>

      <GDBar type="footer">
        <BackButton />
      </GDBar>
    </div>
  );
};
