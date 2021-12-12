import React, { Fragment, Suspense } from 'react';

import { Redirect, Route } from 'react-router-dom';

import Spinner from '../components/UI/Spinner';

import Login from 'views/auth/Login';

// const LoginScreen = React.lazy(() => import("../views/auth"));

const Public = () => {
  return (
    <Fragment>
      {/* <Suspense fallback={<Spinner />}> */}
      
      <Route path="/login">
        <Login />
      </Route>
      
      <Route path="*" exact>
        <Redirect to="/login" />
      </Route>
      {/* </Suspense> */}
    </Fragment>
  );
};

export default Public;
