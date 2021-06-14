import { Dispatch, DispatchWithoutAction } from 'react';

export enum GameStatus {
    NOT_STARTED = 'NOT_STARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    FINISHED = 'FINISHED'
}

export type GameState = {
  status: GameStatus;
  score: number;
  startedAt?: number;
  finishedAt?: number;
}

export enum GameActions {
    GAME_START = 'GAME_START',
    GAME_STOP = 'GAME_STOP',
    SCORE_INCREASE = 'SCORE_INCREASE'
}

type ActionStartGame = {
    type: GameActions.GAME_START,
    // data: GameStatus
}

type ActionStopGame = {
    type: GameActions.GAME_STOP,
    // data: number
}

type ActionIncreaseScore = {
    type: GameActions.SCORE_INCREASE,
    payload: number
}

export type GameAction = ActionStartGame | ActionStopGame | ActionIncreaseScore

export type GameContextType = {
    state: GameState;
    startGame: DispatchWithoutAction,
    stopGame: DispatchWithoutAction,
    increaseScore: Dispatch<number>,
}
