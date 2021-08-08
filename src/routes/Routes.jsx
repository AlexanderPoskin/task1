import React, { Component } from 'react';
import { Home, QuotesPage, UsersPage, UsersFavoritePage } from './index';
import { Switch, Route } from 'react-router-dom';
import UserDetails from './UserDetails/UserDetails';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quotes">
          <QuotesPage />
        </Route>
        <Route exact path="/users">
          <UsersPage />
        </Route>
        <Route exact path="/users/favorite">
          <UsersFavoritePage />
        </Route>
        <Route exact path="/users/:id">
          <UserDetails />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
