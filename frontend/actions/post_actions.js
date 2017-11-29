import { getPosts, postPost } from '../utils/api/posts_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = payload => ({
  type: RECEIVE_POSTS,
  datasets: payload.datasets,
  charts: payload.charts,
  posts: payload.posts,
  users: payload.users,
});


export const fetchPosts = () => (dispatch) => {
  return getPosts()
    .then(payload => dispatch(receivePosts(payload)));
};

export const savePost = post => (dispatch, getState) => {
  post.author_id = getState().session.currentUser.id;
  return postPost(post)
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

