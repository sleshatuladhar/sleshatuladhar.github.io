/**
 * @author Slesha Tuladhar <sleshatuladhar@gmail.com>
 */

import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import Dashboard from './app/component/dashboard';
import MainLayout from './app/component/layout/main-layout';
import PublicLayout from './app/component/layout/public-layout';
import AppRoute from './appRoute';

const routes = (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <AppRoute exact path="/" layout={MainLayout} component={Dashboard} />
      <AppRoute path="/dashboard" layout={MainLayout} component={Dashboard} />

      {/* redirect to default page if no route found */}
      <AppRoute path='*' layout={PublicLayout} component={Dashboard} />
    </Switch>
  </HashRouter>
);

export default routes;