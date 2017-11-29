import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities/entities_reducer';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const combinedReducers = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});


export default (state, action) => {
  if (action.type === LOGOUT_CURRENT_USER) {
    state = undefined
  }
  return combinedReducers(state, action);
};
