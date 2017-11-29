import { connect } from 'react-redux';
import ChartIndex from './chart_index';
import { fetchCharts, fetchChart } from '../../../actions/chart_actions';
import { recentCharts } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  let userId = currentUserId;
  if (ownProps.userId) {
    userId = ownProps.userId
  }
  return {
    charts: recentCharts(state, undefined, userId),
    userId,
    currentUserId,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCharts: userId => dispatch(fetchCharts(userId, true)),
  fetchChart: id => dispatch(fetchChart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartIndex);
