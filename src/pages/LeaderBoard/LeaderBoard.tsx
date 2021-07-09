import './styles.css';
import React, { FC, useMemo } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import { dotCharacter, dotCount } from 'pages/LeaderBoard/constants';
// import { useBoundAction } from 'hooks/useBoundAction';
// import { getLeaderboardAsync } from 'redux/leaderboard/leaderboardActions';
// import { useMountEffect } from 'hooks/useMountEffect';
import { useSelector } from 'react-redux';
import { selectLeaderboard } from 'redux/leaderboard/leaderboardSelectors';

export const LeaderBoard: FC = () => {
  const { t } = useTranslation();
  const dots = useMemo(() => new Array(dotCount + 1).join(dotCharacter), []);
  // const getLeaderboardAsyncBounded = useBoundAction(getLeaderboardAsync);
  const { leaderboard } = useSelector(selectLeaderboard);

  const digitsSplitter = (value: number): string => (
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  );

  // TODO:
  // useMountEffect(() => getLeaderboardAsyncBounded());

  return (
    <div className={classnames(['page'])}>
      <h1 className="page__title">{t('leaderboard')}</h1>

      <div className="page__content">
        <ul className="leaderboard-page__list">
          {leaderboard.map(({ displayName, score }, index) => (
            <li className="leaderboard-page__list-item">
              <span className="leaderboard-page__list-nickname">{`${index + 1}. ${displayName}`}</span>
              <span className="leaderboard-page__list-dots">{dots}</span>
              <span className="leaderboard-page__list-score">{digitsSplitter(score)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="page__footer-buttons">
        <BackButton />
      </div>
    </div>
  );
};
