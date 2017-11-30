import { postUser, postSession, deleteSession, getUser, getTopUsers } from '../utils/api/users_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

const receiveUsers = payload => ({
  type: RECEIVE_USERS,
  users: payload.users,
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

export const fetchUser = id => dispatch => getUser(id)
  .then(user => dispatch(receiveUser(user)));

export const fetchTopUsers = () => dispatch => getTopUsers()
  .then(payload => dispatch(receiveUsers(payload)));
