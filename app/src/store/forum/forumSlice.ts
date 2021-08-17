import {
  Comment, GetCommentsResponse, GetTopicsResponse, Topic,
} from 'api/types';
import { createSlice } from '@reduxjs/toolkit';
import {
  getCommentsAsync, getTopicsAsync, setActiveCommentsPage, setActiveTopicId, setActiveTopicsPage, setActiveTopicTitle,
} from 'store/forum/forumActions';

type ForumState = {
  topicsList: Topic[]
  commentsList: Comment[]
  topicsCount: number
  topicsPagesCount: number
  commentsCount: number
  commentsPagesCount: number
  activeTopicId: number | undefined
  activeTopicTitle: string
  activeTopicsPage: number
  activeCommentsPage: number
}

const initialState: ForumState = {
  topicsList: [],
  commentsList: [],
  topicsCount: 0,
  topicsPagesCount: 0,
  commentsCount: 0,
  commentsPagesCount: 0,
  activeCommentsPage: 0,
  activeTopicId: undefined,
  activeTopicTitle: 'undefined title',
  activeTopicsPage: 1,
};

const updateTopicsList = (state: ForumState, payload: GetTopicsResponse) => {
  state.topicsList = payload.results;
  state.topicsCount = payload.totalItems;
  state.topicsPagesCount = payload.totalPages;
};

const updateCommentsList = (state: ForumState, payload: GetCommentsResponse) => {
  state.commentsList = payload.results;
  state.commentsCount = payload.totalItems;
  state.commentsPagesCount = payload.totalPages;
};

const updateActiveTopicId = (state: ForumState, payload: number) => {
  state.activeTopicId = payload;
};

const updateActiveTopicTitle = (state: ForumState, payload: string) => {
  state.activeTopicTitle = payload;
};

const updateActiveTopicPage = (state: ForumState, payload: number) => {
  state.activeTopicsPage = payload;
};

const updateActiveCommentsPage = (state: ForumState, payload: number) => {
  state.activeCommentsPage = payload;
};

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopicsAsync.fulfilled, (state, action) => {
      updateTopicsList(state, action.payload);
    });
    builder.addCase(getCommentsAsync.fulfilled, (state, action) => {
      updateCommentsList(state, action.payload);
    });
    builder.addCase(setActiveTopicId, (state, action) => {
      updateActiveTopicId(state, action.payload);
    });
    builder.addCase(setActiveTopicTitle, (state, action) => {
      updateActiveTopicTitle(state, action.payload);
    });
    builder.addCase(setActiveTopicsPage, (state, action) => {
      updateActiveTopicPage(state, action.payload);
    });
    builder.addCase(setActiveCommentsPage, (state, action) => {
      updateActiveCommentsPage(state, action.payload);
    });
  },
});

export const forumReducer = forumSlice.reducer;
export const forumActions = forumSlice.actions;
