import './App.css';
import React, { FC } from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import classNames from 'classnames';
import { ErrorBoundary } from 'components/organisms/ErrorBoundary/ErrorBoundary';
import { useSelector } from 'react-redux';
import { selectTheme } from 'store/user/userSelectors';
import { LoadingIndicator } from 'components/atoms/LoadingIndicator/LoadingIndicator';
import { routes, RouteType } from 'routes';
import { NavHeader } from '../NavHeader/NavHeader';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

const CustomRoute: FC<Omit<RouteType, 'fetchData'>> = ({ privateRoute, ...routeProps }) => (
  <ErrorBoundary>
    {
      privateRoute
        ? <PrivateRoute key={routeProps.path} {...routeProps} {...privateRoute} />
        : <Route key={routeProps.path} {...routeProps} />
    }
  </ErrorBoundary>
);

export const App: FC = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={classNames(['app-container', `theme_${theme}`])}>
      <ErrorBoundary>
        <NavHeader />
      </ErrorBoundary>
      <Switch>
        {// eslint-disable-next-line @typescript-eslint/no-unused-vars
          routes.map(({ fetchData, ...routeProps }) => <CustomRoute key={routeProps.path} {...routeProps} />)
        }
      </Switch>
      <LoadingIndicator />
    </div>
  );
};
