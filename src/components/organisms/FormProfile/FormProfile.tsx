import './styles.css';
import React, {
  ChangeEventHandler,
  FC, FormEventHandler, useEffect, useState,
} from 'react';
import { UserResponse } from 'api/types';
import classNames from 'classnames';
import { GDTextInput } from 'components/atoms/GDTextInput/GDTextInput';
import { useTranslation } from 'react-i18next';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { getFormData } from 'utils/getFormData';
import { SubmitedProfileData } from './types';

const fields = [
  'login',
  'email',
  'first_name',
  'second_name',
  'display_name',
  'phone',
];

type FormProfileProps = {
  user: UserResponse
  onSubmit: (data: SubmitedProfileData) => void,
  success?: string,
  error?: string,
}

export const FormProfile: FC<FormProfileProps> = ({
  onSubmit, user, error, success,
}) => {
  const { t } = useTranslation();

  const successMessage = success ? <span className="form__success-label">{success}</span> : '';
  const errorMessage = error ? <span className="form__error-label">{error}</span> : '';

  const [profile, setProfile] = useState(user);
  useEffect(() => {
    setProfile(user);
  }, [user]);

  const submitButton = (
    <GDButton
      className="form_submit__button"
      title={t('save')}
      styleOption="primary"
      size="l"
      type="submit"
    />
  );

  const submitHandler: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    if (onSubmit) {
      const form = new FormData(e.target as HTMLFormElement);
      const formValues = getFormData(form);
      onSubmit(formValues as SubmitedProfileData);
    }
  };

  const changeHandler = (key: string): ChangeEventHandler<HTMLInputElement> => (e) => {
    setProfile(() => ({
      ...profile,
      [key]: e.target.value,
    }));
  };

  const inputList = fields.map((key) => (
    <GDTextInput
      id={key}
      title={t(key)}
      name={key}
      value={profile[key as keyof UserResponse] ?? ''}
      onChange={changeHandler(key)}
      key={key}
    />
  ));

  return (
    <form
      className={classNames(['form', 'profile-form'])}
      onSubmit={submitHandler}
    >
      {inputList}
      {successMessage}
      {errorMessage}
      {submitButton}
    </form>
  );
};
