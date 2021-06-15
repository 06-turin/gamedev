import React, { FC } from 'react';

type Props = {
  score: number,
  timer: number
}
export const Header: FC<Props> = ({ score, timer }) => (
  <>
    <p>
      Score:
      {score}
    </p>
    <p>
      Timer:
      {timer}
    </p>

  </>
);
