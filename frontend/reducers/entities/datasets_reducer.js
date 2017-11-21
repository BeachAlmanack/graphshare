import { RECEIVE_DATASET } from '../../actions/datasets_actions';

const initialState = {};

const datasetsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATASET:
      return Object.assign({ 1: action.dataset });
    default:
      return state;
  }
};

export default datasetsReducer;
