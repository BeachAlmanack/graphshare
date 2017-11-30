import { postChart, getChart, getCharts, getFullCharts } from '../utils/api/charts_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CHART = 'RECEIVE_CHART';
export const RECEIVE_CHARTS = 'RECEIVE_CHARTS';

export const receiveChart = payload => ({
  type: RECEIVE_CHART,
  chart: payload.chart,
  user: payload.user,
});

export const receiveCharts = payload => ({
  type: RECEIVE_CHARTS,
  charts: payload.charts,
  users: payload.users,
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

export const fetchCharts = (authorId, withData) => (dispatch) => {
  if (withData) {
    return getFullCharts(authorId)
      .then(payload => dispatch(receiveCharts(payload)));
  }
  return getCharts(authorId)
    .then(payload => dispatch(receiveCharts(payload)));
};
