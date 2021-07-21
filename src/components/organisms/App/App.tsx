import './App.css';
import React, { FC } from 'react';
import {
  BrowserRouter, Route, Switch, MemoryRouter,
} from 'react-router-dom';
import { Forum } from 'pages/Forum/Forum';
import { Game } from 'pages/Game/Game';
import { LeaderBoard } from 'pages/LeaderBoard/LeaderBoard';
import { Login } from 'pages/Login/Login';
import { Profile } from 'pages/Profile/Profile';
import { ProfileEdit } from 'pages/ProfileEdit/ProfileEdit';
import { Registration } from 'pages/Registration/Registration';
import { Error } from 'pages/Error/Error';
import { ProfilePasswordEdit } from 'pages/ProfilePasswordEdit/ProfilePasswordEdit';
import { Topic } from 'pages/Topic/Topic';
import { NewPost } from 'pages/NewPost/NewPost';
import { Main } from 'pages/Main/Main';
import { NavHeader } from 'components/organisms/NavHeader/NavHeader';
import classNames from 'classnames';
import { ErrorBoundary } from 'components/organisms/ErrorBoundary/ErrorBoundary';
import { useSelector } from 'react-redux';
import { selectTheme } from 'store/user/userSelectors';
import { PrivateRoute } from 'components/organisms/PrivateRoute/PrivateRoute';
import { LoadingIndicator } from 'components/atoms/LoadingIndicator/LoadingIndicator';
import isServer from 'utils/server/isServerEnvCheker';

export const App: FC = () => {
  const theme = useSelector(selectTheme);

  const routes = (
    <>
      <ErrorBoundary>
        <NavHeader />
      </ErrorBoundary>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          to="/login"
          component={() => <ErrorBoundary><Main /></ErrorBoundary>}
        />

        <PrivateRoute
          path="/login"
          to="/"
          redirectIfAuth
          component={() => <ErrorBoundary><Login /></ErrorBoundary>}
        />

        <PrivateRoute
          path="/registration"
          to="/"
          redirectIfAuth
          component={() => <ErrorBoundary><Registration /></ErrorBoundary>}
        />

        <Route path="/forum">
          <ErrorBoundary>
            <Forum />
          </ErrorBoundary>
        </Route>

        <Route path="/game">
          <ErrorBoundary>
            <Game />
          </ErrorBoundary>
        </Route>

        <Route path="/leaderboard">
          <ErrorBoundary>
            <LeaderBoard />
          </ErrorBoundary>
        </Route>

        <PrivateRoute
          path="/profile"
          to="/login"
          component={() => <ErrorBoundary><Profile /></ErrorBoundary>}
        />

        <PrivateRoute
          path="/profile-edit"
          to="/login"
          component={() => <ErrorBoundary><ProfileEdit /></ErrorBoundary>}
        />

        <PrivateRoute
          path="/profile-password-edit"
          to="/login"
          component={() => <ErrorBoundary><ProfilePasswordEdit /></ErrorBoundary>}
        />

        <Route path="/topic">
          <ErrorBoundary>
            <Topic />
          </ErrorBoundary>
        </Route>

        <Route path="/new-post">
          <ErrorBoundary>
            <NewPost />
          </ErrorBoundary>
        </Route>

        <Route path="*">
          <ErrorBoundary>
            <Error />
          </ErrorBoundary>
        </Route>
      </Switch>

    </>
  );

  return (
    <div className={classNames(['app-container', `theme_${theme}`])}>
      {isServer && <MemoryRouter>{routes}</MemoryRouter>}
      {!isServer && <BrowserRouter>{routes}</BrowserRouter>}
      <LoadingIndicator />
    </div>
  );
};
