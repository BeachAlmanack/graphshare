import { connect } from 'react-redux';
import LeftMenuDataset from './left_menu_datasets';
import { fetchDatasets } from '../../../actions/datasets_actions';

const mapStateToProps = state => ({
  datasets: state.entities.datasets,
  currentUserId: state.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  fetchDatasets: userId => dispatch(fetchDatasets(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuDataset);
