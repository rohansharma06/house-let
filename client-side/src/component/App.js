import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from './landing';
import { Login ,Signup,home } from './seller';
import { Home,userLogin,userSignup } from './buyer';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    const { auth } = this.props;
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/admin/login' component={Login} />
            <Route exact path='/admin/signup' component={Signup} />
            <Route exact path='/admin/home' component={home} />
            <Route exact path='/user' component={Home} />
            <Route exact path='/user/login' component={userLogin} />
            <Route exact path='/user/signup' component={userSignup} />
          </Switch>
          
        </div>
      </Router>
      
    );
  }
}

function mapStoreToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStoreToProps)(App);
