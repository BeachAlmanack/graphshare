import { connect } from 'react-redux';
import LeftMenuDataset from './left_menu_datasets';
import { fetchDatasets } from '../../../actions/datasets_actions';
import { myRecentDatasets } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  datasets: myRecentDatasets(state, 8),
  currentUserId: state.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  fetchDatasets: userId => dispatch(fetchDatasets(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuDataset);
