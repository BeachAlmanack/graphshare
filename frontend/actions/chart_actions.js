import { postChart, getChart } from '../utils/api/charts_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CHART = 'RECEIVE_CHART';

export const receiveChart = payload => ({
  type: RECEIVE_CHART,
  chart: payload.chart,
  user: payload.user,
});

export const saveChart = chart => (dispatch, getState) => {
  chart.author_id = getState().session.currentUser.id;
  if (chart.id === 'new') {
    delete chart.id;
  }
  return postChart(chart)
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
    .then(payload => dispatch(receiveChart(payload)));
};

export const fetchChart = id => (dispatch) => {
  return getChart(id)
    .then(payload => dispatch(receiveChart(payload)));
};
