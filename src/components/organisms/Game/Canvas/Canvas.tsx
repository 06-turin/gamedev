import React, { useContext, useEffect, useRef } from 'react';
import { GameContext } from 'store/game/context';
import { getBattleField } from '../core/classes/BattleField';
import { getGameFlow } from '../core/classes/GameFlow';
import { Player } from '../core/classes/Player';
import { getLoop } from '../core/helpers/getLoop';
import './Canvas.css';

const CanvasComponent: React.FC<{}> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const gameCtx = useContext(GameContext);
  const GF = getGameFlow(gameCtx);

  useEffect(() => {
    const context = canvasRef.current?.getContext(
      '2d',
    ) as CanvasRenderingContext2D;

    context.fillStyle = 'blue';
    context.fillRect(10, 10, 100, 100);

    const BF = getBattleField();
    BF.init();

    BF.addEntity(new Player(context));

    GF.ctx.startGame();

    if (canvasRef.current) {
      const { loop } = getLoop(canvasRef.current);
      requestAnimationFrame(loop);
    }
  }, [GF]);

  return (
    <canvas
      ref={canvasRef}
      className="canvasContainer"
      width="960"
      height="704"
      id="game"
    />
  );
};

export default CanvasComponent;
