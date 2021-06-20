import { GDTextInputProps } from 'components/atoms/GDTextInput';

export type FormFields = {
  [key: string]: GDTextInputProps,
}

export type SubmitFormMethod<T> = (data: {[key in keyof T]: string}) => void
