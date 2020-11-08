import{
    ADMIN_LOGIN_START,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILED,
    ADMIN_SIGNUP_START,
    ADMIN_SIGNUP_FAILED,
    ADMIN_SIGNUP_SUCCESS,
    LOG_OUT,
} from '../Action/actionType';

const initialAuthState = {
    user: {},
    error: null,
    isLoggedin: false,
    inProgress: false,
    isSignup: false,
};

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
      case ADMIN_LOGIN_START:
      case ADMIN_SIGNUP_START:
        return {
          ...state,
          inProgress: true,
        };
      case ADMIN_LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedin: true,
          inProgress: false,
          error: null,
          user: action.user,
        };
        case ADMIN_SIGNUP_SUCCESS:
        return {
          ...state,
          isSignup:true,
          inProgress: false,
          error: null,
        };
      case ADMIN_LOGIN_FAILED:
      case ADMIN_SIGNUP_FAILED:
        return {
          ...state,
          inProgress: false,
          error: action.error,
        };
      case LOG_OUT:
        return {
          ...state,
          user: {},
          isLoggedin: false,
        };
      default:
        return state;
    }
}