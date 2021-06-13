import { getBattleField } from '../classes/BattleField';
import { GRID, NUM_COLS, NUM_ROWS } from '../config';
import { EntitiesTypes } from '../types/EntitiesTypes';
import { getDrawWalls } from './getDrawWalls';

export const getLoop = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext('2d') as CanvasRenderingContext2D;

  let lastTimestamp: number; // timestamp of the last frame rendering
  let dt: number; // delta lastTimestamp vs now

  const { wallCanvas, softWallCanvas } = getDrawWalls();

  const loop = (timestamp: number) => {
    requestAnimationFrame(loop);

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // calc intervals
    if (!lastTimestamp) lastTimestamp = timestamp;
    dt = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    const BF = getBattleField();
    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLS; col++) {
        const cell = BF.getCell({ x: col, y: row });
        switch (cell) {
          case EntitiesTypes.WALL:
            context.drawImage(wallCanvas, col * GRID, row * GRID);
            break;
          case EntitiesTypes.WALL_SOFT:
            context.drawImage(softWallCanvas, col * GRID, row * GRID);
            break;
          default:
            break;
        }
      }
    }

    // update & render entities
    BF.getEntities().forEach((entity) => {
      entity.refresh(dt);
      entity.render();
    });

    BF.clearEntities();
  };

  return { loop };
};
