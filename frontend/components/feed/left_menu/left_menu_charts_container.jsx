import { connect } from 'react-redux';
import LeftMenuCharts from './left_menu_charts';
import { fetchCharts } from '../../../actions/chart_actions';

const mapStateToProps = state => ({
  charts: state.entities.charts,
  currentUserId: state.session.currentUser.id,
});

const mapDispatchToProps = dispatch => ({
  fetchCharts: userId => dispatch(fetchCharts(userId, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuCharts);
