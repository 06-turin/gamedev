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
import { FormMessageStatus } from 'components/molecules/Form/types';
import { SubmitedProfileData } from './types';

const fields = [
  'display_name',
  'first_name',
  'second_name',
  'email',
  'phone',
];

type FormProfileProps = {
  user: UserResponse
  onSubmit: (data: SubmitedProfileData) => void,
  message?: string,
  messageClass?: FormMessageStatus,
  isLoading?: Boolean
}

export const FormProfile: FC<FormProfileProps> = ({
  onSubmit, user, message, messageClass = FormMessageStatus.default,
}) => {
  const { t } = useTranslation();

  const messageComp = (
    <p
      className={classNames(['form__label', `form__label__${messageClass}`])}
      style={message ? { visibility: 'visible' } : { visibility: 'hidden' }}
    >
      {message || 'hidden'}
    </p>
  );

  const [profile, setProfile] = useState(user);
  useEffect(() => {
    setProfile(user);
  }, [user]);

  const submitButton = (
    <GDButton
      className="form_submit__button"
      title={t('save')}
      styleOption="primary"
      size="m"
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
      {messageComp}
      {submitButton}
    </form>
  );
};
