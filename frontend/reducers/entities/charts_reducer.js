import { RECEIVE_CHART } from '../../actions/chart_actions';

const initialState = {};

const datasetsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHART:
      return { [action.chart.id]: action.chart };
    default:
      return state;
  }
};

export default datasetsReducer;
