import { DIRECTIONS, Movements } from '../types/DirectionsType';
import { EntitiesTypes } from '../types/EntitiesTypes';
import { Position } from '../types/PositionType';
import { getBattleField } from './BattleField';

type MovingEntityOptions = {
  speed: number,
}

export abstract class MovingEntity {
  abstract type: EntitiesTypes

  abstract pos: Position

  abstract nextPos: Position

  speed: number;

  direction: Movements = Movements.NONE

  constructor(options: MovingEntityOptions) {
    this.speed = options.speed;
  }

  move(direction: Movements): void {
    if (!this.isMovingAvailable(direction)) return;

    this.direction = direction;

    this.startMoving();

    this.endMoving();
  }

  protected getNextPos(direction: Movements): Position {
    return {
      x: this.pos.x + DIRECTIONS[direction].x,
      y: this.pos.y + DIRECTIONS[direction].y,
    };
  }

  private startMoving() {
    const BF = getBattleField();
    this.nextPos = this.getNextPos(this.direction);
    BF.setCell(this.nextPos, this.type);
  }

  private endMoving() {
    const BF = getBattleField();
    if (BF.getCell(this.pos) === this.type) {
      BF.clearCell(this.pos);
    }
    this.pos = this.nextPos;
    this.direction = Movements.NONE;
  }

  protected abstract isMovingAvailable: (direction: Movements) => boolean
}
