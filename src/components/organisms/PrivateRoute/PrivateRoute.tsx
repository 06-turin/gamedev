import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUserState } from 'redux/user/userSlice';

type PrivateRouteProps = {
  to: `/${string}`,
  redirectIfAuth?: boolean,
  [x: string]: any,
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  to, redirectIfAuth = false, ...rest
}) => {
  const { isAuth } = useSelector(getUserState);

  return isAuth === redirectIfAuth
    ? <Redirect to={to} />
    : <Route {...rest} />;
};
