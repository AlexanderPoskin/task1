import React, { Component } from 'react';
import Navigation from './Navigation';
import Routes from '../routes/Routes';

class Menu extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Routes />
      </div>
    );
  }
}

export default Menu;
