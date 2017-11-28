import { RECEIVE_CHART, RECEIVE_CHARTS } from '../../actions/chart_actions';

const initialState = {};

const datasetsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CHART:
      return Object.assign({}, state, { [action.chart.id]: action.chart });
    case RECEIVE_CHARTS:
      newState = action.charts.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
      return newState;
    default:
      return state;
  }
};

export default datasetsReducer;
