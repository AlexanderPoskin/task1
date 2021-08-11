import { combineReducers } from 'redux';
import users from './users';
import detailsUser from './detailsUser';

export default combineReducers({
  users,
  detailsUser,
});
