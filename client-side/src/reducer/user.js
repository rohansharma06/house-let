import {
    FETCH_ALL_PROPERTY,
} from '../Action/actionType';

const initialAuthState = {
    allproperty: [],
}

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case FETCH_ALL_PROPERTY:
            return{
                ...state,
                allproperty: action.data,
            }
        default:
            return state;
    }
}