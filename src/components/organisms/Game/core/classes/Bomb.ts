import { DEGREE_360, GRID } from '../config';
import { EntitiesTypes } from '../types/EntitiesTypes';
import { DIRECTIONS, DirectionType } from '../types/DirectionsType';
import { IEntity } from '../interfaces/IEntity';
import { Explosion } from './Explosion';
import { getBattleField } from './BattleField';
import { Player } from './Player';
import { Position } from '../types/PositionType';
import { gameService } from '../../services/gameService';

export class Bomb implements IEntity {
  type = EntitiesTypes.BOMB;

  radius = GRID * 0.4;

  alive: Boolean = true;

  timer: number = 3000;

  constructor(
    private canvasCtx: CanvasRenderingContext2D,
    public pos: Position,
    public owner: Player,
    public blownSize: number = 2,
  ) {}

  render() {
    const x = (this.pos.x + 0.5) * GRID;
    const y = (this.pos.y + 0.5) * GRID;

    this.canvasCtx.fillStyle = 'black';
    this.canvasCtx.beginPath();
    this.canvasCtx.arc(x, y, this.radius, 0, DEGREE_360);
    this.canvasCtx.fill();
  }

  refresh(dt: number): void {
    this.timer -= dt;

    // blow up the bomb
    if (this.timer <= 0) {
      this.blowUp();
      return;
    }

    // bomb animation
    // change every 0.5s
    const interval = Math.ceil(this.timer / 500);
    if (interval % 2 === 0) {
      this.radius = GRID * 0.4;
    } else {
      this.radius = GRID * 0.45;
    }
  }

  blowUp(): void {
    if (!this.alive) return;

    this.alive = false;
    this.owner.addBombToPlayer();

    const BF = getBattleField();

    if (
      this.owner.pos.x === this.pos.x
      && this.owner.pos.y === this.pos.y
    ) {
      BF.gameOver(); return;
    }

    BF.clearCell(this.pos);

    // create Explosions per each directions
    DIRECTIONS.forEach((dir: DirectionType) => {
      for (let i = 0; i < this.blownSize; i++) {
        // calculate position
        const pos: Position = {
          x: this.pos.x + dir.x * i,
          y: this.pos.y + dir.y * i,
        };
        const cell = BF.getCell(pos);

        if (cell === EntitiesTypes.WALL) return;

        // create Explosion in cell
        const isCenter = i === 0;
        BF.addEntity(new Explosion(this.canvasCtx, pos, dir, isCenter));

        // clear cell
        BF.clearCell(pos);

        // contact with another bomb
        if (cell === EntitiesTypes.BOMB) {
          const nextBomb = BF.findEntity(EntitiesTypes.BOMB, pos);
          nextBomb?.blowUp();
        }

        if (cell === EntitiesTypes.PLAYER) {
          BF.gameOver(); return;
        }

        if (cell === EntitiesTypes.WALL_SOFT) {
          gameService.increaseScore(1);
        }

        if (cell !== EntitiesTypes.EMPTY
          && cell !== EntitiesTypes.BOMB
          // && cell !== EntitiesTypes.PLAYER
        ) {
          return;
        }
      }
    });
  }
}
