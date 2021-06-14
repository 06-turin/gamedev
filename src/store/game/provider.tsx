import React, { useReducer } from 'react';
import { gameReducer } from './reducer';
import {
  GameState, GameStatus, GameAction, GameActions,
} from './types';
import { GameContext } from './context';

const initialGameState: GameState = {
  status: GameStatus.NOT_STARTED,
  score: 0,
};

const GameProvider: React.FC<{}> = ({ children }) => {
  const [
    gameState,
    dispatch,
  ] = useReducer<React.Reducer<GameState, GameAction>>(gameReducer, initialGameState);

  const startGameHandler = () => {
    dispatch({ type: GameActions.GAME_START });
  };
  const stopGameHandler = () => {
    dispatch({ type: GameActions.GAME_STOP });
  };
  const increaseScoreHandler = (payload: number) => {
    dispatch({ type: GameActions.SCORE_INCREASE, payload });
  };

  const gameContext = {
    state: gameState,
    startGame: startGameHandler,
    stopGame: stopGameHandler,
    increaseScore: increaseScoreHandler,
  };
  return (
    <GameContext.Provider value={gameContext}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
