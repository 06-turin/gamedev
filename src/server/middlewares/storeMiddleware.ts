import url from 'url';
import { NextFunction, Request, Response } from 'express';
import { configureStore } from '@reduxjs/toolkit';
import { createMemoryHistory } from 'history';
import { createRootReducer } from 'store/store';
import { routes } from 'routes';
import { matchPath } from 'react-router';

export const storeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const location = req.url;

  const history = createMemoryHistory({ initialEntries: ['/'] });

  // Не импортируем стор из store напрямую тк нам надо создавать его заново для каждого рендера на сервере
  // чтобы при перезагрузке страницы корректно перезагружался стор
  res.store = configureStore({
    reducer: createRootReducer(history),
  });

  const dataRequirements: (Promise<void> | void)[] = [];

  /**
     * Call the fetchData method on the component-page
     * that corresponds to the current url (by router).
     *
     * We use `some` method to simulate working of the routes in react-router-dom
     * inside the Switch — selects the first found route.
     */
  routes.some((route) => {
    const { fetchData: fetchMethod } = route;
    const match = matchPath<{ slug: string }>(
        url.parse(location).pathname as string,
        route,
    );

    if (match && fetchMethod) {
      dataRequirements.push(
        fetchMethod({
          dispatch: res.store.dispatch,
          match,
        }),
      );
    }

    return Boolean(match);
  });

  // When all async actions will be finished,
  // dispatch action END to close saga
  return Promise.all(dataRequirements)
    .then(() => {
      next();
    })
    .catch((err) => {
      throw err;
    });
};
