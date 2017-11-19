import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import LoginContainer from './users/login_container';
import SignupContainer from './users/signup_container';

const App = () => (
  <div className="app">
    <Route path="/" component={HeaderContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App;
