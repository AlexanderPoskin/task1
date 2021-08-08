import { combineReducers } from 'redux';
import users from './users';
import favoriteUsers from './favoriteUsers';
import detailsUser from './detailsUser';

export default combineReducers({
  users,
  favoriteUsers,
  detailsUser,
});
