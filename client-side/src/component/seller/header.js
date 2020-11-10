import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../Action/auth';
import { isToken } from '../../helpers/utils';
import { Redirect } from 'react-router-dom';
import './seller.css';

class header extends Component {
    constructor(props){
        super(props)
    }
    handleLogout = () =>{
        this.props.dispatch(logoutUser());
    }
    render() {
        let { isLoggedin } = this.props.auth;
        isLoggedin = (isLoggedin || isToken())
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {!isToken() ? (
                    <a className="navbar-brand nav-heading ml-5" href="/house-let/">
                        <i className="fas fa-home icon pr-2"></i> House Let
                    </a>)
                :(<a className="navbar-brand nav-heading ml-5" href="/house-let/admin/login">
                    <i className="fas fa-home icon pr-2"></i> House Let
                </a>)}
                {/* <a className="navbar-brand nav-heading ml-5" href="/admin/login">
                    <i className="fas fa-home icon pr-2"></i> House Let
                </a> */}
                <div className="ml-auto mr-0">
                    {isLoggedin ? (<button type="button" className="btn btn-outline-info" onClick={this.handleLogout}>Logout</button>) : (
                        <div>
                            <a href='/house-let/admin/login' type="button" className="btn btn-outline-info mr-5">Login</a>
                            <a href='/house-let/admin/signup' type="button" className="btn btn-outline-info">Signup</a>
                        </div>
                    )}
                    
                    
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
}
export default connect(mapStateToProps)(header);