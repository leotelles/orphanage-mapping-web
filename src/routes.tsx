import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../src/pages/Landing';
import OrphanagesMap from '../src/pages/OrphanagesMap';
import CreateOrphanage from '../src/pages/CreateOrphanage';
import Orphanage from '../src/pages/Orphanage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;