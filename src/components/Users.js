import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../reducers/users';

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return <div>

    </div>;
  }
}

export default connect(null, { loadUsers })(Users);
