import { RECEIVE_POSTS } from '../../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../../actions/like_actions';
import { clone } from 'lodash';

const initialState = {};

const postsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = undefined;
  switch (action.type) {
    case RECEIVE_POSTS:
      newState = action.posts.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
      return newState;
    case RECEIVE_LIKE:
      newState = clone(state);
      console.log(action.like);
      newState[action.like.post_id].liking_user_ids.push(action.like.user_id);
      return newState;
    case REMOVE_LIKE:
      newState = clone(state);
      newState[action.like.post_id].liking_user_ids = newState[action.like.post_id].liking_user_ids.filter(id => id !== action.like.user_id);
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
