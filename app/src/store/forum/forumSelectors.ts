import { RootState } from 'store/store';

export const selectTopicsList = (state: RootState) => state.forum.topicsList;
export const selectActiveTopicId = (state: RootState) => state.forum.activeTopicId;
export const selectCommentsList = (state: RootState) => state.forum.commentsList;
export const selectActiveTopicTitle = (state: RootState) => state.forum.activeTopicTitle;
export const selectTopicsCount = (state: RootState) => state.forum.topicsCount;
export const selectTopicsPagesCount = (state: RootState) => state.forum.topicsPagesCount;
export const selectActiveTopicsPage = (state: RootState) => state.forum.activeTopicsPage;
