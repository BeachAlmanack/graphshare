import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Chart from './chart';

const mapStateToProps = (state) => {
  const chartId = 'new';
  return {
    chart: state.entities.charts['new'],
    chartId,
  };
};

export default withRouter(connect(mapStateToProps)(Chart));
