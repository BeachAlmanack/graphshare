import { postUser, postSession, deleteSession } from '../utils/api/users_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createUser = formUser => dispatch => postUser(formUser)
  .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser)
  .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(user => dispatch(logoutCurrentUser(user)));
