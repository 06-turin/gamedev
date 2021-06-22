/* eslint-disable camelcase */
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

export type SignUpRequest = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}

export type SignUpResponse = {
  id: number
}

export type UserResponse = {
  id: number,
  first_name: string | null,
  second_name: string | null,
  display_name: string | null,
  login: string,
  email: string,
  phone: string,
  avatar: string | null,
}

export type UserRequest = {
  first_name:string | null,
  second_name:string | null,
  display_name:string | null,
  login:string,
  email:string,
  phone:string,
}
