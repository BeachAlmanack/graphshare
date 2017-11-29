import { connect } from 'react-redux';
import LeftMenuCharts from './left_menu_charts';
import { fetchCharts } from '../../../actions/chart_actions';
import { recentCharts } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  charts: recentCharts(state, 8),
  currentUserId: state.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  fetchCharts: userId => dispatch(fetchCharts(userId, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuCharts);
