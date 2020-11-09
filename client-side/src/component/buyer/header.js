import React, { Component } from 'react';
import { connect } from 'react-redux';

class header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand nav-heading ml-5" href="/">
                    <i className="fas fa-home icon pr-2"></i> House Let
                </a>
                <div className="ml-auto mr-0">
                    <button type="button" className="btn btn-outline-info">Logout</button>
                    <a href='/admin/login' type="button" className="btn btn-outline-info mr-5">Login</a>
                    <a href='/admin/signup' type="button" className="btn btn-outline-info">Signup</a> 
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