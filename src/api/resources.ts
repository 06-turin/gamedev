import { API_BASE_URL } from 'config';

export const resourcesAPI = {

  getResourceURL(url: string) {
    const temp = url.startsWith('/') ? url : `/${url}`;
    return `${API_BASE_URL}/resources${temp}`;
  },

};
