import ImageSRC from '../assets/sprites.png';
import { GRID } from '../config';
import { Position } from '../types/PositionType';

type SpriteCoord = [number, number]

type Sprite = {
  [frame: number]: SpriteCoord
}

type Frames = Partial<Record<FrameActions, Sprite>>

export enum FrameEntities {
  BOMB,
  PLAYER,
}

export enum FrameActions {
  PERMANENT,
  UP,
  RIGHT,
  DOWN,
  LEFT,
  BLOW,
}

const FRAMES: Partial<Record<FrameEntities, Frames>> = {
  [FrameEntities.BOMB]: {
    [FrameActions.PERMANENT]: {
      0: [0, 3],
      1: [1, 3],
      2: [2, 3],
      3: [1, 3],
    },
  },
  [FrameEntities.PLAYER]: {
    [FrameActions.UP]: {
      0: [3, 1],
      1: [4, 1],
      2: [5, 1],
      3: [4, 1],
    },
    [FrameActions.RIGHT]: {
      0: [0, 1],
      1: [1, 1],
      2: [2, 1],
      3: [1, 1],
    },
    [FrameActions.DOWN]: {
      0: [3, 0],
      1: [4, 0],
      2: [5, 0],
      3: [4, 0],
    },
    [FrameActions.LEFT]: {
      0: [0, 0],
      1: [1, 0],
      2: [2, 0],
      3: [1, 0],
    },
    [FrameActions.BLOW]: {
      0: [0, 2],
      1: [1, 2],
      2: [2, 2],
      3: [3, 2],
      4: [4, 2],
      5: [5, 2],
      6: [6, 2],
    },
  },
};

export class Sprites {
  static instance: Sprites | null = null;

  private image: HTMLImageElement | undefined;

  private grid: number = 16;

  constructor() {
    if (Sprites.instance) {
      return Sprites.instance;
    }
    this.image = new Image();

    this.image.src = ImageSRC;

    Sprites.instance = this;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    centerCoords: Position,
    entity: FrameEntities,
    action: FrameActions,
    frame: number,
  ): void {
    if (!this.image) { return; }

    const x = centerCoords.x - 0.5 * GRID;
    const y = centerCoords.y - 0.5 * GRID;
    ctx.clearRect(x, y, GRID, GRID);

    const sprite = { x: 10, y: 0 };

    const entityFrames = FRAMES[entity];
    if (entityFrames && entityFrames[action]) {
      const targetAction = entityFrames[action];
      if (targetAction) {
        const [sx, sy] = targetAction[frame];
        sprite.x = sx;
        sprite.y = sy;
      }
    }

    ctx.drawImage(
      this.image,
      sprite.x * this.grid + 1,
      sprite.y * this.grid + 1,
      this.grid - 2,
      this.grid - 1,
      x,
      y,
      GRID,
      GRID,
    );
  }
}

export function getSpritesInstance(): Sprites {
  if (!Sprites.instance) {
    Sprites.instance = new Sprites();
  }
  return Sprites.instance as Sprites;
}
