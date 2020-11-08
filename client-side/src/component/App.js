import React, { Component } from 'react';
import Header from './header';
import Landing from './landing';
import { Login ,Signup,home } from './seller';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' render={()=>{
              return (
                <div>
                  <Header />
                  <Landing />
                </div>
              );
            }} />
            <Route exact path='/admin/login' component={Login} />
            <Route exact path='/admin/signup' component={Signup} />
            <Route exact path='/admin/home' component={home} />
          </Switch>
          
        </div>
      </Router>
      
    );
  }
}

export default App;
