import {
  GameAction, GameActions, GameState, GameStatus,
} from './types';

export const gameReducer = (state: GameState, action: GameAction) => {
  const prevState = { ...state };

  switch (action.type) {
    case GameActions.GAME_START:
      return {
        ...state,
        status: GameStatus.IN_PROGRESS,
        startedAt: Date.now(),
      };
    case GameActions.GAME_STOP:
      return {
        ...state,
        status: GameStatus.FINISHED,
        startedAt: prevState.startedAt ?? Date.now(),
        finishedAt: Date.now(),
      };
    case GameActions.SCORE_INCREASE:
      return {
        ...state,
        score: prevState.score + action.payload,
      };
    default:
      return { ...state };
  }
};
