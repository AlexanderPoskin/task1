import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../reducers/users';
import UserCard from './UserCard';
import './Users.scss';
import cx from 'classnames';

// Ключ: значение
// Достаем самое необходимое из стора, а ключ - это название пропса который попадёт в твой компонент
const mapStateToProps = (state) => ({
  listUsers: state.users.list,
  loadingUsers: state.users.loading,
});

const mapDispatchToProps = {
  loadUsers,
};

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { listUsers, loadingUsers } = this.props;

    return (
      <div className={cx('users', { 'users--is-loading': loadingUsers })}>
        {!loadingUsers ? (
          listUsers.map((c) => {
            return (
              <UserCard
                name={c.name}
                username={c.username}
                website={c.website}
                key={c.id}
              />
            );
          })
        ) : (
          <div className="users__loading">is Loading...</div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);