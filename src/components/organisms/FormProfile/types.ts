/* eslint-disable camelcase */
import { UserResponse } from 'api/types';
import { GDTextInputProps } from 'components/atoms/GDTextInput';

export type ProfileFormFields = {
  [Property in keyof UserResponse]?: GDTextInputProps
}

export type SubmitedProfileData = Pick<UserResponse, 'login' | 'first_name' | 'second_name' | 'email' | 'phone' | 'display_name'>
