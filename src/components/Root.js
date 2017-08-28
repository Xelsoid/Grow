import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './Main/MainPage';
import Profile from './Profile/Profile';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import NotFound from './layout/NotFound';

const Root = () => ( // dumb/stateless/presentational/pure  component
  <Router>
    <Switch>
      <Route exact path = '/' component = {MainPage}/>
      <Route exact path = '/signup' component = {Signup}/>
      <Route exact path = '/login' component = {Login}/>
      <Route exact path = '/profile' component = {Profile}/>
      <Route component = {NotFound}/>
    </Switch>
  </Router>
);

export default Root;
