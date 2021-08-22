import { randomUUID } from 'crypto';
import { Game } from './Game';

export class Room {
  id: string;

  playersId: string[] = [];

  game: Game;

  isClosed = false;

  constructor() {
    this.id = randomUUID();
    this.game = new Game();
  }

  get size() {
    return this.playersId.length;
  }

  get isFull() {
    return this.size === 2;
  }

  addPlayer(id: string) {
    this.playersId.push(id);
    if (this.isFull) this.isClosed = true;
  }

  removePlayer(id: string) {
    this.playersId = this.playersId.filter((pid) => pid !== id);
    this.game.BF.removePlayer(id);
  }
}
