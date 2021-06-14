import { SOFT_WALL_PROBABILITY } from '../config';
import { EntitiesTypes } from '../types/EntitiesTypes';
import { Bomb } from './Bomb';
import { Explosion } from './Explosion';
import { Player } from './Player';
import { Position } from '../types/PositionType';
import { IEntity } from '../interfaces/IEntity';

const template = [
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  ['W', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'W'],
  ['W', 'x', 'W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', 'x', 'W'],
  ['W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'W'],
  ['W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W'],
  ['W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W'],
  ['W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W'],
  ['W', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W'],
  ['W', 'x', 'W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', ' ', 'W', 'x', 'W'],
  ['W', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'W'],
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
];

/**
 * Singleton
 */
class BattleField {
  static instance: BattleField | null = null;

  private isInitialized: Boolean = false;

  private cells: EntitiesTypes[][] = [];

  // Entities on field for handling
  private entities: IEntity[] = [];

  constructor() {
    if (BattleField.instance) return BattleField.instance;
    BattleField.instance = this;
  }

  init() {
    this.generateLevel();
    this.isInitialized = true;
  }

  private generateLevel(): void {
    const cells: EntitiesTypes[][] = [];

    template.forEach((row, rIdx) => {
      cells[rIdx] = [];

      row.forEach((cell, cIdx) => {
        if (
          cell === EntitiesTypes.EMPTY
          && Math.random() < SOFT_WALL_PROBABILITY
        ) {
          cells[rIdx][cIdx] = EntitiesTypes.WALL_SOFT;
        } else
        if (cell === EntitiesTypes.EMPTY_REQUIRED) {
          cells[rIdx][cIdx] = EntitiesTypes.EMPTY;
        } else
        if (cell === EntitiesTypes.WALL) {
          cells[rIdx][cIdx] = EntitiesTypes.WALL;
        }
      });
    });

    this.cells = cells;
  }

  private checkIfInitialized() {
    if (!this.isInitialized || this.cells.length === 0) { throw new Error('The BattleField is not initialized'); }
  }

  getCell(position: Position): EntitiesTypes {
    this.checkIfInitialized();
    return this.cells[position.y][position.x];
  }

  setCell(position: Position, instance: EntitiesTypes): void {
    this.checkIfInitialized();
    this.cells[position.y][position.x] = instance;
  }

  isCellEmpty(position: Position): Boolean {
    this.checkIfInitialized();
    const cell = this.getCell(position);
    return typeof cell === 'undefined' || cell === EntitiesTypes.EMPTY;
  }

  clearCell(position: Position) {
    this.checkIfInitialized();
    this.setCell(position, EntitiesTypes.EMPTY);
  }

  getEntities(): IEntity[] {
    return this.entities;
  }

  addEntity(entity: IEntity) {
    this.entities.push(entity);
  }

  findEntity(
    type: EntitiesTypes.EXPLOSION,
    position: Position
  ): Explosion | null;
  findEntity(type: EntitiesTypes.BOMB, position: Position): Bomb | null;
  findEntity(type: EntitiesTypes.PLAYER, position: Position): Player | null;
  findEntity(type: EntitiesTypes, position: Position): IEntity | null {
    return (
      this.entities.find((entity) => (
        entity.type === type
          && entity.pos.x === position.x
          && entity.pos.y === position.y
      )) ?? null
    );
  }

  findBombs(owner?: Player): Bomb[] {
    const bombs = this.entities.filter((entity) => entity.type === EntitiesTypes.BOMB) as Bomb[];
    return !owner ? bombs : bombs.filter((bomb) => bomb.owner === owner);
  }

  clearEntities(): void {
    this.entities = this.entities.filter((entity) => entity.alive);
  }

  destroy() {
    this.cells = [];
    this.isInitialized = false;
  }
}

export function getBattleField(): BattleField {
  if (!BattleField.instance) {
    BattleField.instance = new BattleField();
  }
  return BattleField.instance as BattleField;
}
