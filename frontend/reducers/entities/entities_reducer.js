import { combineReducers } from 'redux';
import datasetsReducer from './datasets_reducer';
import usersReducer from './users_reducer';
import chartsReducer from './charts_reducer';
import postsReducer from './posts_reducer';
import likesReducer from './likes_reducer';

export default combineReducers({
  datasets: datasetsReducer,
  users: usersReducer,
  charts: chartsReducer,
  posts: postsReducer,
  likes: likesReducer,
});
