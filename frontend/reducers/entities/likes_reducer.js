import { merge, omit } from 'lodash';
import { RECEIVE_POSTS } from '../../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../../actions/like_actions';

const initialState = {};

const likesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = undefined;
  switch (action.type) {
    case RECEIVE_POSTS:
      newState = action.likes.reduce((acc, el) => {
        acc[el.id] = el;
        return acc;
      }, {});
      return newState;
    case RECEIVE_LIKE:
      return merge({}, state, { [action.like.id]: action.like });
    case REMOVE_LIKE:
      return omit(state, action.like.id);
    default:
      return state;
  }
};

export default likesReducer;
