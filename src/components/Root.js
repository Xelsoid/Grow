import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './Main/MainPage';
import Profile from './Profile/Profile';
import Signup from './Signup/Signup';
import Login from './Login/Login';

const Root = () => ( // dumb/stateless/presentational/pure  component
  <Router>
    <Switch>
      <Route exact  path = '/' component = {MainPage}/>
      <Route path = '/signup' component = {Signup}/>
      <Route path = '/login' component = {Login}/>
      <Route path = '/profile' component = {Profile}/>
    </Switch>
  </Router>
);

export default Root;
