import React from 'react';
import './UserSearch.scss';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../reducers/users';
import { debounce } from 'lodash';

const UserSearch = () => {
  const dispatch = useDispatch();

  const inputHandler = debounce((e) => {
    dispatch(setSearch({ searched: e.target.value }));
  }, 1000);

  const clearSearch = () => {
    dispatch(setSearch({ searched: '' }));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="user-search">
      <input
        className="user-search__input"
        type="text"
        placeholder="Enter name or username"
        onChange={inputHandler}
      />
      <button type="reset" onClick={clearSearch}>
        X
      </button>
    </form>
  );
};

export default UserSearch;
