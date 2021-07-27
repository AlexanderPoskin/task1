import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../reducers/users';
<<<<<<< HEAD
import UserCard from './UserCard';
import './components.css';

const mapStateToProps = (state) => ({
  listUsers: state.users.list,
});

const mapDispatchToProps = {
  loadUsers,
};
=======
>>>>>>> 2c431caa264332ae14085f8ef82b39ae0d9bbb0a

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
<<<<<<< HEAD
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
=======
    return <div>

    </div>;
  }
}

export default connect(null, { loadUsers })(Users);
>>>>>>> 2c431caa264332ae14085f8ef82b39ae0d9bbb0a
