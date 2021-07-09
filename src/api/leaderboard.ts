import { is } from 'typescript-is';
import {
  ERROR_RESPONSE_DATA,
  AddLeaderRequest,
  AddLeaderResponse,
  GetLeaderboardRequest,
  GetLeaderboardResponse,
} from 'api/types';
import { callApi } from '../utils/api-wrapper';
import { PATHS } from './config';

export const leaderboardAPI = {
  addLeader: async (data: AddLeaderRequest): Promise<AddLeaderResponse> => {
    try {
      const response = await callApi({
        method: 'post',
        url: PATHS.leaderboard.addNewLeader,
        data,
        authRequired: true,
      });

      if (response.data && is<AddLeaderResponse>(response.data)) {
        return response.data;
      }
      throw new Error(ERROR_RESPONSE_DATA);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getLeaderboard: async (data: GetLeaderboardRequest): Promise<GetLeaderboardResponse> => {
    try {
      const response = await callApi({
        method: 'post',
        url: PATHS.leaderboard.getLeaderboard,
        data,
        authRequired: false,
      });

      if (response.data && is<GetLeaderboardResponse>(response.data)) {
        // localStorage.setItem(AUTH_TOKEN_NAME, 'OK');
        return response.data;
      }
      throw new Error(ERROR_RESPONSE_DATA);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
