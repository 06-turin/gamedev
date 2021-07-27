import { IS_DEV } from '../../../webpackConfigs/env';

const BASE_URL = IS_DEV
  ? 'https://localhost:8080'
  : 'https://gamedev-ypraktikum.herokuapp.com';

export const REDIRECT_URI_OAUTH = `${BASE_URL}/oauth/`;

export const REDIRECT_URI_SIGNIN = `${BASE_URL}/`;
