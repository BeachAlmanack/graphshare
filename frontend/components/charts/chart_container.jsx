import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Chart from './chart';

const mapStateToProps = (state) => {
  return {
    chart: state.entities.charts.new,
  };
};

export default withRouter(connect(mapStateToProps)(Chart));
