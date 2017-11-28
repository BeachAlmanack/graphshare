import { RECEIVE_POSTS } from '../../actions/post_actions';

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
    default:
      return state;
  }
};

export default postsReducer;
