import { merge } from 'lodash';
import { RECEIVE_CHART, RECEIVE_CHARTS } from '../../actions/chart_actions';
import { RECEIVE_POSTS } from '../../actions/post_actions';

const initialState = {};

const datasetsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_CHART:
      return Object.assign({}, state, { [action.chart.id]: action.chart });
    case RECEIVE_POSTS:
    case RECEIVE_CHARTS:
      newState = action.charts.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default datasetsReducer;
