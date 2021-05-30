import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes Page</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
