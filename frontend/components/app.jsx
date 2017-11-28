import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/routes_util';
import HeaderContainer from './header/header_container';
import LoginContainer from './users/login_container';
import SignupContainer from './users/signup_container';
import DataImportPage from './data/data_import_page';
import DataShowPage from './data/data_show_page';
import Feed from './feed/feed';
import ChartCreatorPage from './charts/chart_creator_page';
import ChartShowPage from './charts/chart_show_page';
import ProfilePageContainer from './users/profile_page_container';
import DatasetIndex from './data/datasets_index/datasets_index_container';
import ChartIndex from './charts/chart_index/chart_index_container';
import Footer from './footer/footer';

const App = () => (
  <div className="app">
    <Route path="/" component={HeaderContainer} />
    <Switch>
      <ProtectedRoute exact path="/" component={() => <Redirect to="/feed" />} />
      <ProtectedRoute path="/feed" component={Feed} />
      <ProtectedRoute exact path="/charts/new" component={ChartCreatorPage} />
      <ProtectedRoute path="/charts/new/:dataId" component={ChartCreatorPage} />
      <ProtectedRoute path="/charts/:id" component={ChartShowPage} />
      <ProtectedRoute exact path="/datasets" component={DatasetIndex} />
      <ProtectedRoute exact path="/charts" component={ChartIndex} />
      <ProtectedRoute path="/datasets/new" component={DataImportPage} />
      <ProtectedRoute path="/datasets/:id" component={DataShowPage} />
      <ProtectedRoute path="/users/:id" component={ProfilePageContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
    </Switch>
    <Route path="/" component={Footer} />
  </div>
);

export default App;
