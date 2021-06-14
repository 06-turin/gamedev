import { GameContextType } from 'store/game/types';

class GameFlow {
  static instance: GameFlow | null = null;

  ctx: GameContextType

  constructor(gameCtx: GameContextType) {
    this.ctx = gameCtx;
    if (GameFlow.instance) return GameFlow.instance;
    GameFlow.instance = this;
  }
}

export function getGameFlow(gameCtx?: GameContextType): GameFlow {
  if (!GameFlow.instance && gameCtx) {
    GameFlow.instance = new GameFlow(gameCtx);
  }
  return GameFlow.instance as GameFlow;
}
