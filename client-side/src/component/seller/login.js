import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Header } from './index';
import { adminLogin } from '../../Action/auth';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
        }
    }
    handleEmailChange = (e) =>{
        this.setState({
            email: e.target.value,
        });
    }
    handlePasswordChange = (e) =>{
        this.setState({
            password: e.target.value,
        });
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('state', this.state);
        const { email, password } = this.state;
    
        if (email && password) {
          this.props.dispatch(adminLogin(email, password));
        }
    };
    render() {
        const { error, inProgress, isLoggedin } = this.props.auth;
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        if (isLoggedin) {
            return <Redirect to='/admin/home' />;
        }
        return (
            <div>
                <Header />
                <form className="login-form">
                    <span className="login-signup-header">Login</span>
                    {error && <div className="alert error-dailog">{error}</div>}
                    <div className="field">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        onChange={this.handleEmailChange}
                        value={this.state.email}
                    />
                    </div>
                    <div className="field">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                    />
                    </div>
                    <div className="field">
                    {inProgress ? (
                        <button onClick={this.handleFormSubmit} disabled={inProgress}>
                        Logging in...
                        </button>
                    ) : (
                        <button onClick={this.handleFormSubmit} disabled={inProgress}>
                        Log In
                        </button>
                    )}
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
}
export default connect(mapStateToProps)(Login);