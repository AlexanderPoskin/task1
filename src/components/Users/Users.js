import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../reducers/users';
import UserSearch from './UserSearch';
import UserCard from './UserCard';
import './Users.scss';
import cx from 'classnames';

const mapStateToProps = (state) => ({
  listUsers: state.users.list,
  loadingUsers: state.users.loading,
  searchedData: state.users.searched,
});

const mapDispatchToProps = {
  loadUsers,
};

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }


  render() {
    const { listUsers, loadingUsers, searchedData } = this.props;

    const filterData = listUsers.filter(
      (item) =>
        item.name.toLowerCase().includes(searchedData) ||
        item.username.toLowerCase().includes(searchedData)
    );

    return (
      <div>
        <UserSearch />
        <div className={cx('users', { 'users--is-loading': loadingUsers })}>
          {!loadingUsers ? (
            filterData.map((c) => {
              return (
                <UserCard
                  name={c.name}
                  username={c.username}
                  website={c.website}
                  key={c.id}
                  id={c.id}
                />
              );
            })
          ) : (
            <div className="users__loading">is Loading...</div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
