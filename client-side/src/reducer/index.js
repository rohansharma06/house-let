import { combineReducers } from 'redux';
import auth from './auth';
import isadd from './property';
import user from './user';

export default combineReducers({
    auth,
    isadd,
    user,
});