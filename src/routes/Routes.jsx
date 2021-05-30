import React, { Component } from 'react';
import { Home, QuotesPage } from './index';
import { Switch, Route } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quotes">
          <QuotesPage />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
