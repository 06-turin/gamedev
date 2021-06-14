import { createContext } from 'react';
import { GameContextType, GameStatus } from './types';

export const GameContext = createContext<GameContextType>({
  state: {
    status: GameStatus.NOT_STARTED,
    score: 0,
  },
  startGame: () => undefined,
  stopGame: () => undefined,
  increaseScore: () => undefined,
});
