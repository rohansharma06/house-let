import {
    FETCH_ALL_PROPERTY,
    LOG_OUT,
    USER_LOGIN_FAILED,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_SIGNUP_FAILED,
    USER_SIGNUP_START,
    USER_SIGNUP_SUCCESS,
} from '../Action/actionType';

const initialAuthState = {
    allproperty: [],
    isLoggedin:false,
    inProgress: false,
    error: null,
    buyer_data: {},
    isSignup:false,
}

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case FETCH_ALL_PROPERTY:
            return{
                ...state,
                allproperty: action.data,
            }
        case USER_LOGIN_START:
        case USER_SIGNUP_START:{
            return {
                ...state,
                inProgress: true,
            }
        }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                inProgress:false,
                isLoggedin:true,
                error: null,
                buyer_data: action.data,
            }
        case USER_SIGNUP_SUCCESS:
            return{
                ...state,
                isSignup:true,
            }
        case USER_LOGIN_FAILED:
        case USER_SIGNUP_FAILED:
            return {
                ...state,
                inProgress:false,
                error: action.error
            }
        case LOG_OUT:
            return{
                ...state,
                isLoggedin: false,
                buyer_data: {},
            }
        default:
            return state;
    }
}