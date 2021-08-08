import React, { Component } from 'react';
import {UserDetails as UserDetailsComponent} from '../../components/Users/UserDetails';

class UserDetails extends Component {
  render() {
        return (
      <div>
        <UserDetailsComponent/>
      </div>
    );
  }
}

export default UserDetails;
