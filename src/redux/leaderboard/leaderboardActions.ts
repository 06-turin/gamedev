import { createAsyncThunk } from '@reduxjs/toolkit';
import { leaderboardAPI } from 'api/leaderboard';
import { AddLeaderRequest, GetLeaderboardRequest } from 'api/types';

export enum LeaderboardActionType {
  getLeaderboard = 'leaderboard/getLeaderboardAsync',
  addLeader = 'leaderboard/addLeaderAsync'
}

export const addLeaderAsync = createAsyncThunk(
  LeaderboardActionType.addLeader,
  async (data: AddLeaderRequest) => {
    const leaderboard = await leaderboardAPI.addLeader(data);
    return leaderboard;
  },
);

export const getLeaderboardAsync = createAsyncThunk(
  LeaderboardActionType.getLeaderboard,
  async (data: GetLeaderboardRequest) => {
    const leaderboard = await leaderboardAPI.getLeaderboard(data);
    return leaderboard;
  },
);
