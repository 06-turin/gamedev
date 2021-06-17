import './GameContent.css';
import React, { FC, useMemo } from 'react';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import { useTranslation } from 'react-i18next';
import { gameService, GameStatus } from '../services/gameService';
import { Canvas as CanvasComponent } from '../Canvas/Canvas';
import { GameContentStage } from './GameContentStage';
import { GameContentContinue } from './GameContentContinue';
import { GameContentGameOver } from './GameContentGameOver';

type GameContentProps = {
  gameStatus: GameStatus,
  stage: number
}
export const GameContent: FC<GameContentProps> = ({ gameStatus, stage }) => {
  const { t } = useTranslation();

  const startGameHandler = () => {
    gameService.startGame();
  };

  const nextStageGameHandler = () => {
    gameService.startGame(false);
  };

  const content = useMemo(() => {
    switch (gameStatus) {
      default:
      case GameStatus.NOT_STARTED:
        return <GDButton title={t('start_game')} size="l" onClick={startGameHandler} />;

      case GameStatus.SHOW_STAGE:
        return <GameContentStage stage={stage} />;

      case GameStatus.IN_PROGRESS:
        return <CanvasComponent key={Date.now()} />;

      case GameStatus.STAGE_COMPLETED:
        return <GameContentContinue onContinue={nextStageGameHandler} />;

      case GameStatus.FINISHED:
        return <GameContentGameOver onStartAgain={startGameHandler} />;
    }
  }, [gameStatus, stage, t]);

  return (

    <div className="game-content">
      <div className="content-wrapper">
        {content}
      </div>
    </div>
  );
};
