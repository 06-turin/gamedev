import axios, { AxiosRequestConfig } from 'axios';
import { API_BASE_URL, AUTH_TOKEN_NAME } from 'config';
import { ApiRequestProps, ResponseStatus, ApiResponse } from './types';

const axiosInstance = axios.create({});

export const callApi: (params: ApiRequestProps) => Promise<ApiResponse> = async ({
  method,
  url,
  data,
  params,
  authRequired = false,
  formData = false,
}) => {
  const authToken = localStorage.getItem(AUTH_TOKEN_NAME) || '';

  const response: ApiResponse = {
    status: ResponseStatus.SUCCESS,
    data: null,
  };

  const requestConfig: AxiosRequestConfig = {
    headers: {},
    method,
    url: `${API_BASE_URL}${url}`,
    withCredentials: true,
    validateStatus(status) {
      if (status < 400) {
        return true;
      }
      if (status === 401) {
        // TODO auth.logout
      }
      return false;
    },
  };

  if (authRequired && authToken) {
    requestConfig.headers.Authorization = `Token ${authToken}`;
  }

  if (formData) {
    requestConfig.headers['Content-Type'] = 'multipart/form-data';
  }

  if (data) {
    requestConfig.data = data;
  }

  if (params) {
    requestConfig.params = params;
  }

  await axiosInstance(requestConfig)
    .then((resp) => {
      if (resp.data) {
        response.data = resp.data;
      }
    })
    .catch((error) => {
      if (error.response?.data?.reason) {
        throw new Error(error.response.data.reason);
      } else {
        throw new Error(error.message);
      }
    });
  return response;
};
