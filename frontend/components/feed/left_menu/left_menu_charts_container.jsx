import { connect } from 'react-redux';
import LeftMenuCharts from './left_menu_charts';
import { fetchCharts } from '../../../actions/chart_actions';
import { myRecentCharts } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  charts: myRecentCharts(state, 8),
  currentUserId: state.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  fetchCharts: userId => dispatch(fetchCharts(userId, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuCharts);
