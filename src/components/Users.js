import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../reducers/users';
import UserCard from './UserCard';
import './components.css';

const mapStateToProps = (state) => ({
  listUsers: state.users.list,
});

const mapDispatchToProps = {
  loadUsers,
};

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { listUsers } = this.props;

    return (
      <div className="users">
        <div className="users_list">
          {listUsers.map((c) => {
            return (
              <UserCard
                name={c.name}
                username={c.username}
                website={c.website}
                key={c.id}

              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
