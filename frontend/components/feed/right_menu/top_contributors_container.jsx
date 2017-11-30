import { connect } from 'react-redux';
import { fetchTopUsers } from '../../../actions/session_actions';
import { topContributors } from '../../../reducers/selectors';
import TopContributors from './top_contributors';

const mapStateToProps = state => ({
  users: topContributors(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTopContrib: () => dispatch(fetchTopUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopContributors);
