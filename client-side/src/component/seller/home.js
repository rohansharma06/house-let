import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Header } from './index';

class home extends Component {
    render() {
        const { isLoggedin } = this.props.auth;
        if(!isLoggedin){
            return <Redirect to='/admin/login' />;
        }
        return (
            <div>
                <Header />
                <h1>Home</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
}
export default connect(mapStateToProps)(home);