import {
    GET_PROJECTS,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_ERROR,
    GET_PROJECT_BYID,
    GET_PROJECT_BYID_SUCCESS,
    GET_PROJECT_BYID_ERROR
} from '../constants';

export const getProjectsReducer = (state = {}, {type, data, error}) => {
    switch(type) {
        case GET_PROJECTS: 
            return data
        case GET_PROJECTS_SUCCESS:
            return data;
        case GET_PROJECTS_ERROR:
            return error;
        default: 
            return state
    }
}

export const getProjectByIdReducer = (state = {}, {type, data, error}) => {
    switch(type) {
        case GET_PROJECT_BYID: 
            return data
        case GET_PROJECT_BYID_SUCCESS:
            return data;
        case GET_PROJECT_BYID_ERROR:
            return error;
        default: 
            return state
    }
}