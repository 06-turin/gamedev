import './GameContent.css';
import React, { FC, useMemo } from 'react';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { useTranslation } from 'react-i18next';
import { gameService, GameStatus } from '../services/gameService';
import { Canvas as CanvasComponent } from '../Canvas/Canvas';

type GameContentProps = {
  gameStatus: GameStatus,
}
export const GameContent: FC<GameContentProps> = ({ gameStatus }) => {
  const { t } = useTranslation();

  const startGameHandler = () => {
    gameService.startGame();
  };

  const content = useMemo(() => {
    switch (gameStatus) {
      default:
      case GameStatus.NOT_STARTED:
        return <GDButton title={t('start_game')} size="l" onClick={startGameHandler} />;

      case GameStatus.IN_PROGRESS:
        return <CanvasComponent />;

      case GameStatus.FINISHED:
        return (
          <div className="game-over-wrapper">
            <p>Game over</p>
            <GDButton
              title={t('play_again')}
              size="m"
              onClick={startGameHandler}
            />
          </div>
        );
    }
  }, [gameStatus, t]);

  return (
    <div className="game-content">
      {content}
    </div>
  );
};
