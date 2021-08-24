import React from 'react';
import './UserSearch.scss';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../reducers/users';

const UserSearch = () => {
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    dispatch(setSearch({ searched: e.target.value }));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="user-search">
      <input
        className="user-search__input"
        type="text"
        onChange={inputHandler}
      />
    </form>
  );
};

export default UserSearch;
