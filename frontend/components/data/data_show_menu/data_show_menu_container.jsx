import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DatasetMenu from './data_show_menu';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const dataset = state.entities.datasets[ownProps.match.params.id];
  console.log(state);
  return {
    dataset,
  };
};

export default withRouter(connect(mapStateToProps)(DatasetMenu));
