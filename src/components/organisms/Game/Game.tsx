import './Game.css';
import React from 'react';
import { GameProvider } from 'store/game/provider';

import CanvasComponent from './Canvas/Canvas';
import { Header } from './Header/Header';

export const GameComponent = () => (
  <GameProvider>
    <Header />
    <div className="gameContainer">
      <CanvasComponent />
    </div>
  </GameProvider>

);
