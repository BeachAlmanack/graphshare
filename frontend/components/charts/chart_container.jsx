import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Chart from './chart';
import { fetchChart } from '../../actions/chart_actions';

const mapStateToProps = (state, ownProps) => {
  const chartId = ownProps.match.params.id;
  const chart = state.entities.charts[chartId];
  return {
    chart,
    chartId,
    height: 600,
    width: 1200,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChart: id => dispatch(fetchChart(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chart));
