import React from 'react';
import { connect } from 'react-redux';
import Signup from './signup';
import { createUser } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(createUser(user)),
});

export default connect(null, mapDispatchToProps)(Signup);
