import React from 'react';
import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(Login);
