import { combineReducers } from 'redux';
import datasetsReducer from './datasets_reducer';

export default combineReducers({
  datasets: datasetsReducer,
});
