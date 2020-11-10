
import {
    USER_LOGIN_START,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS,
    USER_SIGNUP_FAILED,
    USER_SIGNUP_START,
    USER_SIGNUP_SUCCESS,
    USER_RENT_APPLY,
    LOG_OUT,
} from './actionType';

import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

export function userlogout(){
  localStorage.removeItem('usertoken');
  localStorage.removeItem('userId');
  return {
    type: LOG_OUT,
  };
}

export function startUserLogin() {
    return {
        type:USER_LOGIN_START,
    };
}
  
export function userLoginFailed(msg) {
  console.log(msg);
    return {
        type: USER_LOGIN_FAILED,
        error: msg,
    };
}
  
export function userLoginSuccess(data) {
    return {
        type: USER_LOGIN_SUCCESS,
        data,
    };
}

export function userLoginn(email, password) {
    return (dispatch) => {
      dispatch(startUserLogin());
      const url = APIUrls.userLogin();
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
            // console.log('login data:', data);
            localStorage.setItem('usertoken', data.user.token);
            localStorage.setItem('userId', data.user.id);
            dispatch(userLoginSuccess(data.user));
            return;
          }
          dispatch(userLoginFailed(data.message));
        });
    };
}

export function startUserSignup() {
  return {
      type:USER_SIGNUP_START,
  };
}

export function userSignupFailed(msg) {
console.log(msg);
  return {
      type: USER_SIGNUP_FAILED,
      error: msg,
  };
}

export function userSignnupSuccess(data) {
  return {
      type: USER_SIGNUP_SUCCESS,
      data,
  };
}

export function usersignup(email, password, confirmPassword, name,phone) {
  return (dispatch) => {
    const url = APIUrls.userSignup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({
        email,
        phone,
        password,
        confirmPassword,
        name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('all:',data);
        if (data.success) {
          // console.log(data);
          dispatch(userSignnupSuccess(data));
          return;
        }
        dispatch(userSignupFailed(data.message));
      });
  };
}

export function userapplyrentSuccess() {
  return {
      type: USER_RENT_APPLY,
  };
}

export function userapplyrent(propertyID){
  // const userID = localStorage.getItem('userId');
  // console.log(userID,propertyID._id);
  return(dispatch) => {
    const url = APIUrls.userRentApply();
    const userID = localStorage.getItem('userId');
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({
        userID: localStorage.getItem('userId'),
        propertyID:propertyID._id
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.success){
        // console.log(data);
        dispatch(userapplyrentSuccess());
        location.reload();
        return;
      }
     
    })
  }
}