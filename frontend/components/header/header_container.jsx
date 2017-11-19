import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
