import{
    ADD_PROPERTY_START,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAILED,
} from '../Action/actionType';

const initialPropertyState = {
    message: null,
    inProgress: false,
};

export default function auth(state = initialPropertyState, action) {
    switch (action.type) {
        case ADD_PROPERTY_START:
            return{
                ...state,
                inProgress: true,
            };
        case ADD_PROPERTY_SUCCESS:
            return{
                ...state,
                inProgress: false,
                message: action.msg,
            };
        case ADD_PROPERTY_FAILED:
            return{
                ...state,
                message: action.msg,
            }
        default:
            return state;
    }
}