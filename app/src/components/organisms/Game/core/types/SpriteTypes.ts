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

export const FRAMES: Partial<Record<FrameEntities, Frames>> = {
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
