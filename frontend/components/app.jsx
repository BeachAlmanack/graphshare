import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/routes_util';
import HeaderContainer from './header/header_container';
import LoginContainer from './users/login_container';
import SignupContainer from './users/signup_container';

const App = () => (
  <div className="app">
    <Route path="/" component={HeaderContainer} />
    <Switch>
      <ProtectedRoute exact path="/" component={() => <h1>Feed</h1>} />
      <ProtectedRoute path="/feed" component={() => <h1>Feed</h1>} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
    </Switch>
  </div>
);

export default App;
