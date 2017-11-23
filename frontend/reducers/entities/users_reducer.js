import { RECEIVE_DATASET, RECEIVE_DATASETS } from '../../actions/datasets_actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);

  let newState = {};
  switch (action.type) {
    case RECEIVE_DATASET:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_DATASETS:
      newState = action.users.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
      return newState;
    default:
      return state;
  }
};

export default usersReducer;