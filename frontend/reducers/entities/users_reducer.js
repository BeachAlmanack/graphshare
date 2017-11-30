import { merge } from 'lodash';
import { RECEIVE_DATASET, RECEIVE_DATASETS } from '../../actions/datasets_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/session_actions';
import { RECEIVE_CHART, RECEIVE_CHARTS } from '../../actions/chart_actions';
import { RECEIVE_POSTS } from '../../actions/post_actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  Object.freeze(state);

  let newState = {};
  switch (action.type) {
    case RECEIVE_CHART:
    case RECEIVE_DATASET:
      if (action.user) {
        return Object.assign({}, state, { [action.user.id]: action.user });
      }
      return state;
    case RECEIVE_USERS:
    case RECEIVE_CHARTS:
    case RECEIVE_DATASETS:
    case RECEIVE_POSTS:
      newState = action.users.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
      return merge({}, state, newState);
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
