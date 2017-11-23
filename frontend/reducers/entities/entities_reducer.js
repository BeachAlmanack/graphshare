import { combineReducers } from 'redux';
import datasetsReducer from './datasets_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
  datasets: datasetsReducer,
  users: usersReducer,
});
