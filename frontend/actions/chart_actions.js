export const RECEIVE_CHART = 'RECEIVE_CHART';

export const receiveChart = payload => ({
  type: RECEIVE_CHART,
  chart: payload.chart,
});
