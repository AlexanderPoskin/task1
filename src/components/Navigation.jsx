import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes Page</Link>
          </li>
          <li>
            <Link to="/users">Users Page</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
