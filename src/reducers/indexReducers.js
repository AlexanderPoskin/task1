import { combineReducers } from 'redux';
import users from './users';
import favoriteUsers from './favoriteUsers';

export default combineReducers({
  users,
  favoriteUsers,
});
