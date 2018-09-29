import { GET_LOGIN } from '../constants';

export const getLoginReducer = (state = {name: 'Siddhartha'}, {type, data, error}) => {
    switch(type) {
        case GET_LOGIN: 
            return data
        default: 
            return state
    }
}