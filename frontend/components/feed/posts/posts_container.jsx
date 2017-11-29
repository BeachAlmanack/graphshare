import { connect } from 'react-redux';
import Posts from './posts';
import { fetchPosts } from '../../../actions/post_actions';

const mapStateToProps = state => ({
  posts: state.entities.posts,
  datasets: state.entities.datasets,
  charts: state.entities.charts,
  users: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
