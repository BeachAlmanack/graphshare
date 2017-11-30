import { connect } from 'react-redux';
import Posts from './posts';
import { fetchPosts } from '../../../actions/post_actions';
import { saveLike, unLike } from '../../../actions/like_actions';
import { latestPosts, likedPosts, numLikesPosts } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  posts: latestPosts(state),
  datasets: state.entities.datasets,
  charts: state.entities.charts,
  users: state.entities.users,
  likedPosts: likedPosts(state),
  numLikes: numLikesPosts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  likePost: like => dispatch(saveLike(like)),
  unlikePost: like => dispatch(unLike(like)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
