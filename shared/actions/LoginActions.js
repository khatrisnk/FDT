import {
    GET_LOGIN,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR
} from '../constants';

export const getLogin = (data) => {
    return {
        type: GET_LOGIN,
        data
    }
}

export const getLoginSuccess = (data) => {
    return {
        type: GET_LOGIN_SUCCESS,
        data
    }
}

export const getLoginError = (error) => {
    return {
        type: GET_LOGIN_ERROR,
        error
    }
}