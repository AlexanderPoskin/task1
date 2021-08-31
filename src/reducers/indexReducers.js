import { combineReducers } from 'redux';
import users from './users';
import detailsUser from './detailsUser';
import menu from './menu';

export default combineReducers({
  users,
  detailsUser,
  menu,
});
