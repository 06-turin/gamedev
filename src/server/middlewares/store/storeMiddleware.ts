import url from 'url';
import { NextFunction, Request, Response } from 'express';
import { matchPath } from 'react-router';
import { routes } from 'routes';
import { getInitialState } from 'store/getInitialState';
import { createStore } from 'store/store';

export const serverStoreMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const location = req.url;

  const initialState = getInitialState();
  res.store = createStore(initialState);

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
      console.log('dispatches are done!');
      next();
    })
    .catch((err) => {
      throw err;
    });
};
