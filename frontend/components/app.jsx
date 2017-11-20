import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/routes_util';
import HeaderContainer from './header/header_container';
import LoginContainer from './users/login_container';
import SignupContainer from './users/signup_container';
import DataImportContainer from './data/data-import/data_import_container';
import Footer from './footer/footer';

const App = () => (
  <div className="app">
    <Route path="/" component={HeaderContainer} />
    <Switch>
      <ProtectedRoute exact path="/" component={() => <h1>Feed</h1>} />
      <ProtectedRoute path="/feed" component={() => <h1>Feed</h1>} />
      <ProtectedRoute path="/datasets/new" component={DataImportContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
    </Switch>
    <Route path="/" component={Footer} />
  </div>
);

export default App;
