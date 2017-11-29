import { connect } from 'react-redux';
import Posts from './posts';
import { fetchPosts } from '../../../actions/post_actions';
import { latestPosts } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  posts: latestPosts(state),
  datasets: state.entities.datasets,
  charts: state.entities.charts,
  users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
