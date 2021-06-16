import React, { useContext, useEffect, useRef } from 'react';
import { GameContext } from 'store/game/context';
import { getBattleField } from '../core/classes/BattleField';
import { getGameFlow } from '../core/classes/GameFlow';
import { Player } from '../core/classes/Player';
import { getLoop } from '../core/helpers/getLoop';

export const Canvas: FC = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef(0);

  const gameCtx = useContext(GameContext);
  const GF = getGameFlow(gameCtx);

  useEffect(() => {
    const BF = getBattleField();

    const context = canvasRef.current?.getContext(
      '2d',
    ) as CanvasRenderingContext2D;

    context.fillStyle = 'blue';
    context.fillRect(10, 10, 100, 100);

    BF.init();

    BF.addEntity(new Player(context));

    GF.ctx.startGame();

    if (canvasRef.current) {
      const { loop } = getLoop(canvasRef.current, requestRef);
      requestRef.current = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="canvas-container"
      width="960"
      height="704"
      id="game"
    />
  );
});
