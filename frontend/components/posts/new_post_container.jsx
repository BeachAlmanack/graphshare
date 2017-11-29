import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewPost from './new_post';
import { savePost } from '../../actions/post_actions';

const mapDispatchToProps = dispatch => ({
  savePost: post => dispatch(savePost(post)),
});

export default withRouter(connect(null, mapDispatchToProps)(NewPost));
