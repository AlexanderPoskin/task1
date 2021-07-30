import { combineReducers } from 'redux';
import users from './users';
import favoriteUsers from './favoriteUsers';
import detailsUsers from './detailsUsers';

export default combineReducers({
  users,
  favoriteUsers,
  detailsUsers,
});
