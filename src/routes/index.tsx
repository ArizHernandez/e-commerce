/* eslint import/no-unresolved: [1, { ignore: ['./'] }] */
import { Switch, Route } from 'react-router-dom';

// import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from './PublicRoutes';

function Routes() {
  return (
    <Switch>
      <Route path="/">
        <PublicRoutes />
        {/* <PrivateRoutes /> */}
      </Route>
    </Switch>
  );
}

export default Routes;
