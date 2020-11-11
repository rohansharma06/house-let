import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from './index';
import { startAdminSignup, adminSignup,adminSignupFailed } from '../../Action/auth';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            name: '',
            confirmPassword: '',
        }
    }
    handleInputChange = (field, value) => {
        this.setState({
          [field]: value,
        });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword, name } = this.state;
        
        if(confirmPassword !== password){
            this.props.dispatch(adminSignupFailed('Password and confirm-password not match!'));
        }else if (email && password && confirmPassword && name) {
            this.props.dispatch(startAdminSignup());
            this.props.dispatch(adminSignup(email, password, confirmPassword, name));
        }else{
            this.props.dispatch(adminSignupFailed('Enter valid field!'));
        }
    };
    render() {
        const { inProgress, error, isSignup } = this.props.auth;
        if (isSignup) {
            return <Redirect to='/admin/login' />;
        }
        return (
            <div>
                <Header />
                <form className="login-form">
                    <span className="login-signup-header">SignUp</span>
                    {error && <div className="alert error-dailog">{error}</div>}
                    <div className="field">
                        <input
                        type="text"
                        placeholder="Name"
                        required
                        onChange={(e) => this.handleInputChange('name', e.target.value)}
                        value={this.state.name}
                        />
                    </div>
                    <div className="field">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => this.handleInputChange('email', e.target.value)}
                            value={this.state.email}
                        />
                    </div>
                    <div className="field">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) =>this.handleInputChange('password', e.target.value)}
                        value={this.state.password}
                    />
                    </div>
                    <div className="field">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            onChange={(e) => this.handleInputChange('confirmPassword', e.target.value)}
                            value={this.state.confirmPassword}
                        />
                    </div>
                    <div className="field">
                    <button onClick={this.onFormSubmit} disabled={inProgress}>
                        Signup
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    auth,
});
export default connect(mapStateToProps)(Signup);