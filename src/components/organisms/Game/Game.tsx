import React, { FC } from 'react';

import { GameHeader } from './GameHeader/GameHeader';
import { GameContent } from './GameContent/GameContent';
import { GameFooter } from './GameFooter/GameFooter';
import { useObservable } from './core/hooks/useObservable';
import { gameService } from './services/gameService';

export const Game: FC = () => {
  const status = useObservable(gameService.status);
  const score = useObservable(gameService.score);
  const timer = useObservable(gameService.timer);
  const bombs = useObservable(gameService.bombs);

  return (
    <div className="game-container">
      <GameHeader score={score} timer={timer} bombs={bombs} />
      <GameContent gameStatus={status} />
      <GameFooter />
    </div>
  );
};
