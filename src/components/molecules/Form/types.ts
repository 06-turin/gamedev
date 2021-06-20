import { GDTextInputProps } from 'components/atoms/GDTextInput';

export type FormFields = {
  [key: string]: GDTextInputProps,
}

export type SubmitDataFn<T> = (data: {[key in keyof T]: string}) => void
