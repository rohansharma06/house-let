//---- ACTION CREATORS

import{
    ADMIN_LOGIN_START,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILED,
    ADMIN_SIGNUP_START,
    ADMIN_SIGNUP_FAILED,
    ADMIN_SIGNUP_SUCCESS,
    LOG_OUT,

} from './actionType';


import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';


//--loout user
export function logoutUser() {
  localStorage.removeItem('token');
  location.href='/house-let/admin/login'
  return {
    type: LOG_OUT,
  };
}

//---- admin login
export function startAdminLogin() {
    return {
        type: ADMIN_LOGIN_START,
    };
}
  
export function adminLoginFailed(errorMessage) {
    return {
        type: ADMIN_LOGIN_FAILED,
        error: errorMessage,
    };
}
  
export function adminLoginSuccess(user) {
    return {
        type: ADMIN_LOGIN_SUCCESS,
        user,
    };
}

export function adminLogin(email, password) {
    return (dispatch) => {
      dispatch(startAdminLogin());
      const url = APIUrls.adminLogin();
      fetch(url, {
        method: 'POST',
        headers: {
          ///---- we use heder body coz our API require this info
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: getFormBody({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          
          if (data.success) {
            console.log('login data:', data);
            localStorage.setItem('token', data.user.token);
            dispatch(adminLoginSuccess(data.user));
            return;
          }
          dispatch(adminLoginFailed(data.message));
        });
    };
  }

//-- admin signup
export function startAdminSignup() {
  return {
    type: ADMIN_SIGNUP_START,
  };
}

export function adminSignupSuccessful(user) {
  return {
    type: ADMIN_SIGNUP_SUCCESS,
    user,
  };
}
export function adminSignupFailed(error) {
  return {
    type: ADMIN_SIGNUP_FAILED,
    error,
  };
}
export function adminSignup(email, password, confirmPassword, name) {
  return (dispatch) => {
    const url = APIUrls.adminSignup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({
        email,
        password,
        confirmPassword,
        name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('all:',data);
        if (data.success) {
          // localStorage.setItem('token', data.data.token);
          
          dispatch(adminSignupSuccessful(data));
          return;
        }
        dispatch(adminSignupFailed(data.message));
      });
  };
}