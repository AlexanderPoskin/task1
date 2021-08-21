import React, { Component } from 'react';
import './UserSearch.scss';
import { loadSearched } from '../../reducers/users';

const inputHandler = (event) => {
  console.log(event.target.value);
};

class UserSearch extends Component {
  render() {
    return (
      <div className="user-search">
        <input
          className="user-search__input"
          type="text"
          onChange={inputHandler}
        />
        <button className="user-search__button">Search</button>
      </div>
    );
  }
}

export default UserSearch;
