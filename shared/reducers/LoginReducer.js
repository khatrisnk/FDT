import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_ERROR } from '../constants';

export const getLoginReducer = (state = {}, {type, data, error}) => {
    switch(type) {
        case GET_LOGIN: 
            return data
        case GET_LOGIN_SUCCESS:
            return data;
        case GET_LOGIN_ERROR:
            return error;
        default: 
            return state
    }
}