import { GDTextInputProps } from 'components/atoms/GDTextInput/GDTextInput';

export type GDFormikFormFields = GDTextInputProps[]

export type SubmitFormMethod<T> = (data: {[key in keyof T]: string}) => void
