/* eslint import/no-unresolved: [1, { ignore: ['../'] }] */
import React, { Suspense } from 'react';
import image from 'assets/login-image.jpg';

import { Redirect, Route } from 'react-router-dom';

import Spinner from 'components/UI/Spinner';
import classes from './PublicRoutes.module.css';

const LoginScreen = React.lazy(() => import('../views/auth/Login'));

function Public() {
  return (
    <div className={classes.auth}>
      <div className={classes['auth-image']}>
        <img src={image} alt="auth shoes" />
      </div>
      <Suspense fallback={<Spinner />}>
        <Route path="/login">
          <LoginScreen />
        </Route>

        <Route path="*" exact>
          <Redirect to="/login" />
        </Route>
      </Suspense>
    </div>
  );
}

export default Public;
