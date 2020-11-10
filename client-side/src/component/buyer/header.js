import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUserToken } from '../../helpers/utils';
import { userlogout } from '../../Action/user';

class header extends Component {
    constructor(props){
        super(props)
    }
    handleUserLogout = () =>{
        this.props.dispatch(userlogout());
    }
    render() {
        const {isLoggedin,error,inProgress} = this.props.user;
        // console.log(isLoggedin,error,inProgress);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {!isUserToken() ? (
                    <a className="navbar-brand nav-heading ml-5" href="/">
                        <i className="fas fa-home icon pr-2"></i> House Let
                    </a>)
                :(<a className="navbar-brand nav-heading ml-5" href="/user">
                    <i className="fas fa-home icon pr-2"></i> House Let
                </a>)}
                
                
                {isUserToken()  && ( 
                        <div className="ml-auto mr-0">
                            <button type="button" className="btn btn-info mr-5">Profile</button>
                            <button type="button" className="btn btn-outline-info" onClick={this.handleUserLogout}>Logout</button>
                        </div>
                    )
                }   
                {!isUserToken() && (
                    <div className="ml-auto mr-0">
                        <a href='/user/login' type="button" className="btn btn-outline-info mr-5">Login</a>
                        <a href='/user/signup' type="button" className="btn btn-outline-info">Signup</a>
                    </div>
                )}
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}
export default connect(mapStateToProps)(header);