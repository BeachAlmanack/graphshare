import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Dataset from './dataset';
import { fetchDataset } from '../../../actions/datasets_actions';

const mapStateToProps = (state, ownProps) => {
  let dataset = state.entities.datasets.new;
  let datasetId = 'new';
  if (ownProps.match.path === '/datasets/:id') {
    dataset = state.entities.datasets[ownProps.match.params.id];
    datasetId = ownProps.match.params.id;
  }
  return {
    dataset,
    datasetId,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDataset: id => dispatch(fetchDataset(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dataset));
