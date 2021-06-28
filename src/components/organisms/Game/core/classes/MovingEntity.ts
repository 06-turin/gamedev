import { GRID } from '../config';
import { DIRECTIONS, Movements } from '../types/DirectionsType';
import { EntitiesTypes } from '../types/EntitiesTypes';
import { Position } from '../types/PositionType';
import { getBattleField } from './BattleField';

type MovingEntityOptions = {
  speed: number,
  startPosition: Position
}

export abstract class MovingEntity {
  abstract type: EntitiesTypes

  abstract coords: Position

  abstract pos: Position

  startPos: Position

  nextPos: Position

  speed: number;

  direction: Movements = Movements.NONE

  constructor(options: MovingEntityOptions) {
    this.speed = options.speed;
    this.startPos = options.startPosition;
    this.nextPos = options.startPosition;
  }

  move(direction: Movements): void {
    if (!this.isMovingAvailable(direction)) return;

    this.direction = direction;

    this.startMoving();

    setTimeout(() => {
      this.endMoving();
    }, this.speed);
  }

  refresh(dt: number) {
    // if (this.direction === Movements.NONE) return;

    // eslint-disable-next-line no-mixed-operators
    this.coords.x = (this.nextPos.x - this.startPos.x) * GRID / this.speed * dt + this.coords.x;
    // eslint-disable-next-line no-mixed-operators
    this.coords.y = (this.nextPos.y - this.startPos.y) * GRID / this.speed * dt + this.coords.y;
  }

  abstract canvasAnimation: () => void

  render() {
    this.canvasAnimation();
  }

  protected getNextPos(direction: Movements): Position {
    return {
      x: this.pos.x + DIRECTIONS[direction].x,
      y: this.pos.y + DIRECTIONS[direction].y,
    };
  }

  private startMoving() {
    const BF = getBattleField();
    this.startPos = this.pos;
    this.nextPos = this.getNextPos(this.direction);
    BF.setCell(this.nextPos, this.type);
  }

  private endMoving() {
    const BF = getBattleField();
    if (BF.getCell(this.startPos) === this.type) {
      BF.clearCell(this.startPos);
    }
    this.pos = this.nextPos;
    this.startPos = this.nextPos;
    this.direction = Movements.NONE;
    this.coords = {
      x: (this.pos.x + 0.5) * GRID,
      y: (this.pos.y + 0.5) * GRID,
    };
  }

  protected abstract isMovingAvailable: (direction: Movements) => boolean
}
