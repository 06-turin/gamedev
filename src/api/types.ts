import { Method } from 'axios';

export const ERROR_RESPONSE_DATA = 'Invalid response data!';

export type ApiRequestProps = {
  method: Method,
  url: `/${string}`,
  data?: any,
  params?: any,
  authRequired?: Boolean,
  formData?: Boolean
}

export enum ResponseStatus {
  SUCCESS,
  FAILED
}
export type ApiResponse = {
  status: ResponseStatus
  data?: any,
  error?: string | null
}

export type SignInRequest = {
  login: string,
  password: string
}

export type SignInResponse = 'OK'

export type LogOutResponse = 'OK'
