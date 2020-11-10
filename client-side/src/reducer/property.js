import{
    ADD_PROPERTY_START,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAILED,
    FETCH_PROPERTY,
    FETCH_PROPERTY_DETAILS,
} from '../Action/actionType';

const initialPropertyState = {
    allproperty:[],
    message: null,
    inProgress: false,
    selectedProperty:{}
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
        case FETCH_PROPERTY:
            return{
                ...state,
                allproperty: action.data,
            }
        case FETCH_PROPERTY_DETAILS:
            return {
                ...state,
                selectedProperty : action.data,
            }
        default:
            return state;
    }
}