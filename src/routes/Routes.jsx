import React, { Component } from 'react';
import { Home, QuotesPage, UsersPage, UsersFavoritePage } from './index';
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
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/users/favorite">
          <UsersFavoritePage />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
