import { UserResponse } from 'api/types';
import { GDTextInputProps } from 'components/atoms/GDTextInput/GDTextInput';

export type TProfileFormFields = {
  [Property in keyof UserResponse]?: GDTextInputProps
}

export type TSubmittedProfileData = Pick<UserResponse, 'first_name' | 'second_name' | 'email' | 'phone' | 'display_name'>
