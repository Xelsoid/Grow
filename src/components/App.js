import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import Profile from './Profile';
import Signup from './Signup';
import Signin from './Signin';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact  path = '/' component = {MainPage}/>
          <Route path = '/signup' component = {Signup}/>
          <Route path = '/signin' component = {Signin}/>
          <Route path = '/profile' component = {Profile}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
