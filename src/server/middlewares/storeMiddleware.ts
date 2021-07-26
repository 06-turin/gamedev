import { NextFunction, Request, Response } from 'express';
import { configureStore } from '@reduxjs/toolkit';
import { createMemoryHistory } from 'history';
import { createRootReducer } from 'store/store';

export const storeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const history = createMemoryHistory({ initialEntries: ['/'] });

  // Не импортируем стор из store напрямую тк нам надо создавать его заново для каждого рендера на сервере
  // чтобы при перезагрузке страницы корректно перезагружался стор
  res.store = configureStore({
    reducer: createRootReducer(history),
  });

  next();
};
