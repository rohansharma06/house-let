import{
    ADD_PROPERTY_START,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAILED,
    FETCH_PROPERTY,
    FETCH_ALL_PROPERTY,
    FETCH_PROPERTY_DETAILS,
    ACCEPT_PROPERTY_APPLICATION,
    DECLINE_PROPERTY_APPLICATION,
} from './actionType';
import { data as propertyList } from '../component/buyer/data';

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
            // console.log('add data success',data);
            if(data.success){
                dispatch(addPropertySuccess(data.message));
                location.reload();
                return;
            }
            dispatch(addPropertyFailed('Server Error! Try again'));
        })
        
    }
}

export function fetchPropertySuccess(data){
    return {
        type: FETCH_PROPERTY,
        data
    }
}

export function fetchProperty(){
    return(dispatch) => {
        const url = APIUrls.fetchproperty();
        fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`, 
            }
        })
        .then((response) => response.json())
        .then(data => {
            if(data.success){
                // console.log('fetchProperty:',data);
                dispatch(fetchPropertySuccess(data.Property));
            }
            
        })
    }
}


export function allPropertySuccess(data){
    return{
        type: FETCH_ALL_PROPERTY,
        data
    }
}

export function fetchAllProperty(){
    return(dispatch) => {
        const url = APIUrls.fetchAllproperty();
        fetch(url,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', 
            }
        })
        .then((response) => response.json())
        .then(data => {
            if(data.success){
                // console.log('fetchProperty:',data.property[0]);
                propertyList.length = 0;
                propertyList.push(...data.property);
                dispatch(allPropertySuccess(data.property));
                return;
            }
        })
    }
}

export function fetchdetailsSuccess(data){
    return {
        type: FETCH_PROPERTY_DETAILS,
        data
    }
}
export function fetchPropertyDetails(){
    let proerty_id = window.location.href.split(':').reverse()[0];
    return(dispatch) => {
        const url = APIUrls.fetchPropertyDetails();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`, 
            },
            body: getFormBody({propertyID:proerty_id})
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.success){
                dispatch(fetchdetailsSuccess(data.property));
                return;
            }
            // console.log(data);
        })
    }
}



export function acceptApplication(id,status){
    return(dispatch) => {
        const url = APIUrls.propertyStatus();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`, 
            },
            body: getFormBody({id,status})
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            location.reload();
            return;
        })
    }
}