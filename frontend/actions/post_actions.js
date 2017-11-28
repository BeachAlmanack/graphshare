import { getPosts } from '../utils/api/posts_util';

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
