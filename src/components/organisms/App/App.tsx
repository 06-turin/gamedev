import './App.css';
import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Forum } from 'pages/Forum/Forum';
import { Game } from 'pages/Game/Game';
import { LeaderBoard } from 'pages/LeaderBoard/LeaderBoard';
import { Login } from 'pages/Login/Login';
import { Profile } from 'pages/Profile/Profile';
import { Registration } from 'pages/Registration/Registration';
import { Error } from 'pages/Error/Error';
import { LanguageSelector } from 'components/molecules/LanguageSelector/LanguageSelector';
import { Main } from 'pages/Main/Main';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

export const App: FC = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <LanguageSelector />
    </ErrorBoundary>

    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/forum" component={Forum} />
        <Route path="/game" component={Game} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/profile" component={Profile} />
        <Route path="*" component={Error} />
      </Switch>
    </ErrorBoundary>

  </BrowserRouter>
);
