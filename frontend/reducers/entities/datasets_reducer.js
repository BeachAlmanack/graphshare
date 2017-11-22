import { RECEIVE_DATASET, RECEIVE_DATASET_TITLE, RECEIVE_DATASETS } from '../../actions/datasets_actions';

const initialState = {};

const datasetsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_DATASET:
      return Object.assign({}, state, { [action.dataset.id]: action.dataset });
    case RECEIVE_DATASETS:
      newState = action.datasets.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      });
      return newState;
    case RECEIVE_DATASET_TITLE:
      newState = state;
      newState[action.id].title = action.title;
      return newState;
    default:
      return state;
  }
};

export default datasetsReducer;
