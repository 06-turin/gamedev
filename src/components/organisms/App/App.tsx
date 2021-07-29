import './App.css';
import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import { NavHeader } from 'components/organisms/NavHeader/NavHeader';
import classNames from 'classnames';
import { ErrorBoundary } from 'components/organisms/ErrorBoundary/ErrorBoundary';
import { useSelector } from 'react-redux';
import { selectTheme } from 'store/user/userSelectors';
import { LoadingIndicator } from 'components/atoms/LoadingIndicator/LoadingIndicator';
import { userActions } from 'store/user/userSlice';
import { useBoundAction } from 'hooks/useBoundAction';
import { useMountEffect } from 'hooks/useMountEffect';
import { routes } from 'routes';
import { AppRoute } from '../routes/AppRoute';

export const App: FC = hot(() => {
  const theme = useSelector(selectTheme);

  const setAuthOnLoadTMPBounded = useBoundAction(userActions.setAuthOnLoadTMP);
  useMountEffect(() => {
    setAuthOnLoadTMPBounded();
    const difficultComputationWorker = new Worker('worker.js');
    difficultComputationWorker.postMessage({ a: 1, b: 14 });

    difficultComputationWorker.addEventListener('message', (e) => {
      // eslint-disable-next-line no-console
      console.log('Computation result received in component', e);
    }, false);
  });

  return (
    <div className={classNames(['app-container', `theme_${theme}`])}>
      <ErrorBoundary>
        <NavHeader />
      </ErrorBoundary>
      <Switch>
        {// eslint-disable-next-line @typescript-eslint/no-unused-vars
          routes.map(({ fetchData, ...routeProps }) => <AppRoute key={routeProps.path} {...routeProps} />)
        }
      </Switch>
      <LoadingIndicator />
    </div>
  );
});
