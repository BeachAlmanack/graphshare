import { find } from 'lodash';
import { postLike, deleteLike } from '../utils/api/likes_util';
import { receiveErrors } from '../actions/errors_actions';

export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';

export const removeLike = payload => ({
  type: REMOVE_LIKE,
  like: payload.like,
});

export const receiveLike = payload => ({
  type: RECEIVE_LIKE,
  like: payload.like,
});

export const saveLike = like => (dispatch, getState) => {
  like.user_id = getState().session.currentUser.id;
  return postLike(like)
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
    .then(newLike => dispatch(receiveLike(newLike)));
};

export const unLike = like => (dispatch, getState) => {
  const likeId = find(getState().entities.likes, { post_id: like.post_id, user_id: getState().session.currentUser.id }).id;
  return deleteLike(likeId)
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
    .then(newLike => dispatch(removeLike(newLike)));
};
