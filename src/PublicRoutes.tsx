import { Route } from 'react-router';
import { LoginPage } from './pages/Auth/LoginPage/LoginPage';
import { ResetPinPage } from './pages/Auth/ResetPinPage/ResetPinPage';
import { AppLayoutPage } from './pages/AppLayoutPage/AppLayoutPage';
import React from 'react';
import { useAuthorized } from './hooks/useAuthorized';

export const PublicRoutes: React.FC = () => {
  const isLoggedIn = useAuthorized();
  console.log('isLoggedIn, ', isLoggedIn);
  return (
    <>
      <Route exact={true} path="/auth/login">
        <LoginPage />
      </Route>
      <Route exact={true} path="/auth/reset-pin">
        <ResetPinPage />
      </Route>
      <Route exact path="/">
        {isLoggedIn ? <AppLayoutPage /> : <LoginPage />}
      </Route>
    </>
  );
};
