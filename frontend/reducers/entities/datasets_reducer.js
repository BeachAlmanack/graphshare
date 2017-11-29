import { merge, omit } from 'lodash';
import { RECEIVE_DATASET, RECEIVE_DATASET_TITLE, RECEIVE_DATASETS, CLEAR_NEW_DATASET } from '../../actions/datasets_actions';
import { RECEIVE_POSTS } from '../../actions/post_actions';

const initialState = {};

const datasetsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_DATASET:
      return Object.assign({}, state, { [action.dataset.id]: action.dataset });
    case RECEIVE_POSTS:
    case RECEIVE_DATASETS:
      newState = action.datasets.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
      return merge({}, state, newState);
    case RECEIVE_DATASET_TITLE:
      newState = state;
      newState[action.id].title = action.title;
      return newState;
    case CLEAR_NEW_DATASET:
      return omit(state, ['new']);
    default:
      return state;
  }
};

export default datasetsReducer;
