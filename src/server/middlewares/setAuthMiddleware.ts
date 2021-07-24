import { AUTH_TOKEN_NAME } from 'api/config';
import { NextFunction, Request, Response } from 'express';
import { login, logout } from 'store/user/userSlice';

export const setAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.cookies[AUTH_TOKEN_NAME] && req.cookies[AUTH_TOKEN_NAME] === '1') {
    res.store.dispatch(login());
  } else {
    res.store.dispatch(logout());
  }
  next();
};
