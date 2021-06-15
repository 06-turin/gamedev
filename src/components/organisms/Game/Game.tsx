import './Game.css';
import React from 'react';

import CanvasComponent from './Canvas/Canvas';
import { Header } from './Header/Header';
import { useObservable } from './core/hooks/useObservable';
import { gameService, GameStatus } from './services/gameService';

export const GameComponent = () => {
  const status = useObservable(gameService.status);
  const score = useObservable(gameService.score);
  const timer = useObservable(gameService.timer);

  const startGameHandler = () => {
    gameService.startGame();
  };

  const startBtn = <button type="button" onClick={startGameHandler}>Start Game</button>;

  return (
    <>
      <Header score={score} timer={timer} />
      <div className="gameContainer">
        {status === GameStatus.NOT_STARTED && startBtn}
        {status === GameStatus.IN_PROGRESS && <CanvasComponent />}
        {status === GameStatus.FINISHED
        && (
        <>
          <p style={{ color: 'white' }}>Game over</p>
          <button type="button" onClick={startGameHandler}>Try again</button>
        </>
        )}
      </div>
    </>

  );
};
