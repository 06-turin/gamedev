import React, { useEffect, useRef } from 'react';
import { getBattleField } from '../core/classes/BattleField';
import { Player } from '../core/classes/Player';
import { getLoop } from '../core/helpers/getLoop';
import './Canvas.css';

const CanvasComponent: React.FC<{}> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef(0);

  useEffect(() => {
    const BF = getBattleField();

    const context = canvasRef.current?.getContext(
      '2d',
    ) as CanvasRenderingContext2D;

    context.fillStyle = 'blue';
    context.fillRect(10, 10, 100, 100);

    BF.init();

    BF.addEntity(new Player(context));

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
      className="canvasContainer"
      width="960"
      height="704"
      id="game"
    />
  );
};

export default React.memo(CanvasComponent);
