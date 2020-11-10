import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from './landing';
import { Login ,Signup,home,SellerProfile } from './seller';
import { Home,userLogin,userSignup,profile } from './buyer';
import {fetchAllProperty} from '../Action/property';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import sellerprofile from './seller/sellerprofile';

const startURL = "/house-let";

class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchAllProperty());
  }
  render() {
    const { auth } = this.props;
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={startURL + '/'} component={Landing} />
            <Route exact path={startURL+'/admin/login'} component={Login} />
            <Route exact path={startURL+'/admin/signup'} component={Signup} />
            <Route exact path={startURL+'/admin/home'} component={home} />
            <Route exact path={'/admin/profile:id'} component={sellerprofile} />

            <Route exact path={startURL+'/user'} component={Home} />
            <Route exact path={startURL+'/user/login'} component={userLogin} />
            <Route exact path={startURL+'/user/signup'} component={userSignup} />
            <Route exact path={startURL+'/user/profile'} component={profile} />
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
