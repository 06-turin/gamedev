import { RootState } from 'client';

export const selectIsLoadingShown = (state: RootState) => state.requestStatus.isLoadingShown;
