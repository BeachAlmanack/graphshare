import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errors_actions';

const initialState = { session: [] };

const errorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
};

export default errorsReducer;
