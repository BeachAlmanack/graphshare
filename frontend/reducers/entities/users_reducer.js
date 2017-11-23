import { RECEIVE_DATASET, RECEIVE_DATASETS } from '../../actions/datasets_actions';
import { RECEIVE_USER } from '../../actions/session_actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);

  let newState = {};
  switch (action.type) {
    case RECEIVE_DATASET:
      if (action.user) {
        return Object.assign({}, state, { [action.user.id]: action.user });
      }
      return state;
    case RECEIVE_DATASETS:
      newState = action.users.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
      return Object.assign({}, state, newState);
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
