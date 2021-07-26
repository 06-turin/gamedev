import { NextFunction, Request, Response } from 'express';
import { toggleTheme } from 'store/user/userSlice';

export const testDispatchMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Переключаем темку, чтобы показать что мы можем поменять стейт экшном на сервере и отправить измененный стейт
  // на клиент, который с ним инициализирует свой стор
  res.store.dispatch(toggleTheme());

  next();
};
