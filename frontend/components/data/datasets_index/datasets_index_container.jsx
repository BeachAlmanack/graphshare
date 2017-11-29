import { connect } from 'react-redux';
import DatasetsIndex from './datasets_index';
import { fetchDatasets } from '../../../actions/datasets_actions';
import { recentDatasets } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  let userId = currentUserId;
  if (ownProps.userId) {
    userId = ownProps.userId
  }
  return {
    datasets: recentDatasets(state, undefined, userId),
    userId,
    currentUserId,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDatasets: userId => dispatch(fetchDatasets(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatasetsIndex);
