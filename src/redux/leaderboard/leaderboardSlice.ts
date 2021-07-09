import { createSlice } from '@reduxjs/toolkit';

type Leader = {
  displayName: string
  score: number
}

type LeaderboardState = {
  leaderboard: Leader[]
};

const initialState: LeaderboardState = {
  leaderboard: [
    { displayName: 'user1', score: 10000000 },
    { displayName: 'user2', score: 1000000 },
    { displayName: 'user3', score: 100000 },
    { displayName: 'user4', score: 5000 },
    { displayName: 'user5', score: 1000 },
    { displayName: 'user6', score: 500 },
    { displayName: 'user7', score: 0 },
  ],
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    update(state, action) {
      state.leaderboard = action.payload;
    },
  },
});

export const leaderboardReducer = leaderboardSlice.reducer;
