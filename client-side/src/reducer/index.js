import { combineReducers } from 'redux';
import auth from './auth';
import isadd from './property';

export default combineReducers({
    auth,
    isadd,
});