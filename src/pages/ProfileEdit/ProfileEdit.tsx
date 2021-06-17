import React, { FC } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { DefaultPageProps } from 'components/organisms/App/types';
import { GDBar } from 'components/atoms/GDBar/GDBar';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { Form } from 'components/molecules/Form/Form';
import { Menu } from 'components/molecules/Menu/Menu';

export type ProfileEditPageProps = DefaultPageProps;

const editProfileFields = [
  { id: 'first_name', title: 'name' },
  { id: 'second_name', title: 'last_name' },
  { id: 'nick_name', title: 'nickname' },
  { id: 'email', title: 'e-mail', type: 'email' },
  { id: 'phone', title: 'phone', type: 'tel' },
];

const editProfileMenuItems = [
  { title: 'remove_avatar', onClick: () => null },
  { title: 'upload_avatar', onClick: () => null },
  { title: 'change_password', onClick: () => null },
];

export const ProfileEdit: FC<ProfileEditPageProps> = ({ className }) => {
  const { t } = useTranslation();

  editProfileFields.forEach((field) => {
    field.title = t(field.title);
  });

  editProfileMenuItems.forEach((item) => {
    item.title = t(item.title);
  });

  return (
    <div className={classnames(['page', className])}>
      <GDBar type="header" title={t('profile_edit')} />

      <div className="page__content">
        <Form fields={editProfileFields} />
        <Menu items={editProfileMenuItems} itemsStyleOption="secondary" />
        <GDButton title={t('submit')} styleOption="primary" onClick={() => null} />
      </div>

      <GDBar type="footer">
        <BackButton />
      </GDBar>
    </div>
  );
};
