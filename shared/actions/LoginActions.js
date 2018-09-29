import {
    GET_LOGIN
} from '../constants';

export const getLogin = (data) => {
    return {
        type: GET_LOGIN,
        data
    }
}