import React, { useContext } from 'react';
import { GameContext } from 'store/game/provider';

export const Header = () => {
  const {
    state, startGame, stopGame, increaseScore,
  } = useContext(GameContext);

  const increase = () => {
    increaseScore(1);
  };

  return (
    <>
      <div className="">
        <button type="button" onClick={startGame}>Start</button>
        <button type="button" onClick={stopGame}>Stop</button>
        <button type="button" onClick={increase}>Increase</button>
      </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>

    </>
  );
};
