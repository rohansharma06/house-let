import{
    ADD_PROPERTY_START,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAILED,
} from './actionType';


import { APIUrls } from '../helpers/urls';
import { getFormBody,getAuthTokenFromLocalStorage } from '../helpers/utils';


export function startAddProperty(){
    return {
        type: ADD_PROPERTY_START,
    }
}
export function addPropertySuccess(msg){
    return{
        type: ADD_PROPERTY_SUCCESS,
        msg
    }
}
export function addPropertyFailed(msg){
    return {
        type: ADD_PROPERTY_FAILED,
        msg
    }
}

export function addproperty(name,city,rent,phone,bhk,description){
    return(dispatch) => {
        dispatch(startAddProperty());
        const url = APIUrls.addproperty();
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`, 
            },
            body: getFormBody({name,city,rent,phone,bhk,description}),
        })
        .then((response) => response.json())
        .then(data => {
            console.log('add data success',data);
            if(data.success){
                dispatch(addPropertySuccess(data.message));
                return;
            }
            dispatch(addPropertyFailed('Server Error! Try again'));
        })
        
    }
}