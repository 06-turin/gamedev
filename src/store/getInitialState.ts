import { RootState } from 'client';
import { userInitialState } from './user/userSlice';

export const getInitialState: () => Partial<RootState> = () => {
  const user = { ...userInitialState };
  return { user };
};
