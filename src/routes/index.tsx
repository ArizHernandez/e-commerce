import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from './PublicRoutes';

const Routes = () => {
  return (
    <Switch>
      <Route path='/'>
        <PublicRoutes />
        {/* <PrivateRoutes /> */}
      </Route>
    </Switch>
  );
};

export default Routes;
