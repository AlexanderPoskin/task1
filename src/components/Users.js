import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../reducers/users';
import UserCard from './UserCard';
import './components.css';

// Ключ: значение
// Достаем самое необходимое из стора, а ключ - это название пропса который попадёт в твой компонент
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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
