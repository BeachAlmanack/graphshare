import { connect } from 'react-redux';
import DatasetsIndex from './datasets_index';
import { fetchDatasets } from '../../../actions/datasets_actions';

const mapStateToProps = state => ({
  datasets: state.entities.datasets,
  userId: state.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  fetchDatasets: userId => dispatch(fetchDatasets(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatasetsIndex);
